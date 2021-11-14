import { getGameArray } from '.';

describe('getGameArray()', () => {
  it.each`
    level       | expected
    ${'easy'}   | ${24}
    ${'normal'} | ${48}
    ${'hard'}   | ${96}
    `(
    "should return expected array length when 'level' is $level",
    ({ level, expected }) => {
      expect(
        getGameArray(level).length
      ).toBe(expected);
    }
  );
});
