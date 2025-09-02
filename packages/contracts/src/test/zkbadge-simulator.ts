import {
  type CircuitContext,
  QueryContext,
  sampleContractAddress,
  constructorContext
} from "@midnight-ntwrk/compact-runtime";
import {
  Contract,
  type Ledger,
  ledger
} from "../managed/zkbadge/contract/index.cjs";
import { utils } from "@zkbadge/zkbadge-api";
import { type ZkBadgePrivateState, witnesses } from "../witnesses.js";

// This is over-kill for such a simple contract, but the same pattern can be used to test more
// complex contracts.
export class ZkBadgeSimulator {
  readonly contract: Contract<ZkBadgePrivateState>;
  circuitContext: CircuitContext<ZkBadgePrivateState>;

  constructor() {
    this.contract = new Contract<ZkBadgePrivateState>(witnesses);

    const {
      currentPrivateState,
      currentContractState,
      currentZswapLocalState
    } = this.contract.initialState(
      constructorContext(
        {
          certificate: {
            issuer: {
              bytes: utils.randomNonceBytes(32)
            },
            issued_at: BigInt(0),
            valid_until: BigInt(0),
            is_valid: true,
            owner: {
              bytes: utils.randomNonceBytes(32)
            },
            year_of_birth: BigInt(0)
          }
        },
        "0".repeat(64)
      )
    );
    this.circuitContext = {
      currentPrivateState,
      currentZswapLocalState,
      originalState: currentContractState,
      transactionContext: new QueryContext(
        currentContractState.data,
        sampleContractAddress()
      )
    };
  }

  public getLedger(): Ledger {
    return ledger(this.circuitContext.transactionContext.state);
  }

  public getPrivateState(): ZkBadgePrivateState {
    return this.circuitContext.currentPrivateState;
  }

  public register(): Ledger {
    // Update the current context to be the result of executing the circuit.
    this.circuitContext = this.contract.impureCircuits.register(
      this.circuitContext,
      {
        bytes: utils.randomNonceBytes(32)
      },
      BigInt(0),
      BigInt(0),
      true,
      BigInt(0)
    ).context;
    return ledger(this.circuitContext.transactionContext.state);
  }
}
