const STARGATE = require("../constants/stargate.json")
const { ethers } = require("hardhat");

async function main () {
    const { deployer } = await ethers.getSigners();
    const stargateRouter = STARGATE.composer[hre.network.name]
    console.log(`[${hre.network.name}] Stargate Router address: ${stargateRouter}`)
    const ammRouter = STARGATE.amm[hre.network.name]
    console.log(`[${hre.network.name}] AMM Router address: ${ammRouter}`)

    await ethers.deployContract("StargateComposed",[stargateRouter, ammRouter], {
        from: deployer,
        log: true,
        waitConfirmations: 1,
    })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });