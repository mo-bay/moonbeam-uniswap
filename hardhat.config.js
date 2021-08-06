/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('@nomiclabs/hardhat-ethers');

 // Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
 // Export your private key as
 //       export PRIVKEY=0x.....
 const privateKey = process.env.PRIVKEY;
 const privateKeyDev =
    'b3705688a47a7563b1c86a2953b847009faa4c510d9bcc322f03264f75e8deb6';
 
 module.exports = {
    defaultNetwork: 'hardhat',
 
    networks: {
       hardhat: {},
 
       moonbase: {
          url: 'https://rpc.testnet.swapdex.net',
          accounts: [privateKeyDev],
          chainId: 7879,
       },
       dev: {
          url: 'http://127.0.0.1:9933',
          accounts: [privateKeyDev],
          network_id: '7880',
          chainId: 7880,
       },
    },
    solidity: {
       compilers: [
          {
             version: '0.5.16',
             settings: {
                optimizer: {
                   enabled: true,
                   runs: 200,
                },
             },
          },
          {
             version: '0.6.6',
             settings: {
                optimizer: {
                   enabled: true,
                   runs: 200,
                },
             },
          },
       ],
    },
    paths: {
       sources: './contracts',
       cache: './cache',
       artifacts: './artifacts',
    },
    mocha: {
       timeout: 20000,
    },
 };
 