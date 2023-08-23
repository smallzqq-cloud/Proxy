# hardhat-gas-repoter的使用



## 1.安装

```
npm install hardhat-gas-reporter --save-dev
```

## 2.配置

```
在hardhat_config.js里配置
require("hardhat-gas-reporter");



gasReporter: {
    token:'ETH',
    currency: 'USD',
    coinmarketcap: `${process.env.COINMARKETCAP_APIKEY}`,
    gasPriceApi: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
    outputFile: "gas-report.txt",
    noColors: true,
    enabled:true,
    showTimeSpent:true,
  },
```

## 3.运行

```js
在测试的时候会自动运行
npx hardhat test xxxx/xxxx.js
```

