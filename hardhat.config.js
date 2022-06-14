require("@nomiclabs/hardhat-waffle");

const metamask_private_key = "0x372e2d9906c37a41896da495ce2711b2dae207c489c766ffd7135cf39a5d5bfb"


module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/97f53876cccc42dbb5303c6b3707a173",
      accounts: [metamask_private_key],
    }
  }
};

