const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {
  it("returns 1 less length than original array", () => {
    assert.strictEqual((tail(["a", "s", "d"])).length, 2)
  });
  
  it("should return a length of 0 for an empty array", () => {
    assert.strictEqual((tail([])).length, 0)
  });

  it ("should return a length of 0 for an array with only 1 element", () => {
    assert.strictEqual(tail(["a"]).length, 0);
  })
})
//TEST CODE

//assertEqual(; //the tail of an empty array should have a length of zero
//assertEqual((tail(["a"])).length, 0); //the tail of an empty array should have a length of zero