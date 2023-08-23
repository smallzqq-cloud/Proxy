const {ethers} = require("hardhat")
const BigNumber = require('bignumber.js');

async function main() {
    const feeData = await ethers.provider.getFeeData();
    const costLimit = {
        gasLimit: 6000000,
        maxFeePerGas: feeData.maxFeePerGas,
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    };
    const feedAddress = "0xb61c91b3e5Cd5c76Eb02EA4C1f1320BE22461Ed5"
    const feed = await ethers.getContractAt("DataConsumerV3", feedAddress);
    const res = await feed.getLatestData();
    const bigNumberReward = new BigNumber(res.toString());
    console.log("res===", bigNumberReward.toString(10));
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});