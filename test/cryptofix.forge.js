const assert = require('assert');

describe('cryptofix/forge tests', function() {
  it('can import forge correctly', function() {
    const forge = require(`${process.cwd()}/forge`);

    assert.deepEqual(Object.keys(forge), [
      'options', 'util', 'cipher', 'aes', 'pki', 'oids', 'asn1', 'md', 'hmac', 'md5', 'pem', 'des',
      'pkcs5', 'pbkdf2', 'sha256', 'prng', 'random', 'rc2', 'jsbn', 'sha1', 'pkcs1', 'prime', 'rsa',
      'pbe', 'pkcs7asn1', 'pkcs7', 'mgf', 'mgf1', 'pss', 'pkcs12', 'tls', 'debug', 'kem', 'log',
      'sha512', 'sha384', 'ssh', 'task'
    ]);
  });
});
