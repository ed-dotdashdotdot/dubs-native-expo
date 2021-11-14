import { getDurationLanguage } from '.';

describe('getDurationLanguage()', () => {
  it.each`
    lang       | expected
    ${'zh-CN'} | ${'zh_CN'}}
    ${'de-DE'} | ${'de'}}
    ${'en-GB'} | ${'en'}}
    ${'es-ES'} | ${'es'}}
    ${'fr-FR'} | ${'fr'}}
    ${'it-IT'} | ${'it'}}
    ${'ja-JP'} | ${'ja'}}
    ${'pt-PT'} | ${'pt'}}
    ${'ru-RU'} | ${'ru'}}
    `(
    "should return '$expected' value when 'lang' is $lang",
    ({ lang, expected }) => {
      expect(
        getDurationLanguage(lang)
      ).toEqual(expected);
    }
  );
});
