require('dotenv').config();

import Unity from './Unity';

const unity = new Unity();

console.info(`
Start UnityIq

IQ_CHAIN_ID: ${process.env.IQ_CHAIN_ID}
ETH_CHAIN_ID: ${process.env.ETH_CHAIN_ID}
ETH_NETWORK_NUMBER: ${process.env.ETH_NETWORK_NUMBER}

IQ_TRACKING_ADDR: ${process.env.IQ_TRACKING_ADDR}

FEE_RATE: ${process.env.FEE_RATE}
FEE_MIN_AMOUNT: ${process.env.FEE_MIN_AMOUNT}
FEE_QUOTE_TICKER: ${process.env.FEE_QUOTE_TICKER}
-----------------------------------------------------------
`);

unity.startMonitoring().catch((err) => {
  console.error(`Exit with ${err}`);
});
