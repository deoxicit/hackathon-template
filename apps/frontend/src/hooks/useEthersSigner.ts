import { useMemo } from "react";
import { useWalletClient } from "wagmi";
import { ethers } from "ethers";

export function useEthersSigner() {
  const { data: walletClient } = useWalletClient();

  return useMemo(() => {
    if (!walletClient) return null;
    return new ethers.BrowserProvider(walletClient.transport).getSigner();
  }, [walletClient]);
}
