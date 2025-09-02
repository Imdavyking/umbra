import { combineLatest, from, map, Observable, tap } from "rxjs";
import { encodeTokenType, nativeToken } from "@midnight-ntwrk/ledger";
import { ContractAddress } from "@midnight-ntwrk/compact-runtime";
import {
  deployContract,
  FinalizedCallTxData,
  findDeployedContract,
} from "@midnight-ntwrk/midnight-js-contracts";
import {
  CoinInfo,
  Contract,
  witnesses,
  ledger,
  ZkBadgePrivateState,
  createZkBadgePrivateState,
  Maybe,
  ZswapCoinPublicKey,
  Certificate,
} from "@zkbadge/zkbadge-contract";
import { type Logger } from "pino";
import * as utils from "./utils.js";
import {
  CertVerificationContract,
  CertVerificationContractProviders,
  CertVerificationPrivateStateId,
  DeployedCertVerificationOnchainContract,
  DerivedCertVerificationContractState,
} from "./common-types.js";

const CertVerificationContractInstance: CertVerificationContract = new Contract(
  witnesses
);

export interface DeployedCertVerificationAPI {
  readonly deployedContractAddress: ContractAddress;
  readonly state: Observable<DerivedCertVerificationContractState>;
  verifyCertificates: (
    hashes: (Uint8Array | null)[]
  ) => Promise<
    FinalizedCallTxData<CertVerificationContract, "verify_certificates">
  >;
  register: (
    issuer_0: ZswapCoinPublicKey,
    issued_at_0: bigint,
    valid_until_0: bigint,
    is_valid_0: boolean,
    year_of_birth_0: bigint
  ) => Promise<FinalizedCallTxData<CertVerificationContract, "register">>;
  checkVerification: (
    cert_0: Certificate
  ) => Promise<
    FinalizedCallTxData<CertVerificationContract, "check_verification">
  >;
  accessPrivateFeature: (
    cert_0: Certificate,
    feature_id_0: bigint,
    amount: number
  ) => Promise<
    FinalizedCallTxData<CertVerificationContract, "access_private_feature">
  >;
  vote_on_feature: (
    cert: Certificate,
    feature_id: bigint,
    like: boolean,
    vote_salt: string
  ) => Promise<
    FinalizedCallTxData<CertVerificationContract, "vote_on_feature">
  >;
  create_feature: (
    feature_name: string,
    min_age: bigint,
    description: string,
    category: string,
    image_url: string,
    price: bigint,
    created_at: bigint,
    coin_type: string
  ) => Promise<FinalizedCallTxData<CertVerificationContract, "create_feature">>;
}

export class CertVerificationAPI implements DeployedCertVerificationAPI {
  deployedContractAddress: string;
  state: Observable<DerivedCertVerificationContractState>;

  private constructor(
    providers: CertVerificationContractProviders,
    public readonly allReadyDeployedContract: DeployedCertVerificationOnchainContract,
    private logger?: Logger
  ) {
    this.deployedContractAddress =
      allReadyDeployedContract.deployTxData.public.contractAddress;

    this.state = combineLatest(
      [
        providers.publicDataProvider
          .contractStateObservable(this.deployedContractAddress, {
            type: "all",
          })
          .pipe(
            map((contractState) => ledger(contractState.data)),
            tap((ledgerState) =>
              logger?.trace({ ledgerStaeChanged: ledgerState })
            )
          ),
        from(
          providers.privateStateProvider.get(CertVerificationPrivateStateId)
        ),
      ],
      (ledgerState, _privateState) => {
        console.log(ledgerState);
        return {
          registeredHashes: utils.createDerivedHashesArray(
            ledgerState.registered_hashes
          ),
          verifiedUsers: utils.createDerivedUsersArray(
            ledgerState.verified_users
          ),
          features: utils.createDerivedFeaturesArray(ledgerState.features),
          feature_vote_tallies: utils.createDerivedFeatureVoteTalliesArray(
            ledgerState.feature_vote_tallies
          ),
        };
      }
    );
  }

  static async deployCertVerificationContract(
    providers: CertVerificationContractProviders,
    logger?: Logger
  ): Promise<CertVerificationAPI> {
    logger?.info("deploy contract");

    const deployedContract = await deployContract<CertVerificationContract>(
      providers,
      {
        contract: CertVerificationContractInstance,
        initialPrivateState:
          await CertVerificationAPI.getPrivateState(providers),
        privateStateId: CertVerificationPrivateStateId,
      }
    );

    logger?.trace(
      `Deployment successfull ${deployedContract.deployTxData.public}`
    );

    return new CertVerificationAPI(providers, deployedContract, logger);
  }

  static async joinCertVerificationContract(
    providers: CertVerificationContractProviders,
    contractAddress: string,
    logger?: Logger
  ): Promise<CertVerificationAPI> {
    const existingContract =
      await findDeployedContract<CertVerificationContract>(providers, {
        contract: CertVerificationContractInstance,
        contractAddress,
        privateStateId: CertVerificationPrivateStateId,
        initialPrivateState:
          await CertVerificationAPI.getPrivateState(providers),
      });

    logger?.trace(`Found Contract...${existingContract.deployTxData.public}`);
    return new CertVerificationAPI(providers, existingContract, logger);
  }

  async verifyCertificates(
    hashes: (Uint8Array | null)[]
  ): Promise<
    FinalizedCallTxData<CertVerificationContract, "verify_certificates">
  > {
    this.logger?.info("Verifying certificate hashes...");

    const emptyHash = new Uint8Array(32);
    const maybeHashes: Maybe<Uint8Array<ArrayBufferLike>>[] = hashes.map(
      (hash) =>
        hash
          ? { is_some: true, value: hash }
          : { is_some: false, value: emptyHash }
    );
    const txData =
      await this.allReadyDeployedContract.callTx.verify_certificates(
        maybeHashes
      );

    this.logger?.trace({
      transactionAdded: {
        circuit: "verify_certificates",
        txHash: txData.public.txHash,
      },
    });
    return txData;
  }

  async vote_on_feature(
    cert: Certificate,
    feature_id: bigint,
    like: boolean,
    vote_salt: string
  ): Promise<FinalizedCallTxData<CertVerificationContract, "vote_on_feature">> {
    this.logger?.info(`Voting on feature ${feature_id}...`);

    const txData = await this.allReadyDeployedContract.callTx.vote_on_feature(
      cert,
      feature_id,
      like,
      utils.hexToUint8Array(vote_salt)
    );

    this.logger?.trace({
      transactionAdded: {
        circuit: "vote_on_feature",
        txHash: txData.public.txHash,
      },
    });
    return txData;
  }

  async create_feature(
    feature_name: string,
    min_age: bigint,
    description: string,
    category: string,
    image_url: string,
    price: bigint,
    created_at: bigint,
    coin_type: string
  ): Promise<FinalizedCallTxData<CertVerificationContract, "create_feature">> {
    this.logger?.info(`Creating feature ${feature_name}...`);

    const txData = await this.allReadyDeployedContract.callTx.create_feature(
      feature_name,
      min_age,
      description,
      category,
      image_url,
      price,
      created_at,
      encodeTokenType(coin_type)
    );

    this.logger?.trace({
      transactionAdded: { circuit: "feature", txHash: txData.public.txHash },
    });
    return txData;
  }

  async register(
    issuer_0: ZswapCoinPublicKey,
    issued_at_0: bigint,
    valid_until_0: bigint,
    is_valid_0: boolean,
    year_of_birth_0: bigint
  ): Promise<FinalizedCallTxData<CertVerificationContract, "register">> {
    this.logger?.info("Registering user certificate...");

    const txData = await this.allReadyDeployedContract.callTx.register(
      issuer_0,
      issued_at_0,
      valid_until_0,
      is_valid_0,
      year_of_birth_0
    );

    this.logger?.trace({
      transactionAdded: { circuit: "register", txHash: txData.public.txHash },
    });
    return txData;
  }

  async checkVerification(
    cert_0: Certificate
  ): Promise<
    FinalizedCallTxData<CertVerificationContract, "check_verification">
  > {
    this.logger?.info("Checking certificate verification...");

    const txData =
      await this.allReadyDeployedContract.callTx.check_verification(cert_0);

    this.logger?.trace({
      transactionAdded: {
        circuit: "check_verification",
        txHash: txData.public.txHash,
      },
    });
    return txData;
  }

  coin(amount: number): CoinInfo {
    return {
      color: encodeTokenType(nativeToken()),
      nonce: utils.randomNonceBytes(32),
      value: BigInt(amount),
    };
  }

  async accessPrivateFeature(
    cert_0: Certificate,
    feature_id_0: bigint,
    amount: number
  ): Promise<
    FinalizedCallTxData<CertVerificationContract, "access_private_feature">
  > {
    this.logger?.info("Accessing private feature...");

    const txData =
      await this.allReadyDeployedContract.callTx.access_private_feature(
        cert_0,
        feature_id_0,
        this.coin(amount)
      );

    this.logger?.trace({
      transactionAdded: {
        circuit: "access_private_feature",
        txHash: txData.public.txHash,
      },
    });
    return txData;
  }

  private static async getPrivateState(
    providers: CertVerificationContractProviders
  ): Promise<ZkBadgePrivateState> {
    const existingPrivateState = await providers.privateStateProvider.get(
      CertVerificationPrivateStateId
    );
    console.log(`states: ${existingPrivateState}`);
    return (
      existingPrivateState ??
      createZkBadgePrivateState({
        issuer: {
          bytes: utils.randomNonceBytes(32),
        },
        issued_at: BigInt(0),
        valid_until: BigInt(0),
        is_valid: false,
        owner: {
          bytes: utils.randomNonceBytes(32),
        },
        year_of_birth: BigInt(0),
      })
    );
  }
}

export * as utils from "./utils.js";
export * from "./common-types.js";
