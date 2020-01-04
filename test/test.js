let assert = require('assert');
require('../dist/numberToWords')

describe('NumberToWords', function() {
  describe('.toWords()', function() {
    it('Trying (number).toWord', function() {
      assert.equal((1).toWords(), "one");
      assert.equal((10).toWords(), "ten");
    });
  });
});