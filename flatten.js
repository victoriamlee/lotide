const assertArraysEqual = function (actual, expected) {
  if(eqArrays (actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let counter = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        counter++;
      }
    }   
    if (counter === array1.length) {
      return true;  
    } else {
      return false;
    }
  } else {
    return false;
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