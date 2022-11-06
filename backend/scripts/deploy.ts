const hre = require("hardhat");

async function main() {
  const Moody = await hre.ethers.getContractFactory("Moody");
  const moody = await Moody.deploy();

  await moody.deployed();

  console.log("Moody deployed to:", moody.address);

  // Moody deployed to: 0x71d9453f70b5784908A0d41ABDA5CBD8DeE45957
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
