const hre = require("hardhat");

async function main() {
  const Moody = await hre.ethers.getContractFactory("Moody");
  const moody = await Moody.deploy();

  await moody.deployed();

  console.log("Moody deployed to:", moody.address);

  // Moody deployed to: 0xc3BE15770bD0682CC21578C976e9a72024FC53f4
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
