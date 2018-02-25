const assert = require('assert');

describe('cryptofix/scrypt tests', function() {
  it('can hash correctly', function() {
    const Scrypt = require(`${process.cwd()}/scrypt`);

    assert.equal(
      Scrypt('asdasda', 'asdasd', 1, 0, 0, 64).toString('base64'),
      't7c+1wcudIEbi2TcGugKhjO6Xy0IBg9plk1/UyX10BwjTUQXqnmKFDqUoE6vNIlJpZS4fDlsrgoqnvDo3DQJcw=='
    );
  });
});
