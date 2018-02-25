const assert = require('assert');

describe('cryptofix/bip39 tests', function() {
  it('can import', function() {
    const BIP39 = require(`${process.cwd()}/bip39`);

    assert.deepEqual(Object.keys(BIP39), [
      'mnemonicToSeed', 'mnemonicToSeedHex', 'mnemonicToEntropy', 'entropyToMnemonic',
      'generateMnemonic', 'validateMnemonic', 'wordlists'
    ]);
  });

  it('bip39.generateMnemonic() works', function() {
    const BIP39 = require(`${process.cwd()}/bip39`);

    BIP39.generateMnemonic().split(' ').forEach((word) => {
      assert.ok(word.length > 2);
    });
  });
});
