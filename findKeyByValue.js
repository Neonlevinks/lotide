const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "Doctor Who",
  comedy: "Monty Python",
  drama: "Squid Game"
}

const findKeyByValue = (bestTVShowsByGenre, genreRequest) => {
  let resultShow = "";
  for (const index in bestTVShowsByGenre) {
    genreRequest === bestTVShowsByGenre[index] ? resultShow += index : undefined;
  }

  return resultShow;
};

