const assert = require("assert");
const { forEach } = require("../index");

let numbers;
beforeEach(() => {
  numbers = [1, 2, 3];
});

it("should sum an array", () => {
  let total = 0;
  forEach(numbers, value => {
    total += value;
  });
  //change to fail assertion
  assert.strictEqual(total, 6);
  numbers.push(3);
  numbers.push(3);
  numbers.push(3);
  numbers.push(3);
});

it("beforeEach is ran each time", () => {
  assert.strictEqual(numbers.length, 3);
  //change this number to fail test
});
