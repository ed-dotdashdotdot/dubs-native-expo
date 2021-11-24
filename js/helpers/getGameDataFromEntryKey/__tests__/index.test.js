import { getGameDataFromEntryKey } from '../';

describe('getGameDataFromEntryKey()', () => {
  describe('when level is expected to be easy', () => {
    it.each`
      entryKey                 | expected
      ${'--easy--1--'}         | ${{level: 'easy', bossMode: false, image: '1'}} 
      ${'--easy--2--'}         | ${{level: 'easy', bossMode: false, image: '2'}} 
      ${'--easyBossMode--1--'} | ${{level: 'easy', bossMode: true, image: '1'}} 
      ${'--easyBossMode--2--'} | ${{level: 'easy', bossMode: true, image: '2'}} 
      `(
      "should return expected object when entryKey is $entryKey",
      ({ entryKey, expected }) => {
        expect(getGameDataFromEntryKey(entryKey)).toEqual(expected);
      }
    );
  });
  describe('when level is expected to be normal', () => {
    it.each`
      entryKey                   | expected
      ${'--normal--1--'}         | ${{level: 'normal', bossMode: false, image: '1'}} 
      ${'--normal--2--'}         | ${{level: 'normal', bossMode: false, image: '2'}} 
      ${'--normalBossMode--1--'} | ${{level: 'normal', bossMode: true, image: '1'}} 
      ${'--normalBossMode--2--'} | ${{level: 'normal', bossMode: true, image: '2'}} 
      `(
      "should return expected object when entryKey is $entryKey",
      ({ entryKey, expected }) => {
        expect(getGameDataFromEntryKey(entryKey)).toEqual(expected);
      }
    );
  });
  describe('when level is expected to be hard', () => {
    it.each`
      entryKey                 | expected
      ${'--hard--1--'}         | ${{level: 'hard', bossMode: false, image: '1'}} 
      ${'--hard--2--'}         | ${{level: 'hard', bossMode: false, image: '2'}} 
      ${'--hardBossMode--1--'} | ${{level: 'hard', bossMode: true, image: '1'}} 
      ${'--hardBossMode--2--'} | ${{level: 'hard', bossMode: true, image: '2'}} 
      `(
      "should return expected object when entryKey is $entryKey",
      ({ entryKey, expected }) => {
        expect(getGameDataFromEntryKey(entryKey)).toEqual(expected);
      }
    );
  });
});
