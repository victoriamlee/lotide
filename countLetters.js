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

module.exports = countLetters;