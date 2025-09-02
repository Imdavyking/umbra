import { ellipsify } from "../utils/ellipsify";
import useMidnightWallet from "../hookes/useMidnightWallet";
export default function ConnectWalletButton() {
  const walletContext = useMidnightWallet();
  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={
          walletContext?.walletState.hasConnected
            ? () => {
                walletContext?.disconnect();
              }
            : () => {
                walletContext?.connectToWalletAndInitializeProviders();
              }
        }
        className={`cursor-pointer px-6 py-2 ${
          walletContext?.walletState.address
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50`}
      >
        {!walletContext?.walletState.hasConnected
          ? "Connect Wallet"
          : walletContext.walletState.address
            ? `Disconnect (${ellipsify(walletContext.walletState.address)})`
            : "Connecting..."}
      </button>
    </div>
  );
}
