const middle = (array) => {
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {//if the length is even
      let midHigher = array.length / 2;
      let midLower = array.length / 2 - 1;
      result.push(array[midLower]);
      result.push(array[midHigher]);
    } else if (array.length % 2 !== 0) {//if the length is odd
      let mid = Math.floor(array.length / 2);
      result.push(array[mid]);
    }
  }
  return result;
};

module.exports = middle;

