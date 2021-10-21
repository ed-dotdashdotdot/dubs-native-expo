/* eslint-disable no-undef */
import ucFirst from '.';

describe('ucFirst()', () => {
  it('should return the correct string', () => {
    expect(ucFirst('string')).toBe('String');
    expect(ucFirst('STRING')).toBe('STRING');
    expect(ucFirst('String')).toBe('String');
    expect(ucFirst('!string')).toBe('!string');
  });
  it('should handle different input', () => {
    expect(ucFirst('')).toEqual('');
    expect(ucFirst('123')).toEqual('123');
    expect(ucFirst(123)).toEqual(123);
    expect(ucFirst([])).toEqual([]);
    expect(ucFirst({})).toEqual({});
  });
});
