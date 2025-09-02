import {
  Contract,
  Witnesses,
  Certificate,
  STATUS,
  ZkBadgePrivateState,
} from "@zkbadge/zkbadge-contract";

import { MidnightProviders } from "@midnight-ntwrk/midnight-js-types";
import { type FoundContract } from "@midnight-ntwrk/midnight-js-contracts";

export const CertVerificationPrivateStateId =
  "ZkBadgePrivateStatea694492fa-696cd2fbefbcefabef";
export type PrivateStateId = typeof CertVerificationPrivateStateId;

export type CertVerificationContract = Contract<
  ZkBadgePrivateState,
  Witnesses<ZkBadgePrivateState>
>;

export type CircuitKeys = Exclude<
  keyof CertVerificationContract["impureCircuits"],
  number | symbol
>;

export type CertVerificationContractProviders = MidnightProviders<
  CircuitKeys,
  PrivateStateId,
  ZkBadgePrivateState
>;

export type DeployedCertVerificationOnchainContract =
  FoundContract<CertVerificationContract>;

export type DerivedCertVerificationContractState = {
  readonly registeredHashes: DerivedHashStatus[];
  readonly verifiedUsers: DerivedVerifiedUser[];
  readonly features: DerivedFeature[];
  readonly feature_vote_tallies: DerivedFeatureVoteTally[];
};

export type DerivedHashStatus = {
  hash: Uint8Array;
  status: STATUS;
};

export type DerivedVerifiedUser = {
  user: Uint8Array;
  verified: boolean;
};

export type DerivedFeatureVoteTally = {
  featureId: bigint;
  tally: {
    up: bigint;
    down: bigint;
  };
};

export type DerivedFeature = {
  id: bigint;
  feature: {
    creator: Uint8Array;
    name: string;
    description: string;
    category: string;
    imageUrl: string;
    minAge: number;
    price: bigint;
    createdAt: bigint;
    isActive: boolean;
    coinType: Uint8Array;
  };
};
