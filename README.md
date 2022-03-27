# Unity Bridge

Unity is a IQ-Ethereum bridge. Currently only allows IQ assets to be sent between IQ and Ethereum networks, and only supports the transfer of [whitelisted](#erc20-contracts) assets.

## Table of Contents

- [Unity Bridge](#unity-bridge)
  - [Table of Contents](#table-of-contents)
  - [Implementations](#implementations)
  - [Components](#components)
  - [Relaying Fee](#relaying-fee)
  - [How to add tokens?](#how-to-add-tokens)
    - [IQ token support](#iq-token-support)
    - [Ethereum token support](#ethereum-token-support)

## Implementations

- [Ethereum Contracts](./contracts)
- [Ethereum side Unity](./eth)
- [IQ side Unity](./iq)

## Components

- [Ethereum Asset](./ETH_ASSET.md)
- [IQ Asset](./IQ_ASSET.md)

## Relaying Fee
Unity charges a fee only for transferring assets from IQ to Ethereum/BSC, and the quantity is calculated as `max($1, 0.1% * amount)`. **A transaction with tiny amount smaller than $1 value will be ignored.**

## How to add tokens?

### IQ token support
1. [Ethereum] Deploy WrappedToken Contract and do verify the contract code 
2. [Ethereum] Transfer ownership to proper minter address (minter address can be found in [here](IQ_ASSET.md#erc20-contracts))

### Ethereum token support
DEPRECATED
