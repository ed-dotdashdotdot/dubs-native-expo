import { drawStopwatch } from '../';

describe.only('drawStopwatch() - null values', () => {
  it.each`
    duration     | expected
    ${null}      | ${'00:00'}
    ${undefined} | ${'00:00'}
    ${false}     | ${'00:00'}
    ${0}         | ${'00:00'}
  `(
    'should return \'$expected\' value when duration is $duration',
    ({ duration, expected }) => {
      expect(
        drawStopwatch(duration)
      ).toBe(expected);
    }
  );
});
describe.only('drawStopwatch() - up to a minute', () => {
  it.each`
    duration | expected
    ${1}     | ${'00:01'}
    ${2}     | ${'00:02'}
    ${2.4}   | ${'00:02'}
    ${2.5}   | ${'00:02'}
    ${2.6}   | ${'00:02'}
    ${3}     | ${'00:03'}
    ${9}     | ${'00:09'}
    ${9.25}  | ${'00:09'}
    ${9.5}   | ${'00:09'}
    ${9.8}   | ${'00:09'}
    ${9.9}   | ${'00:09'}
    ${20}    | ${'00:20'}
    ${30}    | ${'00:30'}
    ${40}    | ${'00:40'}
    ${50}    | ${'00:50'}
    ${59}    | ${'00:59'}
    ${59.1}  | ${'00:59'}
    ${59.4}  | ${'00:59'}
    ${59.5}  | ${'00:59'}
    ${59.7}  | ${'00:59'}
  `(
    'should return \'$expected\' value when duration is $duration',
    ({ duration, expected }) => {
      expect(
        drawStopwatch(duration)
      ).toBe(expected);
    }
  );
});
describe.only('drawStopwatch() - between one and ten minutes', () => {
  it.each`
    duration | expected
    ${60}    | ${'01:00'}
    ${61}    | ${'01:01'}
    ${62}    | ${'01:02'}
    ${68}    | ${'01:08'}
    ${68.1}  | ${'01:08'}
    ${68.5}  | ${'01:08'}
    ${69}    | ${'01:09'}
    ${70}    | ${'01:10'}
    ${90}    | ${'01:30'}
    ${100}   | ${'01:40'}
    ${110}   | ${'01:50'}
    ${120}   | ${'02:00'}
    ${121}   | ${'02:01'}
    ${179}   | ${'02:59'}
    ${180}   | ${'03:00'}
    ${240}   | ${'04:00'}
    ${300}   | ${'05:00'}
    ${360}   | ${'06:00'}
    ${420}   | ${'07:00'}
    ${480}   | ${'08:00'}
    ${540}   | ${'09:00'}
    ${599}   | ${'09:59'}
  `(
    'should return \'$expected\' value when duration is $duration',
    ({ duration, expected }) => {
      expect(
        drawStopwatch(duration)
      ).toBe(expected);
    }
  );
});
describe.only('drawStopwatch() - between ten minutes and an hour', () => {
  it.each`
    duration | expected
    ${600}   | ${'10:00'}
    ${601}   | ${'10:01'}
    ${900}   | ${'15:00'}
    ${1140}  | ${'19:00'}
    ${1199}  | ${'19:59'}
    ${1200}  | ${'20:00'}
    ${3590}  | ${'59:50'}
    ${3599}  | ${'59:59'}
  `(
    'should return \'$expected\' value when duration is $duration',
    ({ duration, expected }) => {
      expect(
        drawStopwatch(duration)
      ).toBe(expected);
    }
  );
});
describe.only('drawStopwatch()- over an hour', () => {
  it.each`
    duration | expected
    ${3600}  | ${'01:00:00'}
    ${7200}  | ${'02:00:00'}
    ${14400} | ${'04:00:00'}
    ${28800} | ${'08:00:00'}
  `(
    'should return \'$expected\' value when duration is $duration',
    ({ duration, expected }) => {
      expect(
        drawStopwatch(duration)
      ).toBe(expected);
    }
  );
});
describe.only('drawStopwatch()- over a day', () => {
  it.each`
    duration                          | expected
    ${86400}                          | ${'01:00:00:00'}
    ${86401}                          | ${'01:00:00:01'}
    ${86400 + 3600}                   | ${'01:01:00:00'}
    ${86400 + 3600 + 60}              | ${'01:01:01:00'}
    ${86400 + 3600 + 60 + 1}          | ${'01:01:01:01'}
    ${(86400 * 12) + 3600 + 60 + 1}   | ${'12:01:01:01'}
    ${(86400 * 1000) + 3600 + 60 + 1} | ${'1000:01:01:01'}
    ${86400 * 3}                      | ${'03:00:00:00'}
  `(
    'should return \'$expected\' value when duration is $duration',
    ({ duration, expected }) => {
      expect(
        drawStopwatch(duration)
      ).toBe(expected);
    }
  );
});
