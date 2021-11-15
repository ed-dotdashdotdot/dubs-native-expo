import { getFlagFromLanguage } from '../';

describe('getFlagFromLanguage()', () => {
  it.each`
    language     | expected
    ${'zh-CN'}   | ${'Cn'}
    ${'de-DE'}   | ${'De'}
    ${'es-ES'}   | ${'Es'}
    ${'fr-FR'}   | ${'Fr'}
    ${'it-IT'}   | ${'It'}
    ${'ja-JP'}   | ${'Jp'}
    ${'pt-PT'}   | ${'Pt'}
    ${'ru-RU'}   | ${'Ru'}
    ${'en-EN'}   | ${'En'}
    ${undefined} | ${'En'}
    `(
    "should return '$expected' when 'language' is '$language'",
    ({ language, expected }) => {
      expect(
        getFlagFromLanguage(language)
      ).toBe(expected);
    }
  );
});
