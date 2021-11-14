import { generateRandomNumber } from '../';

describe('generateRandomNumber', () => {
  it.each`
    random    | min          | max          | output
    ${1}      | ${0}         | ${1}         | ${1}
    ${2}      | ${0}         | ${1}         | ${2}
    ${0.1}    | ${0}         | ${1}         | ${0.1}
    ${0.55}   | ${0}         | ${1}         | ${0.55}
    ${0.999}  | ${0}         | ${1}         | ${0.999}
    ${0.999}  | ${2}         | ${3}         | ${2.999}
    ${0.999}  | ${undefined} | ${undefined} | ${0.999}
    `('should return $output when random is $random, min is $min and max is $max', (
    {
      random,
      min,
      max,
      output
    }
  ) => {
    expect(generateRandomNumber(random, min, max)).toBe(output);
  });
});
