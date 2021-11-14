import { whichLevelColour } from '../';

describe('whichLevelColour()', () => {
  it('should return the correct string', () => {
    expect(whichLevelColour('easy')).toBe('green');
    expect(whichLevelColour('normal')).toBe('amber');
    expect(whichLevelColour('hard')).toBe('red');
    expect(whichLevelColour('ANY OTHER STRING')).toBeFalsy();
  });
});
