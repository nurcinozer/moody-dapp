import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { env } from "process";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: env.PRIVATE_KEY ? [env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: env.POLYGONSCAN_KEY,
  },
};

export default config;
