require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.7.5",
  networks:{
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: ["097236ec290f87630037aadb5ba749818bdedd974c787ea22c445f8aca9501f7","dbf09714f61ee20cc3e80afadea725a35dda7ec6cd3987b3ab9ab72dff254c3b"]
    },
  }
};
