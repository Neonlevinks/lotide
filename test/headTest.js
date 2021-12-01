const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const head = require('../head');

/*describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});
*/

//Test Cases
assertEqual(head([5,6,7]), 5);//should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//should pass
assertEqual(head([5,6,7]), 6);//should fail;
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");//should fail
assertEqual(head([5]), 5);//testing array of 1 item, should pass
assertEqual(head([]), undefined);//testing empty array, should pass