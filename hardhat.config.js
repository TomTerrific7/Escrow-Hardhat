require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.7.5",
  paths: {
    artifacts: "./app/artifacts",
},
networks: {
  hardhat: {   
  },
  rinkeby: {
    url:"https://eth-rinkeby.alchemyapi.io/v2/vwkvf8jDo0oGKz7UD539gUMcukPSrmDr",
    accounts: [process.env.PRIVATE_KEY, process.env.ARBITER_KEY, process.env.BENEFICIARY_KEY],
    
  }


}
};
