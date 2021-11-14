import { sanitiseDeviceLocale } from '.';

describe('sanitiseDeviceLocale()', () => {
  it.each`
    deviceLocale | expected
    ${'zh-CN'}   | ${{flag: "CN",language: "zh-CN"}}
    ${'de-DE'}   | ${{flag: "DE",language: "de-DE"}}
    ${'es-ES'}   | ${{flag: "ES",language: "es-ES"}}
    ${'fr-FR'}   | ${{flag: "FR",language: "fr-FR"}}
    ${'it-IT'}   | ${{flag: "IT",language: "it-IT"}}
    ${'ja-JP'}   | ${{flag: "JP",language: "ja-JP"}}
    ${'pt-PT'}   | ${{flag: "PT",language: "pt-PT"}}
    ${'ru-RU'}   | ${{flag: "RU",language: "ru-RU"}}
    ${'en-GB'}   | ${{flag: "EN",language: "en-GB"}}
    ${'en-US'}   | ${{flag: "US",language: "en-GB"}}
    ${null}      | ${{flag: "EN",language: "en-GB"}}
    ${undefined} | ${{flag: "EN",language: "en-GB"}}
    `("should return the expected object when 'deviceLocale' is: $deviceLocale",
    ({ deviceLocale, expected }) => {
      expect(
        sanitiseDeviceLocale(deviceLocale)
      ).toStrictEqual(expected);
    }
  );
});
