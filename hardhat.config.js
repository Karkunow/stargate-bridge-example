require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const ACCOUNT_KEY = process.env.ACCOUNT_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ACCOUNT_KEY]
    },
    'arbitrum-sepolia': {
      url: `https://arbitrum-sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ACCOUNT_KEY]
    },
    'bnb-testnet': {
      url: 'https://bsc-testnet.drpc.org/',
      accounts: [ACCOUNT_KEY],
      gasPrice: 10000000000,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY
  }
};
