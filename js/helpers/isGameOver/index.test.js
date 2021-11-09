import { isGameOver } from '.';

describe('isGameOver()', () => {
  it('should return true', () => {
    expect(isGameOver('game-on', 100, 50)).toBe(true);
    expect(isGameOver('game-on', 200, 100)).toBe(true);
  });
  it('should return false', () => {
    expect(isGameOver('game-on', 100, 0)).toBe(false);
    expect(isGameOver('game-on', 200, 10)).toBe(false);
  });
});
