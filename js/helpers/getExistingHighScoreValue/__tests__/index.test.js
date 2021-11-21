import { getExistingHighScoreValue } from '../';

describe('getExistingHighScoreValue()', () => {
  const currentHighScores = [
    '12.34--easy--1--',
    '123.45--easyBossMode--1--',
    '23.45--normal--2--',
    '123.45--normalBossMode--2--',
    '34.56--hard--3--',
    '1234.56--hardBossMode--3--',
  ];
  describe('when level is easy', () => {
    it.each`
      level       | bossMode | image  | expected
      ${'easy'}   | ${false} | ${'1'} | ${{key: '--easy--1--', time: 12.34}}
      ${'easy'}   | ${true}  | ${'1'} | ${{key: '--easyBossMode--1--', time: 123.45}}
      `(
      "should return the expected object when 'level' is $level, 'bossMode' is $bossMode and 'image' is $image",
      ({ level, bossMode, image, expected }) => {
        expect(
          getExistingHighScoreValue(
            level,
            bossMode,
            image,
            currentHighScores
          )
        ).toEqual(expected);
      }
    );
  });
  describe('when level is normal', () => {
    it.each`
      level       | bossMode | image  | expected
      ${'normal'} | ${false} | ${'2'} | ${{key: '--normal--2--', time: 23.45}}
      ${'normal'} | ${true}  | ${'2'} | ${{key: '--normalBossMode--2--', time: 123.45}}
      `(
      "should return the expected object when 'level' is $level, 'bossMode' is $bossMode and 'image' is $image",
      ({ level, bossMode, image, expected }) => {
        expect(
          getExistingHighScoreValue(
            level,
            bossMode,
            image,
            currentHighScores
          )
        ).toEqual(expected);
      }
    );
  });
  describe('when level is hard', () => {
    it.each`
      level       | bossMode | image  | expected
      ${'hard'}   | ${false} | ${'3'} | ${{key: '--hard--3--', time: 34.56}}
      ${'hard'}   | ${true}  | ${'3'} | ${{key: '--hardBossMode--3--', time: 1234.56}}
      `(
      "should return the expected object when 'level' is $level, 'bossMode' is $bossMode and 'image' is $image",
      ({ level, bossMode, image, expected }) => {
        expect(
          getExistingHighScoreValue(
            level,
            bossMode,
            image,
            currentHighScores
          )
        ).toEqual(expected);
      }
    );
  });
  describe('when entry doesn\'t exist in the array', () => {
    it.each`
      level       | bossMode | image  | expected
      ${'easy'}   | ${false} | ${'4'} | ${{key: '--easy--4--', time: 0}}
      ${'normal'} | ${false} | ${'4'} | ${{key: '--normal--4--', time: 0}}
      ${'hard'}   | ${false} | ${'4'} | ${{key: '--hard--4--', time: 0}}
      `(
      "should return the expected object when 'level' is $level, 'bossMode' is $bossMode and 'image' is $image",
      ({ level, bossMode, image, expected }) => {
        expect(
          getExistingHighScoreValue(
            level,
            bossMode,
            image,
            currentHighScores
          )
        ).toEqual(expected);
      }
    );
  });
});
