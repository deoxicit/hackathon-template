import { useEffect, useState } from "react";
import { useContract } from "../hooks/useContract";
import { useAccount } from "wagmi";
import { ethers } from "ethers";

export function TokenBalance() {
  const { address } = useAccount();
  const contract = useContract("HackathonToken");
  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    async function fetchBalance() {
      if (!contract || !address) return;
      try {
        const balance = await contract.balanceOf(address);
        setBalance(ethers.formatUnits(balance, 18));
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }

    fetchBalance();
  }, [contract, address]);

  if (!address) {
    return <div>Please connect your wallet</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Your Token Balance</h2>
      <p className="text-2xl font-bold">{balance} HTK</p>
    </div>
  );
}
