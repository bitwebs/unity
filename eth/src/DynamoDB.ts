import {
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput,
  GetItemCommand,
  GetItemCommandInput,
  ResourceNotFoundException,
  BatchGetItemCommand,
  BatchGetItemCommandInput,
  BatchWriteItemCommand,
  BatchWriteItemCommandInput,
  AttributeValue,
  KeysAndAttributes,
  WriteRequest,
} from '@aws-sdk/client-dynamodb';

const ETH_CHAIN_ID = process.env.ETH_CHAIN_ID as string;

const DYNAMO_UNITY_ID = `ETH_UNITY_${ETH_CHAIN_ID.toUpperCase().replace(
  '-',
  '_'
)}`;
const DYNAMO_ACCESS_KEY_ID = process.env.DYNAMO_ACCESS_KEY_ID as string;
const DYNAMO_SECRET_ACCESS_KEY = process.env.DYNAMO_SECRET_ACCESS_KEY as string;
const DYNAMO_REGION = process.env.DYNAMO_REGION as string;
const DYNAMO_TRANSACTION_TABLE_NAME = `UnityTx`;
const DYNAMO_MAX_LOAD_UNIT = 100;
const DYNAMO_MAX_STORE_UNIT = 25;

export interface TransactionData {
  fromTxHash: string;
  toTxHash: string;
  asset: string;
  sender: string;
  recipient: string;
  amount: string;
}

export class DynamoDB {
  client: DynamoDBClient;

  constructor() {
    this.client = new DynamoDBClient({
      region: DYNAMO_REGION,
      credentials: {
        accessKeyId: DYNAMO_ACCESS_KEY_ID,
        secretAccessKey: DYNAMO_SECRET_ACCESS_KEY,
      },
    });
  }

  async hasTransaction(fromTxHash: string): Promise<boolean> {
    const params: GetItemCommandInput = {
      TableName: DYNAMO_TRANSACTION_TABLE_NAME,
      Key: {
        UnityID: { S: DYNAMO_UNITY_ID },
        FromTxHash: { S: fromTxHash },
      },
      ProjectionExpression: 'FromTxHash',
    };

    return await this.client
      .send(new GetItemCommand(params))
      .then((res) => res.Item !== undefined)
      .catch((err) => {
        if (err === ResourceNotFoundException) {
          return false;
        }

        throw err;
      });
  }

  async hasTransactions(
    fromTxHashes: string[]
  ): Promise<{ [key: string]: boolean }> {
    if (fromTxHashes.length == 0) return {};

    const outOfBoundTxHashes = fromTxHashes.splice(DYNAMO_MAX_LOAD_UNIT);

    let requestItems: { [key: string]: KeysAndAttributes } = {
      [DYNAMO_TRANSACTION_TABLE_NAME]: {
        Keys: fromTxHashes.map((fromTxHash) => {
          return {
            UnityID: { S: DYNAMO_UNITY_ID },
            FromTxHash: { S: fromTxHash },
          };
        }),
        ProjectionExpression: 'FromTxHash',
      },
    };

    const foundTxs: {
      [key: string]: AttributeValue;
    }[] = [];

    while (Object.keys(requestItems).length > 0) {
      const params: BatchGetItemCommandInput = {
        RequestItems: requestItems,
      };

      const res = await this.client.send(new BatchGetItemCommand(params));
      if (res.Responses && res.Responses[DYNAMO_TRANSACTION_TABLE_NAME]) {
        foundTxs.push(...res.Responses[DYNAMO_TRANSACTION_TABLE_NAME]);
      }

      requestItems = res.UnprocessedKeys ? res.UnprocessedKeys : {};
    }

    const outOfBoundFoundTxMap = await this.hasTransactions(outOfBoundTxHashes);

    return Object.assign(
      Object.fromEntries(
        foundTxs.map((v) => [v['FromTxHash'].S as string, true])
      ),
      outOfBoundFoundTxMap
    );
  }

  async storeTransactions(datas: TransactionData[]) {
    if (datas.length == 0) return;

    const outOfBoundDatas = datas.splice(DYNAMO_MAX_STORE_UNIT);

    let requestItems: { [key: string]: WriteRequest[] } = {
      [DYNAMO_TRANSACTION_TABLE_NAME]: datas.map((data) => {
        return {
          PutRequest: {
            Item: {
              Amount: { S: data.amount },
              Asset: { S: data.asset },
              FromTxHash: { S: data.fromTxHash },
              ToTxHash: { S: data.toTxHash },
              Sender: { S: data.sender },
              Recipient: { S: data.recipient },
              UnityID: { S: DYNAMO_UNITY_ID },
              CreatedAt: { S: new Date().toISOString() },
            },
          },
        };
      }),
    };

    while (Object.keys(requestItems).length > 0) {
      const params: BatchWriteItemCommandInput = {
        RequestItems: requestItems,
      };

      const res = await this.client.send(new BatchWriteItemCommand(params));
      requestItems = res.UnprocessedItems ? res.UnprocessedItems : {};
    }

    await this.storeTransactions(outOfBoundDatas);
  }

  async storeTransaction(data: TransactionData) {
    const params: PutItemCommandInput = {
      TableName: DYNAMO_TRANSACTION_TABLE_NAME,
      Item: {
        FromTxHash: { S: data.fromTxHash },
        ToTxHash: { S: data.toTxHash },
        Asset: { S: data.asset },
        Sender: { S: data.sender },
        Recipient: { S: data.recipient },
        Amount: { S: data.amount },
        UnityID: { S: DYNAMO_UNITY_ID },
        CreatedAt: { S: new Date().toISOString() },
      },
    };

    await this.client.send(new PutItemCommand(params)).catch((err) => {
      console.error(
        `Failed to store the transaction (${data}) to DynamoDB`,
        err
      );
      throw err;
    });
  }
}
