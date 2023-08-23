# ILO项目合约测试

## 1.organiseEvent 开始筹集

```solidity
function organiseEvent(OrganiseEventParams memory organiseEventParams) external onlyOwner {
//开始筹集事项，并且把筹集完成的奖励转给当前合约
// event OrganiseEvent 记录筹集事件
```

## 2.getFundraisingInfo 获取筹集事件信息

```solidity
function getFundraisingInfo(uint256 _roundId) external view returns(
//根据 roundid 获取对应的筹集活动的信息
```



## 3.getAmountsInfo 获取要筹集的代币的信息

```solidity
 function getAmountsInfo(uint256 _roundId) public view returns(address token0, address token1, uint256 targetAmount0, uint256 targetAmount1, uint256 amount0, uint256 amount1)
```

## 4.getMarketMakingInfo 获取做市的一些信息

```solidity
function getMarketMakingInfo(uint256 _roundId) external view returns(
```

## 5.getUserInfo 通过用户地址以及roundID来获取在指定筹集活动中用户的相关信息

```solidity
  function getUserInfo(address user, uint256 _roundId) public view returns(
        address token0,
        address token1,
        uint256 amount0,
        uint256 amount1,
        uint256 withdrawAmount0,
        uint256 withdrawAmount1,
        uint256[] memory idsAtToken0,
        uint256[] memory idsAtToken1
    ) {
```

## 6.raiseFundsToken 筹集20代币

```solidity
    function raiseFundsToken(uint256 _roundId, address token, uint256 amount) external payable checkTime(_roundId) {
```

## 7.raiseFundsNFT 筹集NFT，然后NFT可以换成ptoken存入

```solidity
 function raiseFundsNFT(uint256 _roundId, address ptoken, uint256[] memory ids) external payable checkTime(_roundId) {
```

## 8.redeemNft 取回NFT

```solidity
function redeemNft(uint256 _roundId, address token, uint256[] memory ids) private {
```

## 9.refundAsset  如果到时间没有筹齐，则把指定资产转移回筹资者

```solidity
o function refundAsset(uint256 _roundId) external {
        FundraisingInfo storage raisingInfo = fundraisingInfoMap[_roundId];

        require(block.timestamp > raisingInfo.endTime, "not ended");
        UserInfo storage userInfo = userInfoMap[msg.sender][_roundId];
        require(userInfo.depositAmount[raisingInfo.token0] > 0 || userInfo.depositAmount[raisingInfo.token1] > 0, "not deposit");

        address token0 = raisingInfo.token0;
        address token1 = raisingInfo.token1;

        bool success = reachTargetAmount(_roundId);
        require(!success, "raising funds success");

        uint256 amount0 = userInfo.depositAmount[token0];
        uint256 amount1 = userInfo.depositAmount[token1];
        userInfo.depositAmount[token0] = 0;
        userInfo.depositAmount[token1] = 0;
        userInfo.withdrawAmount[token0] = userInfo.withdrawAmount[token0].add(amount0);
        userInfo.withdrawAmount[token1] = userInfo.withdrawAmount[token1].add(amount1);

        emit RefundAsset(_roundId, msg.sender, token0, token1, amount0, amount1);
    }
```

## 10. topUp 因为存钱不一定需要1000个ptoken,但是取NFT的时候需要1000个ptoken对应nft,才能取出NFT

```solidity
  /**
     * @notice 活动结束后充值token
     * @param _roundId 活动ID
     * @param token 充值的token地址
     * @param amount 充值数量
     */
    function topUp(uint256 _roundId, address token, uint256 amount) external payable {
```

## 11.topUpAgent 活动代理  根据指定的换取数量，往里面存代币

```solidity
	 function topUpAgent(uint256 _roundId, bytes memory path, uint256 amountOut, uint256 amountInMaximum) external payable returns 
```

## 12.withdrawAsset 取回自己的钱，去除流动性，调用另外一个合约

```solidity
 function withdrawAsset(uint256 _roundId) external {
```

## 13.getInvestmentProportion 获取用户资产的投资占比

```solidity
 function getInvestmentProportion(uint256 _roundId, address user) public view returns(uint256) {
```

## 14.