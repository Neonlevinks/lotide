const eqArrays = (array1, array2) => {
  let result = false;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        result = true;
      } else if (array1[i] !== array2[i]) {
        result = false;
        break;
      }
    }
    return result;
  }
  return result;
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//TEST CODE
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1]) // => []
middle([1, 2]) // => []