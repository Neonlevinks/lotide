const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function Implementation
const head = (array) => {
  let result = array[0];
  return result;
}

//Test Cases
assertEqual(head([5,6,7]), 5);//should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//should pass
assertEqual(head([5,6,7]), 6);//should fail;
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");//should fail
assertEqual(head([5]), 5);//testing array of 1 item, should pass
assertEqual(head([]), undefined);
