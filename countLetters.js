//assertEqual function copied
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (inputString) => {
  results = {};

  for (const letter of inputString) {
    if (results[letter]) {
        results[letter] += 1;
    } else if (letter === " ") {
    
    } else {
        results[letter] = 1;
    }
    
  }
  console.log(results)
  return results;
}

