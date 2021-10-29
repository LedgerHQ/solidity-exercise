import { ethers } from "hardhat";
import { expect } from "chai";

describe("Game contract", function () {
  it("default test", async function () {
    // const [owner] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("Game");
    const contract = await factory.deploy();

    const greeting = await contract.greeting();

    expect(greeting).to.equal("Hello you");
  });
});
