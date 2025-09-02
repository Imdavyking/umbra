import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum STATUS { Pending = 0, Verified = 1, Revoked = 2 }

export type Certificate = { issuer: ZswapCoinPublicKey;
                            issued_at: bigint;
                            valid_until: bigint;
                            is_valid: boolean;
                            owner: ZswapCoinPublicKey;
                            year_of_birth: bigint
                          };

export type ZswapCoinPublicKey = { bytes: Uint8Array };

export type CoinInfo = { nonce: Uint8Array; color: Uint8Array; value: bigint };

export type QualifiedCoinInfo = { nonce: Uint8Array;
                                  color: Uint8Array;
                                  value: bigint;
                                  mt_index: bigint
                                };

export type Maybe<a> = { is_some: boolean; value: a };

export type Witnesses<T> = {
  user_certificate(context: __compactRuntime.WitnessContext<Ledger, T>,
                   issuer_0: ZswapCoinPublicKey,
                   issued_at_0: bigint,
                   valid_until_0: bigint,
                   is_valid_0: boolean,
                   owner_0: ZswapCoinPublicKey,
                   year_of_birth_0: bigint): [T, Certificate];
  prove_cert_signed_and_fresh(context: __compactRuntime.WitnessContext<Ledger, T>,
                              cert_0: Certificate): [T, boolean];
  check_age_feature(context: __compactRuntime.WitnessContext<Ledger, T>,
                    cert_0: Certificate,
                    feature_age_0: bigint): [T, boolean];
  gen_access_nullifier(context: __compactRuntime.WitnessContext<Ledger, T>,
                       cert_0: Certificate,
                       feature_id_0: bigint): [T, bigint];
  gen_vote_nullifier(context: __compactRuntime.WitnessContext<Ledger, T>,
                     cert_0: Certificate,
                     feature_id_0: bigint,
                     salt_0: Uint8Array): [T, bigint];
}

export type ImpureCircuits<T> = {
  add_trusted_issuer(context: __compactRuntime.CircuitContext<T>,
                     issuer_0: ZswapCoinPublicKey): __compactRuntime.CircuitResults<T, []>;
  remove_trusted_issuer(context: __compactRuntime.CircuitContext<T>,
                        issuer_0: ZswapCoinPublicKey): __compactRuntime.CircuitResults<T, []>;
  register(context: __compactRuntime.CircuitContext<T>,
           issuer_0: ZswapCoinPublicKey,
           issued_at_0: bigint,
           valid_until_0: bigint,
           is_valid_0: boolean,
           year_of_birth_0: bigint): __compactRuntime.CircuitResults<T, []>;
  verify_certificates(context: __compactRuntime.CircuitContext<T>,
                      hashes_0: Maybe<Uint8Array>[]): __compactRuntime.CircuitResults<T, []>;
  check_verification(context: __compactRuntime.CircuitContext<T>,
                     cert_0: Certificate): __compactRuntime.CircuitResults<T, []>;
  create_feature(context: __compactRuntime.CircuitContext<T>,
                 feature_name_0: string,
                 min_age_0: bigint,
                 description_0: string,
                 category_0: string,
                 image_url_0: string,
                 price_0: bigint,
                 created_at_0: bigint,
                 coin_type_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  access_private_feature(context: __compactRuntime.CircuitContext<T>,
                         cert_0: Certificate,
                         feature_id_0: bigint,
                         payment_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
  withdrawFunds(context: __compactRuntime.CircuitContext<T>,
                feature_id_0: bigint,
                _coinType_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  vote_on_feature(context: __compactRuntime.CircuitContext<T>,
                  cert_0: Certificate,
                  feature_id_0: bigint,
                  like_0: boolean,
                  vote_salt_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  get_feature_votes(context: __compactRuntime.CircuitContext<T>,
                    feature_id_0: bigint): __compactRuntime.CircuitResults<T, { up: bigint,
                                                                                down: bigint
                                                                              }>;
}

export type PureCircuits = {
  cert_hash(cert_0: Certificate): Uint8Array;
}

export type Circuits<T> = {
  cert_hash(context: __compactRuntime.CircuitContext<T>, cert_0: Certificate): __compactRuntime.CircuitResults<T, Uint8Array>;
  add_trusted_issuer(context: __compactRuntime.CircuitContext<T>,
                     issuer_0: ZswapCoinPublicKey): __compactRuntime.CircuitResults<T, []>;
  remove_trusted_issuer(context: __compactRuntime.CircuitContext<T>,
                        issuer_0: ZswapCoinPublicKey): __compactRuntime.CircuitResults<T, []>;
  register(context: __compactRuntime.CircuitContext<T>,
           issuer_0: ZswapCoinPublicKey,
           issued_at_0: bigint,
           valid_until_0: bigint,
           is_valid_0: boolean,
           year_of_birth_0: bigint): __compactRuntime.CircuitResults<T, []>;
  verify_certificates(context: __compactRuntime.CircuitContext<T>,
                      hashes_0: Maybe<Uint8Array>[]): __compactRuntime.CircuitResults<T, []>;
  check_verification(context: __compactRuntime.CircuitContext<T>,
                     cert_0: Certificate): __compactRuntime.CircuitResults<T, []>;
  create_feature(context: __compactRuntime.CircuitContext<T>,
                 feature_name_0: string,
                 min_age_0: bigint,
                 description_0: string,
                 category_0: string,
                 image_url_0: string,
                 price_0: bigint,
                 created_at_0: bigint,
                 coin_type_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  access_private_feature(context: __compactRuntime.CircuitContext<T>,
                         cert_0: Certificate,
                         feature_id_0: bigint,
                         payment_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
  withdrawFunds(context: __compactRuntime.CircuitContext<T>,
                feature_id_0: bigint,
                _coinType_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  vote_on_feature(context: __compactRuntime.CircuitContext<T>,
                  cert_0: Certificate,
                  feature_id_0: bigint,
                  like_0: boolean,
                  vote_salt_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  get_feature_votes(context: __compactRuntime.CircuitContext<T>,
                    feature_id_0: bigint): __compactRuntime.CircuitResults<T, { up: bigint,
                                                                                down: bigint
                                                                              }>;
}

export type Ledger = {
  readonly admin: ZswapCoinPublicKey;
  feature_balances: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): bigint;
    [Symbol.iterator](): Iterator<[bigint, bigint]>
  };
  trusted_issuers: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: ZswapCoinPublicKey): boolean;
    lookup(key_0: ZswapCoinPublicKey): boolean;
    [Symbol.iterator](): Iterator<[ZswapCoinPublicKey, boolean]>
  };
  registered_hashes: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): STATUS;
    [Symbol.iterator](): Iterator<[Uint8Array, STATUS]>
  };
  protocolTVL: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): QualifiedCoinInfo;
    [Symbol.iterator](): Iterator<[Uint8Array, QualifiedCoinInfo]>
  };
  certificate_owners: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: ZswapCoinPublicKey): boolean;
    lookup(key_0: ZswapCoinPublicKey): Uint8Array;
    [Symbol.iterator](): Iterator<[ZswapCoinPublicKey, Uint8Array]>
  };
  features: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { creator: ZswapCoinPublicKey,
                             name: string,
                             description: string,
                             category: string,
                             image_url: string,
                             min_age: bigint,
                             price: bigint,
                             created_at: bigint,
                             is_active: boolean,
                             coin_type: Uint8Array
                           };
    [Symbol.iterator](): Iterator<[bigint, { creator: ZswapCoinPublicKey,
  name: string,
  description: string,
  category: string,
  image_url: string,
  min_age: bigint,
  price: bigint,
  created_at: bigint,
  is_active: boolean,
  coin_type: Uint8Array
}]>
  };
  readonly feature_counter: bigint;
  access_nullifiers: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): boolean;
    [Symbol.iterator](): Iterator<[bigint, boolean]>
  };
  vote_nullifiers: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): boolean;
    [Symbol.iterator](): Iterator<[bigint, boolean]>
  };
  feature_vote_tallies: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { up: bigint, down: bigint };
    [Symbol.iterator](): Iterator<[bigint, { up: bigint, down: bigint }]>
  };
  verified_users: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: ZswapCoinPublicKey): boolean;
    lookup(key_0: ZswapCoinPublicKey): boolean;
    [Symbol.iterator](): Iterator<[ZswapCoinPublicKey, boolean]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
