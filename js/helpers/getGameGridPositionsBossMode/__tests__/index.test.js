import { getGameGridPositionsBossMode } from '../';

describe('getGameGridPositionsBossMode()', () => {
  it.each`
    position   | bossMode | expected
    ${'000A'}  | ${false} | ${{scaleFactor: 1}}
    ${'000A'}  | ${true}  | ${{scaleFactor: 1}}
    ${'000B'}  | ${false} | ${{scaleFactor: 1}}
    ${'000B'}  | ${true}  | ${{scaleFactor: -1}}
    `("should return expected object when 'position' is: $position and 'bossMode' is $bossMode",
    ({ position, bossMode, expected }) => {
      expect(
        getGameGridPositionsBossMode(
          position, 
          bossMode
        )
      ).toEqual(expected);
    }
  );
});
