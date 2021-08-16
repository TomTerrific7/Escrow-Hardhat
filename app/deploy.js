// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  
  const Escrow = await hre.ethers.getContractFactory("Escrow");
 
  const deposit = ethers.utils.parseEther("1");
  const [arbiter, beneficiary, depositor] = await hre.ethers.provider.listAccounts()
  const escrow = await Escrow.deploy(arbiter, beneficiary, {
    value: deposit
  });

  

  await escrow.deployed();

  console.log("Escrow deployed to:", escrow.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
