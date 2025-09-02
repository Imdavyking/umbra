# 🌘 Umbra – Privacy-Preserving Cross-Chain Bridge

A decentralized **zero-knowledge bridge** built with **Midnight’s Compact language**, allowing users to **transfer tokens from Midnight to StarkNet** without revealing their identity, balance, or on-chain activity.

---

## 🚀 Overview

`Umbra` is a **privacy-first cross-chain bridge** that allows users to move mock tokens between **Midnight** and **StarkNet** while shielding their identity and transaction metadata using **zero-knowledge proofs**.

With **ZK-powered deposits, private commitments**, and a relay-based withdrawal system, Umbra shows how cross-chain transfers can be both **interoperable and private**.

---

## 🔐 Key Features

- ✅ **Private token deposit via Midnight smart contracts**
- ✅ **Zero-knowledge proof of deposit + intent**
- ✅ **Shielded cross-chain relay mechanism**
- ✅ **Mocked token transfer on StarkNet**
- ✅ **ZK circuits written in Compact**
- ✅ **Frontend built with React + MidnightJS**

---

## 🧠 Use Case Examples

- Move assets from a private chain (Midnight) to a public chain (StarkNet) **without leaking user identity**
- Bridge assets in **anonymous DAOs or DeFi platforms**
- Power **confidential liquidity movements** between L2s
- Provide the backbone for future **multi-chain ZK infrastructure**

---

## 🏗️ Architecture

### 🧾 Midnight Smart Contract (Compact)

- `deposit_commitment()`: Accepts a deposit + ZK proof of ownership
- `generate_commitment()`: Creates a unique shielded hash
- Emits an event with a **commitment hash only** (no sender data)

### 🛰️ Relayer (Node.js / Rust)

- Listens for `commitment` events on Midnight
- Validates and forwards **ZK proof** + destination to StarkNet
- Acts as a privacy-preserving off-chain bridge agent

### 🧮 StarkNet Contract (Cairo)

- Accepts ZK proof + commitment
- Verifies that the proof matches a valid deposit
- Releases mock tokens to the user's StarkNet address

> See [`contracts/`](./contracts/) for Compact and Cairo code

---

## 🌐 Frontend (React + MidnightJS)

- Connect with **Lace Wallet**
- Generate and submit ZK proofs
- View bridging status
- Simulate private token movement across chains

> See [`frontend/`](./frontend/) for full UI

---

## 🛠️ How to Run Locally

### 🧩 Prerequisites

- [Lace Wallet](https://www.lace.io)
- Midnight CLI + testnet access
- Node.js ≥ v18
- Docker (for proof server)
- Yarn

### Run Steps

```bash
# Start the ZK proof server
docker run -p 6300:6300 midnightnetwork/proof-server -- 'midnight-proof-server --network testnet'

# Install and build
yarn install

# Build contracts
cd packages/contracts
npx turbo run build

# Start the CLI
cd ../cli
npx turbo run build
yarn standalone # or yarn testnet-remote

# Build frontend
cd ../frontend
yarn build
```

---

## 🧪 Sample Bridge Flow

1. User deposits 100 mock tokens into **Midnight contract**
2. Generates a ZK proof of ownership + target StarkNet address
3. Umbra Relayer picks up the event and forwards proof to StarkNet
4. StarkNet contract verifies proof and releases 100 tokens to recipient
5. Transaction is **completely private** on Midnight and partially shielded on StarkNet

---

## 🧰 Tech Stack

| Layer        | Tech                               |
| ------------ | ---------------------------------- |
| ZK Proofs    | Midnight Compact Language          |
| Contracts    | Midnight + StarkNet (Cairo)        |
| Bridge Logic | Node.js (Relayer Listener)         |
| Wallet       | [Lace Wallet](https://www.lace.io) |
| UI           | React + TailwindCSS + MidnightJS   |

---

## 🥇 Hackathon Submission

- **Project**: Umbra
- **Team**: Davyking
- **Track**: Protect That Data (Privacy + ZK)
- **License**: Apache 2.0

---

## 🔮 Future Enhancements

- Add multi-asset support (e.g., NFT bridging)
- Implement batching for large anonymity sets
- Add withdrawal delay to enhance unlinkability
- Expand to other ZK chains (e.g., zkSync, Scroll)

---

## ⚠️ Notes & Gotchas

- This is a **mock-token demo** — no real-world assets involved
- StarkNet interaction is partially simulated for speed
- Midnight testnet setup required for ZK proof generation
