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

module.exports = countLetters;