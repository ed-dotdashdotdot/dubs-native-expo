/* eslint-disable no-undef */
import timeDifference from '.';

describe('timeDifference()', () => {
  it.each`
    then     | now      | expected
    ${0}  | ${1000}  | ${1000}
    ${1000}  | ${3000}  | ${2000}
    ${3000}  | ${4000}  | ${1000}
    ${10000} | ${25000} | ${15000}
    ${10000} | ${25400} | ${15000}
    ${10000} | ${25500} | ${15000}
    `("should return expected value when 'then' is: $then and 'now' is $now",
    ({ then, now, expected }) => {
      expect(timeDifference(then, now)).toEqual(expected);
    }
  );
});
