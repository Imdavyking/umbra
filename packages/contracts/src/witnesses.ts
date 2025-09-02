import type {
  Certificate,
  ZswapCoinPublicKey
} from "./managed/zkbadge/contract/index.cjs";
import { Ledger } from "./managed/zkbadge/contract/index.cjs";
import { sha256 } from "js-sha256";
import { WitnessContext } from "@midnight-ntwrk/compact-runtime";

export function uint8ArrayToHex(array: Uint8Array): string {
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// ─────────────────────────────────────────────────────────────────────────────
// Private State
// ─────────────────────────────────────────────────────────────────────────────

export type ZkBadgePrivateState = {
  readonly certificate: Certificate;
};

export const createZkBadgePrivateState = (certificate: Certificate) => ({
  certificate
});

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const isValidCert = (valid_until: bigint, is_valid: boolean) => {
  if (!is_valid) throw new Error("Certificate marked invalid");
  const now = BigInt(Date.now());

  if (BigInt(valid_until) * 1000n < now) {
    throw new Error("Certificate expired");
  }
};

const hashUint128 = (...inputs: (string | bigint | boolean)[]): bigint => {
  const h = sha256.create();
  for (const i of inputs) {
    h.update(i.toString());
  }
  const fullHash = new Uint8Array(h.digest()); // 32 bytes (256-bit)

  // Take last 16 bytes = 128 bits
  const slice = fullHash.slice(16); // bytes[16..31]

  // Convert to bigint
  let result = 0n;
  for (const byte of slice) {
    result = (result << 8n) + BigInt(byte);
  }
  return result; // fits in Uint<128>
};

function uint8ArrayToBigInt(bytes: Uint8Array): bigint {
  let result = 0n;
  for (const byte of bytes) {
    result = (result << 8n) + BigInt(byte);
  }
  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// Witness Implementations
// ─────────────────────────────────────────────────────────────────────────────

export const witnesses = {
  user_certificate: (
    { privateState }: WitnessContext<Ledger, ZkBadgePrivateState>,
    issuer: ZswapCoinPublicKey,
    issued_at: bigint,
    valid_until: bigint,
    is_valid: boolean,
    owner: ZswapCoinPublicKey,
    year_of_birth: bigint
  ): [ZkBadgePrivateState, Certificate] => {
    isValidCert(valid_until, is_valid);
    const cert: Certificate = {
      issuer,
      issued_at,
      valid_until,
      is_valid,
      owner,
      year_of_birth
    };

    return [privateState, cert];
  },

  prove_cert_signed_and_fresh: (
    { privateState }: WitnessContext<Ledger, ZkBadgePrivateState>,
    cert: Certificate
  ): [ZkBadgePrivateState, boolean] => {
    // For hackathon: skip cryptographic sig verification, just check validity
    isValidCert(cert.valid_until, cert.is_valid);
    return [privateState, true];
  },

  check_age_feature: (
    { privateState }: WitnessContext<Ledger, ZkBadgePrivateState>,
    cert: Certificate,
    feature_age: bigint
  ): [ZkBadgePrivateState, boolean] => {
    isValidCert(cert.valid_until, cert.is_valid);
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(cert.year_of_birth);
    const isOldEnough = age >= Number(feature_age);

    return [privateState, isOldEnough];
  },

  gen_access_nullifier: (
    { privateState }: WitnessContext<Ledger, ZkBadgePrivateState>,
    cert: Certificate,
    feature_id: bigint
  ): [ZkBadgePrivateState, bigint] => {
    const digest = hashUint128(
      uint8ArrayToHex(cert.owner.bytes),
      uint8ArrayToHex(cert.issuer.bytes),
      feature_id
    );
    console.log(`digest: ${digest}`);
    return [privateState, digest];
  },

  gen_vote_nullifier: (
    { privateState }: WitnessContext<Ledger, ZkBadgePrivateState>,
    cert: Certificate,
    feature_id: bigint,
    salt: Uint8Array
  ): [ZkBadgePrivateState, bigint] => {
    const digest = hashUint128(
      uint8ArrayToHex(cert.owner.bytes),
      uint8ArrayToHex(cert.issuer.bytes),
      feature_id,
      Buffer.from(salt).toString("hex")
    );

    console.log(`digest: ${digest}`);

    return [privateState, digest];
  }
};
