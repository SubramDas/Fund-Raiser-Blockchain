/** @type import('hardhat/config').HardhatUserConfig */
// import('hardhat/config').HardhatUserConfig

require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path:'./.env.local'});

task("accounts", "Prints the list of accounts",async(taskArgs, hre)=>{
  const accounts=await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

const privateKey=process.env.NEXT_PUBLIC_PRIVATE_KEY


module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"polygon",
  networks:{
    hardhat:{},
    polygon:{
      //  url: 'https://polygon-mumbai.g.alchemy.com/v2/SrjOFZWYduq7bZVsp6o4L8PnyA6Ke9V5',
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [
        // `0x${"f13ad8ae8de9ff379a8c2ead923e4985859dfb9a67d1dc405adbe326be7eebce"}`,
        privateKey

      ],
      }
  }
};
