# Classic DEX Example forked from Sushiswap-Classic-Exchange (Uniswap)

Forked from [sushiswap/sushiswap-classic-exchange](https://github.com/sushiswap/sushiswap-classic-exchange), and updated for both a Moonbase Standalone Node and Moonbase Alpha.

## Moonbase Standalone Addresses

If you use the [following repository](https://github.com/albertov19/uniswap-contracts-moonbeam): your contracts should have the following addresses:

```
      "WETH": "0xd13Cf7053bD8C6D42e3d699b63Cdd50884E35F72",
      "factory": "0x511Bc6784136Fb4B620Add95c9616D0D2BB3F77e",
      "router": "0x221D7D037754B6beF34aBA49D141B86D1F3F97D8",
      "multicall": "0x590407a23C2F83c555AEee78A1A7655513621e89",
      "init_code_hash": "0x01429e880a7972ebfbba904a5bbe32a816e78273e4b38ffa6bdeaebce8adba7c",
      "tok1": "0x1724b8Ef6738d18BC8A4B02ab55466cC0817B60c",
      "tok2": "0xBb0CC0fb3e0c06725c67167501f850B4900D6DB5"
```

## Moonbase Alpha Addresses

To make the interface work with your Moonbase Alpha deployment, you need to modify the `./src/moonbase_address.json`. Also make sure that you modify the addresses in the SDK repo.

On Moonbase Alpha, these are the following addresses:

```
      "WETH": "0x1c94B4e46D35c27Ed241c8e9E2c91a7FB443CEdc",
      "Factory": "0x3584446E08A4433f3b57d0D53A4338A282fB570D",
      "Router": "0x56a82ED340bB2CFa87777b1C42adE7F687A2196a",
      "multicall": "0xE3701304F4d224B738Dc7a22f216884B815aef12",
      "init_code_hash": "0x01429e880a7972ebfbba904a5bbe32a816e78273e4b38ffa6bdeaebce8adba7c",
      "tok1": "0x825458b871FC6582d94c6d2BCe887897DFD9EDA2",
      "tok2": "0xF8f525327D199F340D60d4b3ee847B5d49a28E3C"
```

## Build

Install packages:

```
npm i
```

Run:

```
npm start
```
