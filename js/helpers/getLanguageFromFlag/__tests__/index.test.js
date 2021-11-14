import { getLanguageFromFlag } from '../';

describe('getLanguageFromFlag()', () => {
  it.each`
    flag         | expected
    ${'Cn'}      | ${'zh-CN'}
    ${'De'}      | ${'de-DE'}
    ${'Es'}      | ${'es-ES'}
    ${'Fr'}      | ${'fr-FR'}
    ${'It'}      | ${'it-IT'}
    ${'Jp'}      | ${'ja-JP'}
    ${'Pt'}      | ${'pt-PT'}
    ${'Ru'}      | ${'ru-RU'}
    ${''}        | ${'en-GB'}
    ${null}      | ${'en-GB'}
    ${undefined} | ${'en-GB'}
    `("should return the expected value when 'flag' is: $flag",
    ({ flag, expected }) => {
      expect(
        getLanguageFromFlag(flag)
      ).toEqual(
        expected
      );
    }
  );
});
