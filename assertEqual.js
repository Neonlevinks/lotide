//Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");//testing non-identical strings
assertEqual(1, 1); //testing identical numbers
assertEqual("Kevin", "Kevin"); //testing identical strings
assertEqual(1, 10)//testing non-identical numbers
