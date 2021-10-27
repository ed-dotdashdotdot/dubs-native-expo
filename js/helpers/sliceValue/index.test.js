/* eslint-disable no-undef */
import sliceValue from '.';

describe('sliceValue()', () => {
  it('should return the correct value', () => {
    expect(sliceValue('123A', 3)).toBe('123');
    expect(sliceValue('123B', 3)).toBe('123');
    expect(sliceValue('1234A', 4)).toBe('1234');
    expect(sliceValue('1234B', 4)).toBe('1234');
    expect(sliceValue([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
    expect(sliceValue([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);
  });
});
