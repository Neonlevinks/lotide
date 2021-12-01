const assert = require('chai').assert;

const middle = require('../middle')

describe("#middle", () => {
  it('should return middle of an odd array', () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });

  it('should return two middle items of an even array', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return no middle for an array of 1 item', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return no middle for an array of 2 items', () => {
    assert.deepEqual(middle([1, 2]), [])
  })
})


//assertArraysEqual(middle([1, 2, 3]),[2]);
//assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
//assertArraysEqual(middle([1]), []);
//assertArraysEqual(middle([1, 2]), []);