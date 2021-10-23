const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (array) => {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  console.log(result);
  return result;
};

//TEST CODE
assertEqual((tail(["a", "s", "d"])).length, 2); //tail should have 1 less length than the original array
assertEqual((tail([])).length, 0); //the tail of an empty array should have a length of zero
assertEqual((tail(["a"])).length, 0); //the tail of an empty array should have a length of zero