import { getCorners } from '.';

describe('getCorners()', () => {
  it.each`
    level        | portrait     | expected
    ${'easy'}    | ${false}     | ${{bottomLeft: 18, topRight: 5}}
    ${'easy'}    | ${true}      | ${{bottomLeft: 20, topRight: 3}}
    ${'normal'}  | ${false}     | ${{bottomLeft: 40, topRight: 7}}
    ${'normal'}  | ${true}      | ${{bottomLeft: 42, topRight: 5}}
    ${'hard'}    | ${false}     | ${{bottomLeft: 84, topRight: 11}}
    ${'hard'}    | ${true}      | ${{bottomLeft: 88, topRight: 7}}
    ${undefined} | ${undefined} | ${{bottomLeft: 18, topRight: 5}}
    `(
    "should return expected object when 'level' is $level and 'isPortrait' is $isPortrait",
    ({ level, portrait, expected }) => {
      expect(
        getCorners(
          level, 
          portrait
        )
      ).toEqual(expected);
    }
  );
});
