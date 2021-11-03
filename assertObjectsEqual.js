const eqObjects = (object1, object2) => {
  let object1Key = Object.getOwnPropertyNames(object1);
  let object2Key = Object.getOwnPropertyNames(object2);

  if (object1Key.length !== object2Key.length) {
    return false;
  };
  for (let key of object1Key) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true
}

const assertObjectsEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual((eqObjects(ab, ba)), true);
