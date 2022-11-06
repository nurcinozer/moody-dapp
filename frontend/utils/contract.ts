import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./constants";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  console.log(contract);
  return contract;
}
