const eqArrays = (array1, array2) => {
  let result = false;
  if (array1.length === 0 && array2.length === 0) {
    result = true
  } else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        result = true;
      } else if (array1[i] !== array2[i]) {
        result = false;
        break;
      }
    }
  }
  return result;
}
  


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = (array) => {
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {//if the length is even
      let midHigher = array.length/2;
      let midLower = array.length/2 - 1;
      result.push(array[midLower]);
      result.push(array[midHigher]);
    } else if (array.length % 2 !== 0) {//if the length is odd
      let mid = Math.floor(array.length/2);
      result.push(array[mid]);
      }
    } 
  return result;
}

//TEST CODE
assertArraysEqual(middle([1, 2, 3]),[2]);



assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);