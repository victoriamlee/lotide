const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  if(eqArrays (actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = arr => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) !== true) {
      output.push(arr[i])
    } else {
      output = output.concat(arr[i]);
    }
  }
  return output;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

module.exports = flatten;