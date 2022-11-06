const hre = require("hardhat");

async function main() {
  const Moody = await hre.ethers.getContractFactory("Moody");
  const moody = await Moody.deploy();

  await moody.deployed();

  console.log("Moody deployed to:", moody.address);

  // Moody deployed to: 0xCb1c10417Bfd806CfDb6D7575dCba5Def5fE26db
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
