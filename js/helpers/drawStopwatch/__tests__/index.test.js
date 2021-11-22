import { drawStopwatch } from '../';

describe('drawStopwatch() - null values', () => {
  it.each`
    durationMs   | expected
    ${null}      | ${'00:00'}
    ${undefined} | ${'00:00'}
    ${false}     | ${'00:00'}
    ${0}         | ${'00:00'}
  `(
    'should return \'$expected\' value when durationMs is $durationMs',
    ({ durationMs, expected }) => {
      expect(
        drawStopwatch(durationMs)
      ).toBe(expected);
    }
  );
});
describe('drawStopwatch() - up to a minute', () => {
  it.each`
    durationMs | expected
    ${1000}    | ${'00:01'}
    ${2000}    | ${'00:02'}
    ${2400}    | ${'00:02'}
    ${2500}    | ${'00:03'}
    ${2600}    | ${'00:03'}
    ${3000}    | ${'00:03'}
    ${9000}    | ${'00:09'}
    ${9250}    | ${'00:09'}
    ${9500}    | ${'00:10'}
    ${9800}    | ${'00:10'}
    ${9900}    | ${'00:10'}
    ${20000}   | ${'00:20'}
    ${30000}   | ${'00:30'}
    ${40000}   | ${'00:40'}
    ${50000}   | ${'00:50'}
    ${59000}   | ${'00:59'}
    ${59100}   | ${'00:59'}
    ${59400}   | ${'00:59'}
    ${59500}   | ${'01:00'}
    ${59700}   | ${'01:00'}
  `(
    'should return \'$expected\' value when durationMs is $durationMs',
    ({ durationMs, expected }) => {
      expect(
        drawStopwatch(durationMs)
      ).toBe(expected);
    }
  );
});
describe('drawStopwatch() - between one and ten minutes', () => {
  it.each`
    durationMs | expected
    ${60000}   | ${'01:00'}
    ${61000}   | ${'01:01'}
    ${62000}   | ${'01:02'}
    ${68000}   | ${'01:08'}
    ${68100}   | ${'01:08'}
    ${68500}   | ${'01:09'}
    ${69000}   | ${'01:09'}
    ${70000}   | ${'01:10'}
    ${90000}   | ${'01:30'}
    ${100000}  | ${'01:40'}
    ${110000}  | ${'01:50'}
    ${119000}  | ${'01:59'}
    ${120000}  | ${'02:00'}
    ${121000}  | ${'02:01'}
    ${179000}  | ${'02:59'}
    ${180000}  | ${'03:00'}
    ${240000}  | ${'04:00'}
    ${300000}  | ${'05:00'}
    ${360000}  | ${'06:00'}
    ${420000}  | ${'07:00'}
    ${480000}  | ${'08:00'}
    ${540000}  | ${'09:00'}
    ${599000}  | ${'09:59'}
  `(
    'should return \'$expected\' value when durationMs is $durationMs',
    ({ durationMs, expected }) => {
      expect(
        drawStopwatch(durationMs)
      ).toBe(expected);
    }
  );
});
describe('drawStopwatch() - between ten minutes and an hour', () => {
  it.each`
    durationMs | expected
    
    ${600000}  | ${'10:00'}
    ${601000}  | ${'10:01'}
    ${900000}  | ${'15:00'}
    ${1140000} | ${'19:00'}
    ${1199000} | ${'19:59'}
    ${1200000} | ${'20:00'}
    ${3590000} | ${'59:50'}
    ${3599000} | ${'59:59'}
  `(
    'should return \'$expected\' value when durationMs is $durationMs',
    ({ durationMs, expected }) => {
      expect(
        drawStopwatch(durationMs)
      ).toBe(expected);
    }
  );
});
describe('drawStopwatch()- over an hour', () => {
  it.each`
    durationMs | expected
    ${3600000} | ${'01:00:00'}
    ${7200000} | ${'02:00:00'}
    ${14400000} | ${'04:00:00'}
    ${28800000} | ${'08:00:00'}
  `(
    'should return \'$expected\' value when durationMs is $durationMs',
    ({ durationMs, expected }) => {
      expect(
        drawStopwatch(durationMs)
      ).toBe(expected);
    }
  );
});
describe('drawStopwatch()- over a day', () => {
  it.each`
    durationMs | expected
    ${86400000} | ${'01:00:00:00'}
    ${86401000} | ${'01:00:00:01'}
    ${86400000 + (3600 * 1000)} | ${'01:01:00:00'}
    ${86400000 + (3600 * 1000) + (60 * 1000)} | ${'01:01:01:00'}
    ${86400000 + (3600 * 1000) + (60 * 1000) + 1000} | ${'01:01:01:01'}
    ${(86400000 * 12) + (3600 * 1000) + (60 * 1000) + 1000} | ${'12:01:01:01'}
    ${(86400000 * 1000) + (3600 * 1000) + (60 * 1000) + 1000} | ${'1000:01:01:01'}
    ${86400000 * 3} | ${'03:00:00:00'}
  `(
    'should return \'$expected\' value when durationMs is $durationMs',
    ({ durationMs, expected }) => {
      expect(
        drawStopwatch(durationMs)
      ).toBe(expected);
    }
  );
});
