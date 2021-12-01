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

const letterPositions = (sentence) => {
  const results = {};
  for (const index in sentence) {
    let letter = sentence[index];
    let indexToNum = parseInt(index);
    results[letter] ? results[letter].push(indexToNum) : results[letter] = [indexToNum];
  }

  return results;
}



assertArraysEqual(letterPositions("hello")["e"], [1])

module.exports = letterPositions;