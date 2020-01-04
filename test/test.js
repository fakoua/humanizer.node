let assert = require('assert');
require('../dist/numberToWords')
require('../dist/byteSize')

describe('NumberToWords', function() {
  describe('.toWords()', function() {
    it('Trying (number).toWord', function() {
      assert.equal((1).toWords(), "one");
      assert.equal((10).toWords(), "ten");
    });
  });
});

describe('ByteSize', function() {
  describe('.megabytes()', function() {
    it('Trying (number).megabytes()', function() {
      assert.equal((10).megabytes().toString(), "10 MB");
    });
  });
});