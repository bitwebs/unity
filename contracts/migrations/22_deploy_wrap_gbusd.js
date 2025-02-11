const WrappedgBUSD = artifacts.require("WrappedgBUSD");

const CHAIN_ID = {
  mainnet: 1,
  ropsten: 3,
  kovan: 42,
  bsc: 56,
  bsc_testnet: 97,
  hmy: 1666600000,
  hmy_testnet: 1666700000,
};

module.exports = function (deployer, network) {
  if (network == "mainnet" || network == "ropsten" || network == "hmy" || network == "hmy_testnet") {
    deployer.deploy(WrappedgBUSD, {
      gas: 5000000,
      overwrite: false,
      chainId: CHAIN_ID[network],
    });
  }
};
