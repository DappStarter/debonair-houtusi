require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remember assume install photo fresh spray'; 
let testAccounts = [
"0x152c8ee3f88d23258f30a537dad1b502a8bf3d83b0769eb7d46bf5110de1e5e0",
"0xaeef92ec4dca9021120d7a3af622cdedbe0965cf835598e9863cfbb0bca61c1e",
"0x968c62497ae3e8e74a0e6d13fc157ed7d09de3f565d31ce4c4d2a1fa28e47655",
"0x7fc04d11ca91a1c9c6a629fc4289abbd56b86280a5ae6ddf9efc53838f5c542e",
"0x01157646ca4bad0869d66cd94cbbe2c1fff70579d3e5513fffcdf17a2bd381cc",
"0xb399f974f2dc03e45319f4261a0efb1a70b363a1da96233026d9c064798ca063",
"0xe5be1173a9aab92405e12b922148267b2309385f71b86521839a97bf5e2ca2c5",
"0xa249d774ee2cde07ee4744bab57d351e2793eda62ee25d7102f8decb64c28d57",
"0x6cae1432e149889af873799ae2cca3ad90f98303095635c2c1595cd2af055c2a",
"0xdfa6bf4cb348545ceca9ad15fa3109eb9ff8c77401475bfcb438a2a8516515ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
