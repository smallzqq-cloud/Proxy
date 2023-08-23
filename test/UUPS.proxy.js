// test/Box.proxy.js
// Load dependencies
const { expect } = require('chai');
const { ethers, upgrades } = require("hardhat");

let UUPS;
let uups;
 
// Start test block
describe('UUPS (proxy)', function () {
  beforeEach(async function () {
    UUPS = await ethers.getContractFactory("UUPS");
    uups = await upgrades.deployProxy(UUPS, {initializer:"initialize", kind: "uups"});
  });
 
  // Test case
  it('test initialize', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await uups.retrieve()).toString()).to.equal('52011314');
  });
});