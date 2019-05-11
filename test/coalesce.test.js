const expect = require('expect');
const {coalesce} = require('./_30s.js');

test('coalesce is a Function', () => {
  expect(coalesce).toBeInstanceOf(Function);
});
test('Returns the first non-null/undefined argument', () => {
  expect(coalesce(null, undefined, '', NaN, 'Waldo')).toEqual('');
});
