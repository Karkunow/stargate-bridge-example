const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const STARGATE = require("../constants/stargate.json")

describe("StargateComposed contract", function () {
  async function deployFixture() {
    const StargateComposed = await ethers.getContractFactory("StargateComposed");
    const [owner, addr1, addr2] = await ethers.getSigners();

    const stargateRouter = STARGATE.composer[hre.network.name]
    console.log(`[${hre.network.name}] Stargate Router address: ${stargateRouter}`)
    const ammRouter = STARGATE.amm[hre.network.name]
    console.log(`[${hre.network.name}] AMM Router address: ${ammRouter}`)

    const stargateComposed = await StargateComposed.deploy(stargateRouter, ammRouter);
    await stargateComposed.deployed();

    return { StargateComposed, stargateComposed, owner, addr1, addr2 };
  }

   describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { stargateComposed, owner } = await loadFixture(deployTokenFixture);
      expect(await stargateComposed.owner()).to.equal(owner.address);
    });
  });

});