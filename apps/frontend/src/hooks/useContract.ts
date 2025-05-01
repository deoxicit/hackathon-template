import { useMemo } from "react";
import { useAccount, useChainId } from "wagmi";
import {
  ContractInstance,
  ContractName,
  getContractAddress,
} from "../config/contracts";
import { useEthersSigner } from "./useEthersSigner";
import { HackathonToken__factory } from "../../../packages/contracts/typechain-types";

export function useContract<T extends ContractName>(
  contractName: T,
): ContractInstance | null {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const signer = useEthersSigner();

  return useMemo(() => {
    if (!isConnected || !signer || !chainId) return null;

    try {
      const address = getContractAddress(chainId, contractName);

      switch (contractName) {
        case "HackathonToken":
          return HackathonToken__factory.connect(
            address,
            signer,
          ) as ContractInstance;
        default:
          throw new Error(`Unknown contract name: ${contractName}`);
      }
    } catch (error) {
      console.error("Error connecting to contract:", error);
      return null;
    }
  }, [isConnected, signer, chainId, contractName]);
}
