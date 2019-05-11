const expect = require('expect');
const {indexOfAll} = require('./_30s.js');

test('indexOfAll is a Function', () => {
  expect(indexOfAll).toBeInstanceOf(Function);
});
test('Returns all indices of val in an array', () => {
  expect(indexOfAll([1, 2, 3, 1, 2, 3], 1)).toEqual([0, 3]);
});
test('When val is not found, return an empty array', () => {
  expect(indexOfAll([1, 2, 3], 4)).toEqual([]);
});
