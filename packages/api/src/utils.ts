import { Logger } from "pino";
import { STATUS, ZswapCoinPublicKey } from "@zkbadge/zkbadge-contract";
import {
  DerivedFeature,
  DerivedHashStatus,
  DerivedVerifiedUser,
} from "./common-types.js";

// Checks if two Uint8Arrays equal each other
export function arraysEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Generate random nonce bytes
export const randomNonceBytes = (
  length: number,
  logger?: Logger
): Uint8Array => {
  const newBytes = new Uint8Array(length);
  crypto.getRandomValues(newBytes);
  logger?.info(`Random nonce bytes ${newBytes}`);
  return newBytes;
};

// Convert Uint8Array to hex string
export function uint8ArrayToHex(array: Uint8Array): string {
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Convert hex string to Uint8Array
export function hexToUint8Array(hexStr: string): Uint8Array {
  if (hexStr.length % 2 !== 0) {
    throw new Error(`Invalid hex string length: ${hexStr}`);
  }
  const bytes = new Uint8Array(hexStr.length / 2);
  for (let i = 0; i < hexStr.length; i += 2) {
    bytes[i / 2] = parseInt(hexStr.substr(i, 2), 16);
  }
  return bytes;
}

// Derive registered hashes into usable objects
export function createDerivedHashesArray(hashes: {
  isEmpty(): boolean;
  size(): bigint;
  member(key: Uint8Array): boolean;
  lookup(key: Uint8Array): STATUS;
  [Symbol.iterator](): Iterator<[Uint8Array, STATUS]>;
}): DerivedHashStatus[] {
  return Array.from(hashes).map(([hash, status]) => ({
    hash,
    status,
  }));
}

export function createDerivedUsersArray(users: {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: ZswapCoinPublicKey): boolean;
  lookup(key_0: ZswapCoinPublicKey): boolean;
  [Symbol.iterator](): Iterator<[ZswapCoinPublicKey, boolean]>;
}): DerivedVerifiedUser[] {
  return Array.from(users).map(([user, verified]) => ({
    user: user.bytes,
    verified,
  }));
}

export function createDerivedFeaturesArray(features: {
  isEmpty(): boolean;
  size(): bigint;
  member(key: bigint): boolean;
  lookup(key: bigint): {
    creator: { bytes: Uint8Array };
    name: string;
    description: string;
    category: string;
    image_url: string;
    min_age: bigint;
    price: bigint;
    created_at: bigint;
    is_active: boolean;
    coin_type: Uint8Array;
  };
  [Symbol.iterator](): Iterator<[bigint, any]>;
}): DerivedFeature[] {
  return Array.from(features).map(([id, feature]) => ({
    id,
    feature,
  }));
}

export function createDerivedFeatureVoteTalliesArray(tallies: {
  isEmpty(): boolean;
  size(): bigint;
  member(key: bigint): boolean;
  lookup(key: bigint): { up: bigint; down: bigint };
  [Symbol.iterator](): Iterator<[bigint, { up: bigint; down: bigint }]>;
}): { featureId: bigint; tally: { up: bigint; down: bigint } }[] {
  return Array.from(tallies).map(([featureId, tally]) => ({
    featureId,
    tally,
  }));
}

export default {
  arraysEqual,
  randomNonceBytes,
  uint8ArrayToHex,
  hexToUint8Array,
  createDerivedHashesArray,
  createDerivedUsersArray,
};
