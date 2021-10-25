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

const without = (originArray, removalArray) => {
  let resultArray = [];
  for (let i = 0; i < originArray.length; i++) {
    let findMatch = false;
    for (let j = 0; j < removalArray.length; j++) {
      if (removalArray[j] === originArray[i]) {
        findMatch = true;
      }
      
    }
    if (!findMatch) {
      resultArray.push(originArray[i]);
    }
  }
  return resultArray;
};

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);