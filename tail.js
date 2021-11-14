
const tail = (array) => {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  console.log(result);
  return result;
};

module.exports = tail; 