const expect = require('expect');
const {isBrowserTabFocused} = require('./_30s.js');

test('isBrowserTabFocused is a Function', () => {
  expect(isBrowserTabFocused).toBeInstanceOf(Function);
});
test('isBrowserTabFocused is a Function', () => {
  expect(typeof isBrowserTabFocused()).toBe('boolean');
});
