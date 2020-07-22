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

const assertArraysEqual = function (actual, expected) {
  if(eqArrays (actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr) {
  let newArr = [];
  if (arr.length < 3) {
    return newArr;
  } else {
    if (arr.length % 2 === 0) {
      let i = arr.length / 2;
      newArr.push(arr[i - 1], arr[i]);
      return newArr;
    } else {
      let i = Math.floor(arr.length / 2);
      newArr.push(arr[i]);
      return newArr;
    }
  }
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

