import { getGameSpecs } from '../';

describe('getGameSpecs()', () => {
  it.each`
    level        | isPortrait   | gameWidth | gameHeight | expected
    ${'easy'}    | ${false}     | ${1000}   | ${1000}    | ${{cols: 6, height: 1000, rows: 4, total: 24, width: 1000}}
    ${'easy'}    | ${true}      | ${1000}   | ${1000}    | ${{cols: 4, height: 1000, rows: 6, total: 24, width: 1000}}
    ${'normal'}  | ${false}     | ${1000}   | ${1000}    | ${{cols: 8, height: 1000, rows: 6, total: 48, width: 1000}}
    ${'normal'}  | ${true}      | ${1000}   | ${1000}    | ${{cols: 6, height: 1000, rows: 8, total: 48, width: 1000}}
    ${'hard'}    | ${false}     | ${1000}   | ${1000}    | ${{cols: 12, height: 1000, rows: 8, total: 96, width: 1000}}
    ${'hard'}    | ${true}      | ${1000}   | ${1000}    | ${{cols: 8, height: 1000, rows: 12, total: 96, width: 1000}}
    ${undefined} | ${undefined} | ${1000}   | ${1000}    | ${{cols: 6, height: 1000, rows: 4, total: 24, width: 1000}}
    `(
    "should return expected object when 'level' is $level and 'isPortrait' is $isPortrait",
    ({ level, isPortrait, gameWidth, gameHeight, expected }) => {
      expect(
        getGameSpecs(
          level, 
          isPortrait, 
          gameWidth, 
          gameHeight
        )
      ).toEqual(expected);
    }
  );
});
