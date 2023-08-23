const {ethers} = require("hardhat")

async function main() {
    // const apiFactory = await ethers.getContractFactory("APIConsumer");
    // const api = await apiFactory.deploy();
    const api = await ethers.getContractAt("APIConsumer", "0xC1effcE9fC823E17d6adF7031B53c132568920a0");
    // const res = await api.requestVolumeData();
    // console.log("res", res);
    const volume = await api.volume();
    console.log("volume", volume);
}

main().then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
})