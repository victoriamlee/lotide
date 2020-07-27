// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  let newArr = arr;
  newArr.splice(0,1);
  return newArr;
};

module.exports = tail;


