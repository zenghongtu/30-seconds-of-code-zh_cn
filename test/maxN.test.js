const expect = require('expect');
const {maxN} = require('./_30s.js');

test('maxN is a Function', () => {
  expect(maxN).toBeInstanceOf(Function);
});
test('Returns the n maximum elements from the provided array', () => {
  expect(maxN([1, 2, 3])).toEqual([3]);
});
test('Returns the n maximum elements from the provided array', () => {
  expect(maxN([1, 2, 3], 2)).toEqual([3, 2]);
});
