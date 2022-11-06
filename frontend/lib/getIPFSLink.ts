import { IPFS_GATEWAY } from "../utils/constants";

const getIPFSLink = (hash: string): string => {
  const gateway = IPFS_GATEWAY;

  return `${gateway}${hash}`;
};

export default getIPFSLink;
