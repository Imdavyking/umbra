import { StrictMode } from "react";
import { createRoot, type Container } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import pino from "pino";
import MidnightWalletProvider from "./providers/MidnightWalletProvider.js";
import DeployedContractProvider from "./providers/DeployedContractProvider.js";
import {
  setNetworkId,
  type NetworkId,
} from "@midnight-ntwrk/midnight-js-network-id";

export const zkNetworkId = (import.meta.env.VITE_NETWORK_ID || "TestNet") as NetworkId;

setNetworkId(zkNetworkId);

export const logger = pino({
  level: import.meta.env.VITE_LOGGING_LEVEL as string,
});

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <MidnightWalletProvider logger={logger}>
      <DeployedContractProvider logger={logger}>
        <App />
      </DeployedContractProvider>
    </MidnightWalletProvider>
  </StrictMode>
);
