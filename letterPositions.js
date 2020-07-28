const letterPositions = function(string) {
  const results = {};
  const letters = string.split(' ').join('');

  for (let i = 0; i < letters.length; i++) {
    if (results[letters[i]]) {
      results[letters[i]].push(i);
    } else {
      results[letters[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('hello world'));

module.exports = letterPositions;