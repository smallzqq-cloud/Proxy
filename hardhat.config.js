require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      forking: {
       url: `https://goerli.infura.io/v3/6dd6664a59ab4faea5ac270b3403ea98`
      }
    },
    goerli: {
      url: `${process.env.GOERLI_NETWORK}`,
      chainId: 5,
      gasPrice: 'auto',
      accounts: [`${process.env.PRIVATEKEY}`],
    },
    sepolia: {
      url: `${process.env.SEPOLIA_NETWORK}`,
      chainId: 11155111,
      gasPrice: 'auto',
      timeout:400000,
      accounts: [`${process.env.PRIVATEKEY}`],
    }
  },
  solidity: {
    version:"0.8.18",
   settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }  
  },
   paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
