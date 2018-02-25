const assert = require('assert');

describe('cryptofix/ethereumjs-wallet tests', function() {
  it('can import', function() {
    const EthereumjsWallet = require(`${process.cwd()}/ethereumjs-wallet`);

    assert.deepEqual(Object.keys(EthereumjsWallet), [
      'generate', 'fromPublicKey', 'fromExtendedPublicKey', 'fromPrivateKey',
      'fromExtendedPrivateKey', 'fromV1', 'fromV3', 'fromEthSale'
    ]);
  });
});
