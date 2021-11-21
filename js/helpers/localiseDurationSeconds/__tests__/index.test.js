import { localiseDurationSeconds } from '../';

describe('localiseDurationSeconds()', () => {
  it.each`
    seconds    | lang                 | expected
    ${'12.34'} | ${'zh-CN'}           | ${"12.34"}
    ${'12.34'} | ${'de-DE'}           | ${"12,34"}
    ${'12.34'} | ${'en-GB'}           | ${"12.34"}
    ${'12.34'} | ${'es-ES'}           | ${"12,34"}
    ${'12.34'} | ${'fr-FR'}           | ${"12,34"}
    ${'12.34'} | ${'it-IT'}           | ${"12,34"}
    ${'12.34'} | ${'ja-JP'}           | ${"12.34"}
    ${'12.34'} | ${'pt-PT'}           | ${"12,34"}
    ${'12.34'} | ${'ru-RU'}           | ${"12,34"}
    ${'12.34'} | ${'ANY-OTHER-VALUE'} | ${"12.34"}
    `(
    "should return $expected value when 'seconds' is $seconds and 'lang' is $lang",
    ({ seconds, lang, expected }) => {
      expect(
        localiseDurationSeconds(
          seconds,
          lang
        )
      ).toBe(expected);
    }
  );
});
