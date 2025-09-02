import React, { useMemo, useState } from "react";
import useDeployment from "../../hookes/useDeployment";
import { utils } from "@zkbadge/zkbadge-api";
import { toast } from "react-toastify";
import type { ZswapCoinPublicKey } from "@zkbadge/zkbadge-contract";
import { FaSpinner } from "react-icons/fa";
import useMidnightWallet from "../../hookes/useMidnightWallet";
import type { JsonCertificate } from "../../lib/utils";
import {
  parseCoinPublicKeyToHex,
  fromHex,
} from "@midnight-ntwrk/midnight-js-utils";
import { zkNetworkId } from "../../main";
import { NetworkId } from "@midnight-ntwrk/midnight-js-network-id";
import { wait } from "../../utils/helpers";

function toMsBigIntFromLocalDateTime(value: string): bigint {
  const ms = Date.parse(value);
  if (Number.isNaN(ms)) throw new Error("Invalid date/time");
  return BigInt(ms);
}

function currentISOForInput(minutesFromNow = 0) {
  const d = new Date(Date.now() + minutesFromNow * 60_000);
  const tzOffset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - tzOffset * 60_000);
  return local.toISOString().slice(0, 16);
}

export default function RegisterCertForm() {
  const deploymentContext = useDeployment();
  const walletContext = useMidnightWallet();
  const [issuerHex, setIssuerHex] = useState(
    utils.uint8ArrayToHex(utils.randomNonceBytes(32))
  );
  const [issuedAt, setIssuedAt] = useState(currentISOForInput(-1));
  const [validUntil, setValidUntil] = useState(currentISOForInput(24 * 30));
  const [isValid, setIsValid] = useState(true);
  const [yob, setYob] = useState(1999);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [downloadData, setDownloadData] = useState<any | null>(null);

  const canSubmit = useMemo(() => {
    return (
      issuerHex.trim().length > 0 && yob >= 1900 && yob <= 2100 && !submitting
    );
  }, [issuerHex, yob, submitting]);

  function handleDownload() {
    if (!downloadData) return;
    const blob = new Blob([JSON.stringify(downloadData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificate.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setDownloadData(null);
    setSubmitting(true);

    try {
      const issuer: ZswapCoinPublicKey = {
        bytes: utils.hexToUint8Array(issuerHex),
      };
      const issued_at = toMsBigIntFromLocalDateTime(issuedAt);
      const valid_until = toMsBigIntFromLocalDateTime(validUntil);

      if (valid_until <= issued_at) {
        throw new Error("Valid-until must be after Issued-at");
      }

      if (!deploymentContext?.hasJoined) {
        toast.info(`Joining contract...try again in a moment`);
        await deploymentContext?.onJoinContract();
        await wait(1);
        toast.info(`Contract joined successfully`);
      }

      const txData = await deploymentContext?.zkBadgeApi?.register(
        issuer,
        issued_at,
        valid_until,
        isValid,
        BigInt(yob)
      );

      console.log("Transaction data:", txData);

      if (txData?.public.status === "SucceedEntirely") {
        toast.success("Transaction successful");

        if (walletContext?.walletState?.coinPublicKey) {
          const networkValues = Object.values(NetworkId);
          const index = networkValues.indexOf(zkNetworkId);
          const hexKey = parseCoinPublicKeyToHex(
            walletContext?.walletState?.coinPublicKey,
            index
          );

          console.log(`Parsed hex key: ${hexKey}`);

          const keyBytes = fromHex(hexKey);

          console.log(`Key ${keyBytes}`);

          // Build certificate data for download
          const certObj: JsonCertificate = {
            issuer: issuerHex,
            issued_at: issued_at.toString(),
            valid_until: valid_until.toString(),
            is_valid: isValid,
            owner: hexKey,
            year_of_birth: yob,
          };

          console.log("Certificate data:", certObj);

          setDownloadData(certObj);

          handleDownload();
        }

        setSuccess("Certificate registered successfully ✔");
      } else {
        throw new Error("Transaction Failed");
      }
    } catch (err: any) {
      setError(err?.message ?? String(err));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl p-6">
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Register Certificate</h2>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        {/* Issuer */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Issuer Public Key (hex)
          </label>
          <input
            className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
            placeholder="0x..."
            value={issuerHex}
            onChange={(e) => setIssuerHex(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
          <p className="mt-1 text-xs text-gray-500">
            Expected raw hex (with or without 0x).
          </p>
        </div>

        {/* Issued at & Valid until */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Issued At</label>
            <input
              type="datetime-local"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
              value={issuedAt}
              onChange={(e) => setIssuedAt(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Valid Until
            </label>
            <input
              type="datetime-local"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
            />
          </div>
        </div>

        {/* is_valid */}
        <div className="flex items-center gap-3">
          <input
            id="is_valid"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
            checked={isValid}
            onChange={(e) => setIsValid(e.target.checked)}
          />
          <label htmlFor="is_valid" className="text-sm">
            Certificate is valid
          </label>
        </div>

        {/* Year of birth */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Year of Birth
          </label>
          <input
            type="number"
            min={1900}
            max={2100}
            className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:border-black focus:outline-none"
            value={yob}
            onChange={(e) => setYob(parseInt(e.target.value || "0", 10))}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={!canSubmit}
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? (
              <>
                <FaSpinner className="animate-spin w-5 h-5" />
              </>
            ) : (
              "Register"
            )}
          </button>

          <button
            type="button"
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm"
            onClick={() => {
              setIssuerHex("");
              setIssuedAt(currentISOForInput(-1));
              setValidUntil(currentISOForInput(24 * 30));
              setIsValid(true);
              setYob(1999);
              setError(null);
              setSuccess(null);
              setDownloadData(null);
            }}
          >
            Reset
          </button>
        </div>

        {/* Status messages */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* Download button */}
        {downloadData && (
          <button
            type="button"
            onClick={handleDownload}
            className="mt-3 w-full rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700"
          >
            Download Certificate (.json)
          </button>
        )}
      </form>
    </div>
  );
}
