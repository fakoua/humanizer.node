let assert = require('assert');
require('../dist')


describe('ByteSize', function() {
  const fileSize = (10).kilobytes()
  describe('.bits()', function() {
    it('Trying (number).bits()', function() {
      assert.equal(fileSize.bits, 81920);
    });
  });
  describe('.bytes()', function() {
    it('Trying (number).bytes()', function() {
      assert.equal(fileSize.bytes, 10240);
    });
  });
  describe('.kilobytes()', function() {
    it('Trying (number).kilobytes()', function() {
      assert.equal(fileSize.kilobytes, 10);
    });
  });
  describe('.megabytes()', function() {
    it('Trying (number).megabytes()', function() {
      assert.equal(fileSize.megabytes, 0.009765625);
    });
  });
  describe('.gigabytes()', function() {
    it('Trying (number).gigabytes()', function() {
      assert.equal(fileSize.gigabytes, 0.0000095367431640625);
    });
  });
  describe('.terabytes()', function() {
    it('Trying (number).terabytes()', function() {
      assert.equal(fileSize.terabytes, 9.313225746154785e-9);
    });
  });
});

describe('vocabularies', function() {
  describe('.pluralize()', function() {
    it('Trying (string).pluralize()', function() {
      assert.equal("Man".pluralize(), "Men");
      assert.equal("string".pluralize(), "strings");
    });
  });
});

describe('Ordinalize', function() {
  describe('.ordinalize()', function() {
    it('Trying (string).ordinalize()', function() {
      assert.equal((1).ordinalize(), "1st");
      assert.equal((5).ordinalize(), "5th");
    });
  });
});

describe('ToQuantity', function() {
  describe('.toQuantity()', function() {
    it('Trying (string).toQuantity()', function() {
      assert.equal("case".toQuantity(0), "0 cases");
      assert.equal("case".toQuantity(1), "1 case");
      assert.equal("case".toQuantity(5), "5 cases");
      assert.equal("man".toQuantity(2), "2 men");
      assert.equal("case".toQuantity(5, 2), "five cases");
    });
  });
});

describe('Number to words', function() {
  describe('.numberToWords()', function() {
    it('Trying (string).numberToWords()', function() {
      assert.equal((1).toWords(), "one");
      assert.equal((10).toWords(), "ten");
      assert.equal((11).toWords(), "eleven");
      assert.equal((122).toWords(), "one hundred and twenty-two");
      assert.equal((3501).toWords(), "three thousand five hundred and one");
    });
  });
});

describe('Number to ordinal words', function() {
  describe('.numberToWords()', function() {
    it('Trying (string).numberToWords()', function() {
      assert.equal((1).toOrdinalWords(), "first");
      assert.equal((10).toOrdinalWords(), "tenth");
      assert.equal((11).toOrdinalWords(), "eleventh");
      assert.equal((121).toOrdinalWords(), "hundred and twenty-first");
    });
  });
});
