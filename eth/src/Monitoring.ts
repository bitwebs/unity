import Web3 from 'web3';
import { Log } from 'web3-core';
import { hexToBytes } from 'web3-utils';
import { bech32 } from 'bech32';
import BigNumber from 'bignumber.js';
import BlueBird from 'bluebird';

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_DOWN });

import EthContractInfos from './config/EthContractInfos';
import IqAssetInfos from './config/IqAssetInfos';

const FEE_RATE = process.env.FEE_RATE as string;

const ETH_URL = process.env.ETH_URL as string;
const ETH_BLOCK_LOAD_UNIT = parseInt(process.env.ETH_BLOCK_LOAD_UNIT as string);
const ETH_BLOCK_CONFIRMATION = parseInt(
  process.env.ETH_BLOCK_CONFIRMATION as string
);

const ETH_CHAIN_ID = process.env.ETH_CHAIN_ID as string;
const IQ_CHAIN_ID = process.env.IQ_CHAIN_ID as string;

const MAX_RETRY = 5;
export class Monitoring {
  Web3: Web3;

  AddressAssetMap: { [address: string]: string };
  IqAssetInfos: {
    [asset: string]: IqAssetInfo;
  };

  constructor() {
    // Register eth chain infos
    this.Web3 = new Web3(ETH_URL);

    const ethContractInfos = EthContractInfos[ETH_CHAIN_ID];
    const iqAssetInfos = IqAssetInfos[IQ_CHAIN_ID];

    this.AddressAssetMap = {};
    this.IqAssetInfos = {};
    for (const [asset, value] of Object.entries(ethContractInfos)) {
      if (asset === 'minter') {
        continue;
      }

      const info = iqAssetInfos[asset];
      if (info === undefined) {
        continue;
      }

      if (
        (info.denom === undefined && info.contract_address === undefined) ||
        (info.denom !== undefined && info.contract_address !== undefined)
      ) {
        throw new Error('Must provide one of denom and contract_address');
      }

      if (info.denom !== undefined && info.is_eth_asset) {
        throw new Error('Native asset is not eth asset');
      }

      this.AddressAssetMap[value.contract_address] = asset;
      this.IqAssetInfos[asset] = info;
    }
  }

  async load(
    lastHeight: number,
    missingTxHashes: string[]
  ): Promise<[number, MonitoringData[]]> {
    const latestHeight =
      (await getBlockNumber(this.Web3, MAX_RETRY)) - ETH_BLOCK_CONFIRMATION;

    // skip no new blocks generated
    if (lastHeight >= latestHeight) {
      return [lastHeight, []];
    }

    // If initial state, we start sync from latest height
    const fromBlock = lastHeight === 0 ? latestHeight : lastHeight + 1;
    const toBlock = Math.min(fromBlock + ETH_BLOCK_LOAD_UNIT, latestHeight);

    console.info(`Loading From: ${fromBlock}, To: ${toBlock}`);
    const monitoringDatas = await this.getMonitoringDatas(
      fromBlock,
      toBlock,
      missingTxHashes
    );

    return [toBlock, monitoringDatas];
  }

  async getMonitoringDatas(
    fromBlock: number,
    toBlock: number,
    missingTxHashes: string[]
  ): Promise<MonitoringData[]> {
    const logs = await getPastLogs(
      this.Web3,
      fromBlock,
      toBlock,
      Object.keys(this.AddressAssetMap),
      MAX_RETRY
    );

    // append missing tx logs
    const missingLogs = await this.getTransactionLogs(missingTxHashes);
    missingLogs.filter((log: Log) => {
      return log.blockNumber < fromBlock;
    });
    logs.push(...missingLogs);

    const txHashMap: { [key: string]: boolean } = {};
    const monitoringDatas: MonitoringData[] = logs
      .filter((log: any) => {
        return !log['removed'];
      })
      .map((log: Log) => {
        if (txHashMap[log.transactionHash]) {
          log.transactionHash += `-${log.logIndex}`;
        } else {
          txHashMap[log.transactionHash] = true;
        }

        const decodedData = decodeLog(this.Web3, log);

        const requested = new BigNumber(decodedData['amount']);
        const fee = requested.multipliedBy(FEE_RATE);
        const amount = requested.minus(fee);

        const asset = this.AddressAssetMap[log.address];
        const info = this.IqAssetInfos[asset];
        return {
          blockNumber: log.blockNumber,
          txHash: log.transactionHash,
          sender: decodedData['_sender'],
          to: bech32.encode(
            'iq',
            bech32.toWords(hexToBytes(decodedData['_to'].slice(0, 42)))
          ),
          requested: requested.toFixed(0),
          amount: amount.toFixed(0),
          fee: fee.toFixed(0),
          asset,
          iqAssetInfo: info,
        };
      });

    return monitoringDatas;
  }

  async getTransactionLogs(transactionHashes: string[]): Promise<Log[]> {
    const logs: Log[] = [];
    for (const transactionHash of transactionHashes) {
      const txReceipt: any = await this.Web3.eth.getTransactionReceipt(
        transactionHash
      );

      if (txReceipt && txReceipt.status && txReceipt.logs) {
        for (const log of txReceipt.logs) {
          if (
            log.address in this.AddressAssetMap &&
            log.topics[0] ===
              '0xc3599666213715dfabdf658c56a97b9adfad2cd9689690c70c79b20bc61940c9'
          ) {
            logs.push(log);
            break;
          }
        }
      }
    }

    return logs;
  }
}

async function getPastLogs(
  web3: Web3,
  fromBlock: number,
  toBlock: number,
  address: string[],
  retry: number
): Promise<Log[]> {
  try {
    return await web3.eth.getPastLogs({
      fromBlock,
      toBlock,
      address,
      topics: [
        '0xc3599666213715dfabdf658c56a97b9adfad2cd9689690c70c79b20bc61940c9',
      ],
    });
  } catch (err) {
    console.error(err);
    if (
      retry > 0 &&
      (err.message.includes('query returned more than 10000 results') ||
        err.message.includes('invalid project id') ||
        err.message.includes('request failed or timed out') ||
        err.message.includes('unknown block') ||
        err.message.includes('502 Bad Gateway') ||
        err.message.includes('Invalid JSON RPC response') ||
        err.message.includes('exceed maximum block range: 5000') ||
        err.message.includes('system overloaded') ||
        err.message.includes('403 Forbidden'))
    ) {
      console.error('infura errors happened. retry getPastEvents');

      await BlueBird.delay(5000);

      return await getPastLogs(web3, fromBlock, toBlock, address, retry - 1);
    }

    throw err;
  }
}

async function getBlockNumber(web3: Web3, retry: number): Promise<number> {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    return blockNumber;
  } catch (err) {
    if (
      retry > 0 &&
      (err.message.includes('invalid project id') ||
        err.message.includes('request failed or timed out') ||
        err.message.includes('502 Bad Gateway') ||
        err.message.includes('Invalid JSON RPC response'))
    ) {
      console.error('infura errors happened. retry getBlockNumber');

      await BlueBird.delay(500);

      const blockNumber = await getBlockNumber(web3, retry - 1);
      return blockNumber;
    }

    throw err;
  }
}

function decodeLog(web3: Web3, log: Log): { [key: string]: string } {
  return web3.eth.abi.decodeLog(
    [
      {
        indexed: true,
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: '_to',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    log.data,
    log.topics.slice(1)
  );
}

export type IqAssetInfo = {
  is_eth_asset?: boolean;
  contract_address?: string;
  denom?: string;
};

export type MonitoringData = {
  blockNumber: number;
  txHash: string;
  sender: string;
  to: string;
  requested: string;
  amount: string;
  fee: string;
  asset: string;

  // iq side data for relayer
  iqAssetInfo: IqAssetInfo;
};
