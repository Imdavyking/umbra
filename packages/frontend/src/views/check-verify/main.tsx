import { useState } from "react";
import useDeployment from "../../hookes/useDeployment";
import { toast } from "react-toastify";
import type { JsonCertificate } from "../../lib/utils";
import { hexToUint8Array } from "../../../../api/dist/utils";
import { wait } from "../../utils/helpers";

const VerifyBadge = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [certJson, setCertJson] = useState<JsonCertificate | null>(null);

  const deploymentContext = useDeployment();

  // Handle user uploading JSON file
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const json = JSON.parse(text);
      setCertJson(json);
      setStatus("✅ Certificate file loaded. Click verify to continue.");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Invalid JSON file. Please upload the correct certificate.");
    }
  };

  const handleVerifying = async () => {
    if (!certJson) {
      setError("Please upload your certificate JSON first.");
      return;
    }

    setLoading(true);
    setError("");
    setStatus("");

    try {
      if (!deploymentContext?.hasJoined) {
        toast.info(`Joining contract...try again in a moment`);
        await deploymentContext?.onJoinContract();
        await wait(1);
        toast.info(`Contract joined successfully`);
      }

      // Call check_verification with uploaded certJson
      const txData = await deploymentContext?.zkBadgeApi?.checkVerification({
        issuer: {
          bytes: hexToUint8Array(certJson.issuer),
        },
        issued_at: BigInt(certJson.issued_at),
        valid_until: BigInt(certJson.valid_until),
        is_valid: certJson.is_valid,
        owner: {
          bytes: hexToUint8Array(certJson.owner),
        },
        year_of_birth: BigInt(certJson.year_of_birth),
      });

      if (txData?.public.status === "SucceedEntirely") {
        toast.success("Certificate verified successfully!");
        setStatus("✅ Certificate is valid.");
      } else {
        throw new Error("Certificate is not valid.");
      }
    } catch (err: any) {
      console.error(err);
      setError("❌ Verification failed. " + (err?.message ?? ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Verify Certificate</h1>
      <p className="text-gray-600 mb-6">
        Upload the JSON file you downloaded when registering your badge. We'll
        check if it's been verified.
      </p>

      {/* Upload JSON file */}
      <input
        type="file"
        accept="application/json"
        onChange={handleFileUpload}
        className="mb-4 block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2"
      />

      <button
        onClick={handleVerifying}
        disabled={loading || !certJson}
        className="bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-800 transition disabled:opacity-50"
      >
        {loading ? "Verifying..." : "Verify Badge"}
      </button>

      {status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
      {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}
    </div>
  );
};

export default VerifyBadge;
