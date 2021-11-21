import { getHighScoreKey } from '../';

describe('getHighScoreKey()', () => {
  it.each`
    level       | bossMode | image  | expected
    ${'easy'}   | ${false} | ${'1'} | ${"--easy--1--"}
    ${'easy'}   | ${true}  | ${'1'} | ${"--easyBossMode--1--"}
    ${'normal'} | ${false} | ${'2'} | ${"--normal--2--"}
    ${'normal'} | ${true}  | ${'2'} | ${"--normalBossMode--2--"}
    ${'hard'}   | ${false} | ${'3'} | ${"--hard--3--"}
    ${'hard'}   | ${true}  | ${'3'} | ${"--hardBossMode--3--"}
    `(
    "should return expected value when 'level' is $level, 'bossMode' is $bossMode and 'image' is $image",
    ({ level, bossMode, image, expected }) => {
      expect(
        getHighScoreKey(
          level,
          bossMode,
          image
        )
      ).toBe(expected);
    }
  );
});
