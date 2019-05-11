const expect = require('expect');
const { byteSize } = require('./_30s.js');
const Blob = class {
  constructor(s) {
    return {
      size: Buffer.byteLength(s.toString())
    };
  }
};

test('byteSize is a Function', () => {
  expect(byteSize).toBeInstanceOf(Function);
});
test('Works for a single letter', () => {
  expect(byteSize('a')).toBe(1);
});
test('Works for a common string', () => {
  expect(byteSize('Hello World')).toBe(11);
});
test('Works for emoji', () => {
  expect(byteSize('😀')).toBe(4);
});
