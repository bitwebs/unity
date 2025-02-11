# IQ Asset Bridge

CW20 or IQ native tokens can be relayed to Ethereum/BSC networks.

## Table of Contents

- [IQ Asset Bridge](#iq-asset-bridge)
  - [Table of Contents](#table-of-contents)
  - [ERC20 Contracts](#erc20-contracts)
  - [BEP20 Contracts on BSC (Binance Smart Chain)](#bep20-contracts-on-bsc-binance-smart-chain)
  - [HRC20 Contracts on Harmony](#hrc20-contracts-on-harmony)
  - [IQ Denoms and Contracts](#iq-denoms-and-contracts)
  - [Usage Instructions](#usage-instructions)
    - [IQ => Ethereum / BSC / HMY](#iq--ethereum--bsc--hmy)
      - [Native Assets](#native-assets)
      - [CW20 Tokens](#cw20-tokens)
    - [Ethereum / BSC / HMY => IQ](#ethereum--bsc--hmy--iq)

## ERC20 Contracts

| asset  | mainnet                                    | ropsten                                                 |
| ------ | ------------------------------------------ | ------------------------------------------------------- |
| Minter | 0x9123077acafb3d743c68418304b2a11566cc1175 | 0x5dFeBAFdd0079Cd6D32415bd2507B842812B8a0F              |
| BIQ   | 0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9 | 0xbf51453468771D14cEbdF8856cC5D5145364Cd6F              |
| BUSD    | 0xa47c8bf37f92aBed4A126BDA807A7b7498661acD | 0x6cA13a4ab78dd7D657226b155873A04DB929A3A4              |
| gBUSD   | 0xa8De3e3c934e2A1BB08B010104CcaBBD4D6293ab | 0x006479f75D6622AE6a21BE17C7F555B94c672342              |
| BKRW    | 0xcAAfF72A8CbBfc5Cf343BA4e26f65a257065bFF1 | 0xF0b0fB87017b644eC76644Ea0FA704BFA5f20F0E (deprecated) |
| BSDR    | 0x676Ad1b33ae6423c6618C1AEcf53BAa29cf39EE5 | 0x1d805d8660Ae73E3624AECAa34ca5FcF8E26E0a5 (deprecated) |
| BMNT    | 0x156B36ec68FdBF84a925230BA96cb1Ca4c4bdE45 | 0x51e7f3ED326719a1469EbD7E68B8AB963d64eBA6 (deprecated) |
| DUAL    | 0x09a3EcAFa817268f77BE1283176B946C4ff2E608 | 0xDAdC10D2dAC9E111835d4423670573Ae45714e7C (deprecated) |
| dAAPL  | 0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84 | 0xDAE57D13b42325562963C1E47E615eE25924635C (deprecated) |
| dGOOGL | 0x59A921Db27Dd6d4d974745B7FfC5c33932653442 | 0x58E3ba48E036341EF8Bbe0bF49caA9731Cc5C42B (deprecated) |
| dTSLA  | 0x21cA39943E91d704678F5D00b6616650F066fD63 | 0x2a445f4dA6Ea8845c594446b250ad535373bb7e4 (deprecated) |
| dNFLX  | 0xC8d674114bac90148d11D3C1d33C61835a0F9DCD | 0x1EA12ca0Ac017EfFE87ddF4c648a1a5359E850FA (deprecated) |
| dQQQ   | 0x13B02c8dE71680e71F0820c996E4bE43c2F57d15 | 0xE1d4509C539D9C3f1E01CeE22e7a79BF77348Ef3 (deprecated) |
| dTWTR  | 0xEdb0414627E6f1e3F082DE65cD4F9C693D78CCA9 | 0x0c9149d38AD1eBE71c50Bd04E0Ba4F999884C961 (deprecated) |
| dMSFT  | 0x41BbEDd7286dAab5910a1f15d12CBda839852BD7 | 0x0736644C0257048861bAa72b6b234514c6b52655 (deprecated) |
| dAMZN  | 0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7 | 0x3210BC26eB5427D0FC19dE7AB272b3BB3e4bC4b0 (deprecated) |
| dBABA  | 0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72 | 0xF44c4C095E586B5a7Ba8AA0B2A8Dfad693d396b6 (deprecated) |
| dIAU   | 0x1d350417d9787E000cc1b95d70E9536DcD91F373 | 0x51eD1489e3D311496592056608dD6cf025C03525 (deprecated) |
| dSLV   | 0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676 | 0xECBe84E79bb26a7FF2474AA1b58d2696A9b5F58F (deprecated) |
| dUSO   | 0x31c63146a635EB7465e5853020b39713AC356991 | 0xDF00833C87bEfA3aF5634d81BE18E9DEf2F9C7c0 (deprecated) |
| dVIXY  | 0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86 | 0xC1629641Cdb2D636Ae220fb759264306902c4AC0 (deprecated) |
| dFB    | 0x0e99cC0535BB6251F6679Fa6E65d6d3b430e840B | 0x0Add4875eBcbD2306921e12133feB562E1cc82b4 (deprecated) |
| GEEZ    | 0x0F3ADC247E91c3c50bC08721355A41037E89Bc20 | 0x93e9012b0a9DA6d5EeA352c56e22B4Ad7225fC33 (deprecated) |
| dCOIN  | 0x1e25857931F75022a8814e0B0c3a371942A88437 | 0x807eD0f8149E66Cb74E340bbB298a28E9233181c (deprecated) |

## BEP20 Contracts on BSC (Binance Smart Chain)

| asset  | bsc                                        | bsc-testnet                                             |
| ------ | ------------------------------------------ | ------------------------------------------------------- |
| Minter | 0x65866fbdb58c13d4c81f47779c11b1bfa127641f | 0xB8C4943Ae02ab64Ea6d1f956136606F67bb0Cb56              |
| BIQ   | 0xECCF35F941Ab67FfcAA9A1265C2fF88865caA005 | 0xA1B4Aa780713df91e9Fa0FAa415ce49756D81E3b              |
| BUSD    | 0x23396cF899Ca06c4472205fC903bDB4de249D6fC | 0x66BDf3Bd407A63eAB5eAF5eCE69f2D7bb403EfC9              |
| BKRW    | 0xfFBDB9BDCae97a962535479BB96cC2778D65F4dd | 0x59a870b16adE2A152815Ba0d4Fa074fc3F71A828 (deprecated) |
| BSDR    | 0x7d5f9F8CF59986743f34BC137Fc197E2e22b7B05 | 0x5e2c2088d3fB10aAb25a0D323CdBEc5147232B1a (deprecated) |
| BMNT    | 0x41D74991509318517226755E508695c4D1CE43a6 | 0x1449D1Ba8FB922E74F7761F077e77EAe66A0f8DA (deprecated) |
| DUAL    | 0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9 | 0x320106A19C934ab8dbdde8056Ebae5A6f340720e (deprecated) |
| dAAPL  | 0x900AEb8c40b26A8f8DfAF283F884b03EE7Abb3Ec | 0x0dFa0F08136DA5d28618E7E31A7e24b01a95bB69 (deprecated) |
| dGOOGL | 0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f | 0x56a31ea21862447E3Af9bfe76A45679E44103274 (deprecated) |
| dTSLA  | 0xF215A127A196e3988C09d052e16BcFD365Cd7AA3 | 0xA2a42F0deB45ca7310a3C02A70fb569d5d5248FA (deprecated) |
| dNFLX  | 0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc | 0xc6F5e6476958cA81eC8FC68A1ea7c68206b0e501 (deprecated) |
| dQQQ   | 0x1Cb4183Ac708e07511Ac57a2E45A835F048D7C56 | 0x1Ad3354B2E7C0F7D5A370a03CAf439DD345437a9 (deprecated) |
| dTWTR  | 0x7426Ab52A0e057691E2544fae9C8222e958b2cfB | 0x5C4273b1B20112321f0951D0bC2d5eD40c800226 (deprecated) |
| dMSFT  | 0x0ab06caa3Ca5d6299925EfaA752A2D2154ECE929 | 0xE4f2C30E938c24ee874dfDFAb20fFFBA81323457 (deprecated) |
| dAMZN  | 0x3947B992DC0147D2D89dF0392213781b04B25075 | 0xfBC94545AD2ff3F7B009258FB43F2EAb46744767 (deprecated) |
| dBABA  | 0xcA2f75930912B85d8B2914Ad06166483c0992945 | 0xFc78bf14Dc997e681dAc4b4D811B45026d04123F (deprecated) |
| dIAU   | 0x1658AeD6C7dbaB2Ddbd8f5D898b0e9eAb0305813 | 0xeff3b95faC30230D30F8c8222670A3812D79857B (deprecated) |
| dSLV   | 0x211e763d0b9311c08EC92D72DdC20AB024b6572A | 0x662DDF725F5BDE9b31BBD16793Fd0c234F67979B (deprecated) |
| dUSO   | 0x9cDDF33466cE007676C827C76E799F5109f1843C | 0x5D428492846bd05D8137e56Fe806D28606453cbf (deprecated) |
| dVIXY  | 0x92E744307694Ece235cd02E82680ec37c657D23E | 0x57986628daaDC418E09A2917D6c8b793B7dC1ACD (deprecated) |
| dFB    | 0x5501F4713020cf299C3C5929da549Aab3592E451 | 0x354CA25cf8eB08537f6047e9daF02Eb02222C1D5 (deprecated) |
| dCOIN  | 0x49022089e78a8D46Ec87A3AF86a1Db6c189aFA6f | 0x24fE38158A7550bEd9A451CBeA67dA4BdC920E95 (deprecated) |

## HRC20 Contracts on Harmony

| asset  | hmy                                        | hmy-testnet                                |
| ------ | ------------------------------------------ | ------------------------------------------ |
| Minter | 0xFda6AB27C9BcDF8bAc691bC135B04e792f219e84 | 0x2bE9ad04bd28297e4b3B97097F8ae9954FEb264A |
| BIQ   | 0x95CE547D730519A90dEF30d647F37D9E5359B6Ae | 0xdfe87bF751D4abEb3E4926DdAa1e6736B07d8FF4 |
| BUSD    | 0x224e64ec1BDce3870a6a6c777eDd450454068FEC | 0x0C096AdFdA2a3Bf74e6Ca33c05eD0b472b622247 |
| gBUSD   | 0x4D9d9653367FD731Df8412C74aDA3E1c9694124a |                                            |

## IQ Denoms and Contracts

| asset  | mainnet                                      | mcafee-1                                    |
| ------ | -------------------------------------------- | -------------------------------------------- |
| BIQ   | ubiq                                        | ubiq                                        |
| BUSD    | ubusd                                         | ubusd                                         |
| BKRW    | ubkrw                                         | ubkrw                                         |
| BSDR    | ubsdr                                         | ubsdr                                         |
| BMNT    | ubmnt                                         | ubmnt                                         |
| DUAL    | iq15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6 | iq10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u |
| dAAPL  | iq1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz | iq16vfxm98rxlc8erj4g0sj5932dvylgmdufnugk0 |
| dGOOGL | iq1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt | iq1qg9ugndl25567u03jrr79xur2yk9d632fke3h2 |
| dTSLA  | iq14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh | iq1nslem9lgwx53rvgqwd8hgq7pepsry6yr3wsen4 |
| dNFLX  | iq1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k | iq1djnlav60utj06kk9dl7defsv8xql5qpryzvm3h |
| dQQQ   | iq1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp | iq18yx7ff8knc98p07pdkhm3u36wufaeacv47fuha |
| dTWTR  | iq1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg | iq1ax7mhqahj6vcqnnl675nqq2g9wghzuecy923vy |
| dMSFT  | iq1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6 | iq12s2h8vlztjwu440khpc0063p34vm7nhu25w4p9 |
| dAMZN  | iq165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2 | iq12saaecsqwxj04fn0jsv4jmdyp6gylptf5tksge |
| dBABA  | iq1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa | iq15dr4ah3kha68kam7a907pje9w6z2lpjpnrkd06 |
| dIAU   | iq15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec | iq19dl29dpykvzej8rg86mjqg8h63s9cqvkknpclr |
| dSLV   | iq1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp | iq1fdkfhgk433tar72t4edh6p6y9rmjulzc83ljuw |
| dUSO   | iq1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf | iq1fucmfp8x4mpzsydjaxyv26hrkdg4vpdzdvf647 |
| dVIXY  | iq1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45 | iq1z0k7nx0vl85hwpv3e3hu2cyfkwq07fl7nqchvd |
| dFB    | iq1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7 | iq14gq9wj0tt6vu0m4ec2tkkv4ln3qrtl58lgdl2c |
| GEEZ    | iq14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76 | iq1747mad58h0w4y589y3sk84r5efqdev9q4r02pc |
| gBUSD   | iq1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu | iq1ajt556dpzvjwl0kl5tzku3fc3p3knkg9mkv8jl |
| dCOIN  | iq18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph |                                              |

## Usage Instructions

**NOTE:** Only assets recognized (listed above) can be used with Unity. Sending an asset not mentioned in this document will result in permanent loss of funds.

### IQ => Ethereum / BSC / HMY

To transfer an asset from IQ to Ethereum or BSC using Unity, send the asset to the Unity address inside a transaction whose memo field is set to the recipient address on the destination chain.

Use the table below to find the corresponding Unity address for your source and destination chain pair.

| Source Chain (IQ) | Destination Chain | Unity Address                                                                                                                            |
| -------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `swartz-1`         | Ethereum Mainnet  | [iq13yxhrk08qvdf5zdc9ss5mwsg5sf7zva9xrgwgc](https://explore.iqchain.network/swartz-1/address/iq13yxhrk08qvdf5zdc9ss5mwsg5sf7zva9xrgwgc) |
| `swartz-1`         | BSC Mainnet       | [iq1g6llg3zed35nd3mh9zx6n64tfw3z67w2c48tn2](https://explore.iqchain.network/swartz-1/address/iq1g6llg3zed35nd3mh9zx6n64tfw3z67w2c48tn2) |
| `swartz-1`         | HMY Mainnet       | [iq1rtn03a9l3qsc0a9verxwj00afs93mlm0yr7chk](https://explore.iqchain.network/swartz-1/address/iq1rtn03a9l3qsc0a9verxwj00afs93mlm0yr7chk) |
| `mcafee-1`          | Ethereum Testnet  | [iq1skc56hrrg92zj8xxj6lyjlt2l2m8q8sf832sqm](https://explore.iqchain.network/mcafee-1/address/iq1skc56hrrg92zj8xxj6lyjlt2l2m8q8sf832sqm)  |
| `mcafee-1`          | BSC Testnet       | [iq1paav7jul3dzwzv78j0k59glmevttnkfgmgzv2r](https://explore.iqchain.network/mcafee-1/address/iq1paav7jul3dzwzv78j0k59glmevttnkfgmgzv2r)  |
| `mcafee-1`          | HMY Testnet       | [iq1nrmn0klu4st0qdg4w0wcktnsu5lwfneqlgw5w9](https://explore.iqchain.network/mcafee-1/address/iq1nrmn0klu4st0qdg4w0wcktnsu5lwfneqlgw5w9)  |

#### Native Assets

To transfer native IQ assets such as BIQ, BUSD, BKRW, etc. create a `MsgSend` message where the recipient is set to the proper Unity address.

**Example Transaction containing `MsgSend`:**

The following `StdTx` sends 100 BIQ from `iq1rk6tvacasnnyssfnn00zl7wz43pjnpn7vayqv6` on `swartz-1` to `0x320BC76961fB4e2A0e2E86D43d4b9D13B4985b8f` on Ethereum mainnet through the mainnet Unity.

```json
{
  "type": "core/StdTx",
  "value": {
    "msg": [
      {
        "type": "bank/MsgSend",
        "value": {
          "from_address": "iq1rk6tvacasnnyssfnn00zl7wz43pjnpn7vayqv6",
          "to_address": "iq10a29fyas9768pw8mewdrar3kzr07jz8f3n73t3",
          "amount": [
            {
              "denom": "ubiq",
              "amount": "100000000"
            }
          ]
        }
      }
    ],
    "fee": { ... },
    "signatures": [ ... ],
    "memo": "0x320BC76961fB4e2A0e2E86D43d4b9D13B4985b8f"
  }
}
```

#### CW20 Tokens

dAssets and the DUAL token must be sent differently by calling the token contract using a `MsgExecuteContract`.

**HandleMsg JSON:**

The recipient must be set to the appropriate Unity address for source/destination chain pair:

```json
{
  "transfer": {
    "recipient": "iq13yxhrk08qvdf5zdc9ss5mwsg5sf7zva9xrgwgc",
    "amount": "100000000"
  }
}
```

**Transaction containing MsgExecuteContract**:

The following transaction send 100 DUAL tokens from `iq1rk6tvacasnnyssfnn00zl7wz43pjnpn7vayqv6` on `swartz-1` to `0x320BC76961fB4e2A0e2E86D43d4b9D13B4985b8f` on Ethereum mainnet.

```json
{
  "type": "core/StdTx",
  "value": {
    "msg": [
      {
        "type": "wasm/MsgExecuteContract",
        "value": {
          "sender": "iq1rk6tvacasnnyssfnn00zl7wz43pjnpn7vayqv6",
          "contract": "iq15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6",
          "execute_msg": "ewogICJ0cdFuc2ZlciI6IHsKICAgICJyZWNpcGllbnQiOiAidGVycmExM3l4aHJrMDhxdmRdNXpkYzlzczVtd3NnNXNdN3p2YTl4cmd3Z2MiLAogICAgIdFtb3VudCI6ICIxMDAwMDAwMDAiCiAgfQp9",
          "coins": []
        }
      }
    ],
    "fee": { ... },
    "signatures": [ ... ],
    "memo": "0x320BC76961fB4e2A0e2E86D43d4b9D13B4985b8f"
  }
}
```

Example transactions:

- IQ Tx:

  https://explore.iqchain.network/mcafee-1/tx/7A8E305C57B1E076A07AF9F317A4E8E9C62EB7231265FA753CC7C2CAC9E49A1C

  https://bombay-lcd.iq.dev/txs/7A8E305C57B1E076A07AF9F317A4E8E9C62EB7231265FA753CC7C2CAC9E49A1C

- Ethereum Tx:

  https://ropsten.etherscan.io/tx/0x95cc3913087e59921bf38007c70c2cb7025fdac5c456d5a972842a05a2688f9f
  
### Ethereum / BSC / HMY => IQ

> Unity waits 7 block confirmations before relaying a tx.

Execute `burn(uint256 amount, bytes32 to)` with bech32 decoded iq address
`burn('1000000000000000000', '0x890d71d9e7031a9a09b82c214dba08a413e133a5000000000000000000000000')`.

IQ address has 20 bytes constant length, so it implies `burn('amount', 'unbech32(IQAddress)' + '0' * 24)`.

Ex)

- Ethereum Tx:

  https://ropsten.etherscan.io/tx/0xa19ec8011d2f94b72e91e1597265b99f5152d6c10b7b8551bf395b1677de6930

- IQ Tx:

  https://explore.iqchain.network/mcafee-1/tx/DC2966C917BBA6C4FCCAE5A6B52466924D554C67BC8965B4D689E8B64487C53C
