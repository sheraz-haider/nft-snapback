const hre = require("hardhat");
const fs = require('fs');

async function main() {
  // const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  // const nftMarket = await NFTMarket.deploy();
  // await nftMarket.deployed();
  // console.log("nftMarket deployed to:", nftMarket.address);

  const NFT = await hre.ethers.getContractFactory("Snapback");
  const tokenPrice = hre.ethers.utils.parseUnits('0.08', 'ether')

  const nft = await NFT.deploy(tokenPrice);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

  let config = `
  export const nftaddress = "${nft.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });