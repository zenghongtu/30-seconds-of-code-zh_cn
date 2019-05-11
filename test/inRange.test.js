const expect = require('expect');
const {inRange} = require('./_30s.js');

test('inRange is a Function', () => {
  expect(inRange).toBeInstanceOf(Function);
});
test('The given number falls within the given range', () => {
  expect(inRange(3, 2, 5)).toBeTruthy();
});
test('The given number falls within the given range (reverse)', () => {
  expect(inRange(3, 5, 2)).toBeTruthy();
});
test('The given number falls within the given range', () => {
  expect(inRange(3, 4)).toBeTruthy();
});
test('The given number does not falls within the given range', () => {
  expect(inRange(2, 3, 5)).toBeFalsy();
});
test('The given number does not falls within the given range', () => {
  expect(inRange(3, 2)).toBeFalsy();
});
