// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const objCounter = {};
  const letters = string.split(' ').join('');
  for (let letter of letters) {
    if (objCounter[letter]) {
      objCounter[letter]++;
    } else {
      objCounter[letter] = 1;
    }
  }
  return objCounter;
};