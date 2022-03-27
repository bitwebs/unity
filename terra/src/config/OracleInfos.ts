const oracleInfos: {
  [asset: string]: {
    ticker: string;
    type:
      | 'forex' // http://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=KRW,SDR,MNT,USD // base is EUR
      | 'stock' // https://api.polygon.io/v2/aggs/ticker/AAPL/prev?unadjusted=true&apiKey=${API_KEY}
      | 'crypto'; // https://api.coingecko.com/api/v3/coins/mirror-protocol?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false
  };
} = {
  BIQ: {
    ticker: 'iq-biq',
    type: 'crypto',
  },
  BUSD: {
    ticker: 'BUSD',
    type: 'forex',
  },
  BKRW: {
    ticker: 'BKRW',
    type: 'forex',
  },
  BSDR: {
    ticker: 'BSDR',
    type: 'forex',
  },
  BMNT: {
    ticker: 'BMNT',
    type: 'forex',
  },
  DUAL: {
    ticker: 'duality-protocol',
    type: 'crypto',
  },
  dAAPL: {
    ticker: 'AAPL',
    type: 'stock',
  },
  dGOOGL: {
    ticker: 'GOOGL',
    type: 'stock',
  },
  dTSLA: {
    ticker: 'TSLA',
    type: 'stock',
  },
  dNFLX: {
    ticker: 'NFLX',
    type: 'stock',
  },
  dQQQ: {
    ticker: 'QQQ',
    type: 'stock',
  },
  dTWTR: {
    ticker: 'TWTR',
    type: 'stock',
  },
  dMSFT: {
    ticker: 'MSFT',
    type: 'stock',
  },
  dAMZN: {
    ticker: 'AMZN',
    type: 'stock',
  },
  dBABA: {
    ticker: 'BABA',
    type: 'stock',
  },
  dIAU: {
    ticker: 'IAU',
    type: 'stock',
  },
  dSLV: {
    ticker: 'SLV',
    type: 'stock',
  },
  dUSO: {
    ticker: 'USO',
    type: 'stock',
  },
  dVIXY: {
    ticker: 'VIXY',
    type: 'stock',
  },
  gBUSD: {
    ticker: 'gravity-busd',
    type: 'crypto',
  },
  dFB: {
    ticker: 'FB',
    type: 'stock',
  },
  GEEZ: {
    ticker: 'gravity-protocol',
    type: 'crypto',
  },
  vETH: {
    ticker: 'ethereum',
    type: 'crypto',
  },
  iETH: {
    ticker: 'ethereum',
    type: 'crypto',
  },
};

export default oracleInfos;
