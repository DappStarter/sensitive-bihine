require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net proof harvest drive fortune skill'; 
let testAccounts = [
"0x2626ddf5f61f7c964bc6b6a35f079df8855d5403bae1051efd3427f0d3d59c99",
"0xc02fe2d9bb623ce59fa67ed2b761aeb2c7c4f9015295e72a46af36a447212fc2",
"0xa07ba3524e790e3a643e6fd9335cf50d6cb67dc236739c100dc0254b81919976",
"0x62bf23635701690cc42edf66a06fe90dbf0e2c76bba30b563e16eff45c8a81e9",
"0xa21495ad5e10f19e8c95d9b1653b684d7007b4809dd957bf126341e3f1f96674",
"0x5d88972e052508be435a8f3bd14d82948623c84b9de2eb2a61f4b79b218abb24",
"0x5b79115400a8b615777d864231ea14e06afb40d25b0184a4227273e8c63bdeaa",
"0x89a165ee7390bb710cf916495299ce556c4be54a6127fbdbcb621b7fc5ce3ddb",
"0x17d56a3254636086b250f77914feccaef0882427304adbd302d6755e829430e2",
"0x8ebbdc5c2a7c71d46c3d57f93a4bd92a94c9a66e8cc6e3129138dc87d7011dab"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
