import { isButtonFound } from '../';

describe('isButtonFound()', () => {
  it('should return true when the values are the same', () => {
    expect(isButtonFound('STRING', 'STRING')).toBe(true);
  });
  it('should return false when the values are different', () => {
    expect(isButtonFound('STRING', 'SOMETHING-ELSE')).toBe(false);
  });
});
