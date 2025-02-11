import {
  LCDClient,
  MsgExecuteContract,
  MsgSend,
  Msg,
  Wallet,
  MnemonicKey,
  AccAddress,
  isTxError,
  Coin,
  Tx,
  TxInfo,
} from '@web4/iq.js';
import { MonitoringData } from 'Monitoring';
import axios from 'axios';
import * as http from 'http';
import * as https from 'https';

const ax = axios.create({
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  timeout: 15000,
});

const IQ_MNEMONIC = process.env.IQ_MNEMONIC as string;
const IQ_CHAIN_ID = process.env.IQ_CHAIN_ID as string;
const IQ_URL = process.env.IQ_URL as string;
const IQ_GAS_PRICE = process.env.IQ_GAS_PRICE as string;
const IQ_GAS_PRICE_END_POINT = process.env
  .IQ_GAS_PRICE_END_POINT as string;
const IQ_GAS_PRICE_DENOM = process.env.IQ_GAS_PRICE_DENOM as string;
const IQ_GAS_ADJUSTMENT = process.env.IQ_GAS_ADJUSTMENT as string;
const IQ_DONATION = process.env.IQ_DONATION as string;

export interface RelayDataRaw {
  tx: string;
  txHash: string;
  createdAt: number;
}

export interface RelayData {
  tx: Tx;
  txHash: string;
  createdAt: number;
}

export class Relayer {
  Wallet: Wallet;
  LCDClient: LCDClient;

  constructor() {
    // Register iq chain infos
    this.LCDClient = new LCDClient({
      URL: IQ_URL,
      chainID: IQ_CHAIN_ID,
      gasPrices: IQ_GAS_PRICE,
      gasAdjustment: IQ_GAS_ADJUSTMENT,
    });

    this.Wallet = new Wallet(
      this.LCDClient,
      new MnemonicKey({ mnemonic: IQ_MNEMONIC })
    );
  }

  loadSequence(): Promise<number> {
    return this.Wallet.sequence();
  }

  async build(
    monitoringDatas: MonitoringData[],
    sequence: number
  ): Promise<RelayData | null> {
    const msgs: Msg[] = monitoringDatas.reduce(
      (msgs: Msg[], data: MonitoringData) => {
        const fromAddr = this.Wallet.key.accAddress;

        // If the given `to` address not proper address,
        // relayer send the funds to donation address
        const toAddr = AccAddress.validate(data.to) ? data.to : IQ_DONATION;

        // 18 decimal to 6 decimal
        // it must bigger than 1,000,000,000,000
        if (data.amount.length < 13) {
          return msgs;
        }

        const amount = data.amount.slice(0, data.amount.length - 12);
        const info = data.iqAssetInfo;

        if (info.denom) {
          const denom = info.denom;

          msgs.push(new MsgSend(fromAddr, toAddr, [new Coin(denom, amount)]));
        } else if (info.contract_address && !info.is_eth_asset) {
          const contract_address = info.contract_address;

          msgs.push(
            new MsgExecuteContract(
              fromAddr,
              contract_address,
              {
                transfer: {
                  recipient: toAddr,
                  amount: amount,
                },
              },
              []
            )
          );
        } else if (info.contract_address && info.is_eth_asset) {
          const contract_address = info.contract_address;

          msgs.push(
            new MsgExecuteContract(
              fromAddr,
              contract_address,
              {
                mint: {
                  recipient: toAddr,
                  amount: amount,
                },
              },
              []
            )
          );
        }

        return msgs;
      },
      []
    );

    if (msgs.length === 0) {
      return null;
    }

    // if something wrong, pass undefined to use default gas 
    const gasPrices = await this.loadGasPrice(
      IQ_GAS_PRICE_END_POINT,
      IQ_GAS_PRICE_DENOM
    ).catch((_) => undefined);

    const tx = await this.Wallet.createAndSignTx({
      msgs,
      sequence,
      gasPrices,
    });

    const txHash = await this.LCDClient.tx.hash(tx);

    return {
      tx,
      txHash,
      createdAt: new Date().getTime(),
    };
  }

  async relay(tx: Tx): Promise<void> {
    const result = await this.LCDClient.tx.broadcastSync(tx);

    // error code 19 means tx already in the mempool
    if (isTxError(result) && result.code !== 19) {
      throw new Error(
        `Error while executing: ${result.code} - ${result.raw_log}`
      );
    }
  }

  async getTransaction(txHash: string): Promise<TxInfo | null> {
    return await this.LCDClient.tx.txInfo(txHash).catch(() => {
      return null; // ignore not found error
    });
  }

  async loadGasPrice(url: string, denom: string): Promise<string> {
    return (await ax.get(url)).data[denom] + denom;
  }
}
