import { getBackButtonText } from '../';

describe('getBackButtonText()', () => {
  it.each`
    section                | expected
    ${'app-info'}          | ${'back'}
    ${'app-settings'}      | ${'back'}
    ${'choose-image'}      | ${'back'}
    ${'image-detail'}      | ${'back'}
    ${'language-select'}   | ${'back'}}
    ${'what-is-boss-mode'} | ${'back'}
    ${'game-over'}         | ${'backToHome'}
    ${'game-paused'}       | ${'backToHome'}
    ${'game-ready'}        | ${'backToHome'}
    ${'ANYTHING-ELSE'}     | ${'backToHome'}
    ${undefined}           | ${'backToHome'}
    `(
    "should return $expected when 'section' is $section",
    ({ section, expected }) => {
      expect(
        getBackButtonText(section)
      ).toBe(expected);
    }
  );
});
