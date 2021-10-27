/* eslint-disable no-undef */
import isButtonFound from '.';

describe('isButtonFound()', () => {
  it('should return true when the values are the same', () => {
    expect(isButtonFound('value', 'value')).toBe(true);
  });
  it('should return false when the values are different', () => {
    expect(isButtonFound('value', 'differentValue')).toBe(false);
  });
});
