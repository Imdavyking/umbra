import { describe, it, expect } from "vitest";
import { ZkBadgeSimulator } from "./zkbadge-simulator";
import {
  NetworkId,
  setNetworkId
} from "@midnight-ntwrk/midnight-js-network-id";
import { STATUS } from "@zkbadge/zkbadge-contract";
setNetworkId(NetworkId.Undeployed);

describe("ZkBadge smart contract", () => {
  it("generates initial ledger state deterministically", () => {
    const simulator0 = new ZkBadgeSimulator();
    const simulator1 = new ZkBadgeSimulator();
    expect(simulator0.getLedger()).toEqual(simulator1.getLedger());
  });

  it("properly initializes ledger state and private state", () => {
    const simulator = new ZkBadgeSimulator();
    const initialLedgerState = simulator.getLedger();
    expect(initialLedgerState.admin).toEqual(0n);
    const initialPrivateState = simulator.getPrivateState();
    expect(initialPrivateState).toEqual({});
  });

  it("registers the user certificate correctly", () => {
    const simulator = new ZkBadgeSimulator();
    const nextLedgerState = simulator.register();
    nextLedgerState.certificate_owners
    // expect(nextLedgerState.certificate_owners.lookup(new Uint8Array(0))).toEqual(
    //   STATUS.Verified
    // );
    // const nextPrivateState = simulator.getPrivateState();
    // expect(nextPrivateState).toEqual({});
  });
});
