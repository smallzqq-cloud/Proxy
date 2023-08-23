const {ethers} = require("hardhat")

async function main() {
    const subscribeId = 4110;
    // const vrfdFactory = await ethers.getContractFactory("VRFD20");
    // const vrfd = await vrfdFactory.deploy(subscribeId);
    const vrfd = await ethers.getContractAt("VRFD20", "0x7E6B491A73FdD7A482d3C848273c542326bc4791");
    const roller = "0xe42241114e2B344074e6aa7CF8D9684C9C6e41dE";
   // const res = await vrfd.rollDice(roller);
    //console.log("res", res);
    const house = await vrfd.house(roller);
    console.log("home", house);
}

main().then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
})