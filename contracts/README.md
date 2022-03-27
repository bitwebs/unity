# Unity Ethereum Contracts

## Setup Env
```
$ cp ./.env_example ./.env
```

## How to deploy
```
$ npm install truffle -g
$ npm install

# Deploy contracts
$ truffle migrate --network ropsten
```

## How to interact
```
$ truffle console --network ropsten

# In truffle console
>> const wBiq = await WrappedBiq.deployed();
>> wBiq.mint('0xabed2612bdd59218e72edda5cc69ddc429937407', '10000000000000000000000')
>> wBiq.balanceOf('0xabed2612bdd59218e72edda5cc69ddc429937407')
>> wBiq.burn('1000000000000000000', '0x59ea5499dec9e792469b36777ade3d267b5127de')

```