const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
  it("returns ['Orange', 'Apple', 'Mango'] for ['Banana', 'Orange', 'Apple', 'Mango']", () => {
    assert.deepEqual(tail(["Banana", "Orange", "Apple", "Mango"]), ["Orange", "Apple", "Mango"]); 
  });
});
