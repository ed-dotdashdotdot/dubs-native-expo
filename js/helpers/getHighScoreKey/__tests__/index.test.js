import { getHighScoreKey } from '../';

describe('getHighScoreKey()', () => {
  describe('when level is easy', () => {
    it.each`
      level       | bossMode | image  | expected
      ${'easy'}   | ${false} | ${'1'} | ${"--easy--1--"}
      ${'easy'}   | ${true}  | ${'1'} | ${"--easyBossMode--1--"}
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
  describe('when level is normal', () => {
    it.each`
      level       | bossMode | image  | expected
      ${'normal'} | ${false} | ${'2'} | ${"--normal--2--"}
      ${'normal'} | ${true}  | ${'2'} | ${"--normalBossMode--2--"}
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
  describe('when level is hard', () => {
    it.each`
      level       | bossMode | image  | expected
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
});
