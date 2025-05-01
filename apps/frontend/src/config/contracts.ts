import { HackathonToken } from "../../../packages/contracts/typechain-types";

export const CONTRACT_ADDRESSES = {
  localhost: {
    HackathonToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3" as const,
  },
} as const;

export type ContractName = keyof typeof CONTRACT_ADDRESSES.localhost;
export type ContractInstance = HackathonToken;

export const getContractAddress = (
  chainId: number,
  contractName: ContractName,
) => {
  if (chainId === 31337) {
    return CONTRACT_ADDRESSES.localhost[contractName];
  }
  throw new Error(
    `No contract address found for chainId ${chainId} and contract ${contractName}`,
  );
};
