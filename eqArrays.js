const eqArrays = (array1, array2) => {
  let result = false;
  if (array1.length === 0 && array2.length === 0) {
    result = true;
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
};

module.exports = eqArrays;


