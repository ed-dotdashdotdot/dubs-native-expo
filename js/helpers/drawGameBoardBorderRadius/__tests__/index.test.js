import { drawGameBoardBorderRadius } from '../';

describe('drawGameBoardBorderRadius()', () => {
  it.each`
    position         | val       | squareMatches | cornerRadius | bossMode | expected
    ${'bottomLeft'}  | ${'000A'} | ${false}      | ${10}        | ${false} | ${{borderBottomLeftRadius: 0}}
    ${'bottomLeft'}  | ${'000B'} | ${false}      | ${10}        | ${false} | ${{borderBottomLeftRadius: 0}}
    ${'bottomLeft'}  | ${'000A'} | ${true}       | ${10}        | ${false} | ${{borderBottomLeftRadius: 10}}
    ${'bottomLeft'}  | ${'000B'} | ${true}       | ${10}        | ${false} | ${{borderBottomLeftRadius: 10}}
    ${'bottomLeft'}  | ${'000A'} | ${false}      | ${10}        | ${true}  | ${{borderBottomLeftRadius: 0}}
    ${'bottomLeft'}  | ${'000B'} | ${false}      | ${10}        | ${true}  | ${{borderTopRightRadius: 0}}
    ${'bottomLeft'}  | ${'000A'} | ${true}       | ${10}        | ${true}  | ${{borderBottomLeftRadius: 10}}
    ${'bottomLeft'}  | ${'000B'} | ${true}       | ${10}        | ${true}  | ${{borderTopRightRadius: 10}}
    ${'bottomRight'} | ${'000A'} | ${false}      | ${10}        | ${false} | ${{borderBottomRightRadius: 0}}
    ${'bottomRight'} | ${'000B'} | ${false}      | ${10}        | ${false} | ${{borderBottomRightRadius: 0}}
    ${'bottomRight'} | ${'000A'} | ${true}       | ${10}        | ${false} | ${{borderBottomRightRadius: 10}}
    ${'bottomRight'} | ${'000B'} | ${true}       | ${10}        | ${false} | ${{borderBottomRightRadius: 10}}
    ${'bottomRight'} | ${'000A'} | ${false}      | ${10}        | ${true}  | ${{borderBottomRightRadius: 0}}
    ${'bottomRight'} | ${'000B'} | ${false}      | ${10}        | ${true}  | ${{borderTopLeftRadius: 0}}
    ${'bottomRight'} | ${'000A'} | ${true}       | ${10}        | ${true}  | ${{borderBottomRightRadius: 10}}
    ${'bottomRight'} | ${'000B'} | ${true}       | ${10}        | ${true}  | ${{borderTopLeftRadius: 10}}
    ${'topLeft'}     | ${'000A'} | ${false}      | ${10}        | ${false} | ${{borderTopLeftRadius: 0}}
    ${'topLeft'}     | ${'000B'} | ${false}      | ${10}        | ${false} | ${{borderTopLeftRadius: 0}}
    ${'topLeft'}     | ${'000A'} | ${true}       | ${10}        | ${false} | ${{borderTopLeftRadius: 10}}
    ${'topLeft'}     | ${'000B'} | ${true}       | ${10}        | ${false} | ${{borderTopLeftRadius: 10}}
    ${'topLeft'}     | ${'000A'} | ${false}      | ${10}        | ${true}  | ${{borderTopLeftRadius: 0}}
    ${'topLeft'}     | ${'000B'} | ${false}      | ${10}        | ${true}  | ${{borderBottomRightRadius: 0}}
    ${'topLeft'}     | ${'000A'} | ${true}       | ${10}        | ${true}  | ${{borderTopLeftRadius: 10}}
    ${'topLeft'}     | ${'000B'} | ${true}       | ${10}        | ${true}  | ${{borderBottomRightRadius: 10}}
    ${'topRight'}    | ${'000A'} | ${false}      | ${10}        | ${false} | ${{borderTopRightRadius: 0}}
    ${'topRight'}    | ${'000B'} | ${false}      | ${10}        | ${false} | ${{borderTopRightRadius: 0}}
    ${'topRight'}    | ${'000A'} | ${true}       | ${10}        | ${false} | ${{borderTopRightRadius: 10}}
    ${'topRight'}    | ${'000B'} | ${true}       | ${10}        | ${false} | ${{borderTopRightRadius: 10}}
    ${'topRight'}    | ${'000A'} | ${false}      | ${10}        | ${true}  | ${{borderTopRightRadius: 0}}
    ${'topRight'}    | ${'000B'} | ${false}      | ${10}        | ${true}  | ${{borderBottomLeftRadius: 0}}
    ${'topRight'}    | ${'000A'} | ${true}       | ${10}        | ${true}  | ${{borderTopRightRadius: 10}}
    ${'topRight'}    | ${'000B'} | ${true}       | ${10}        | ${true}  | ${{borderBottomLeftRadius: 10}}
  `(
    "should return '$expected'",
    ({ position, val, squareMatches, cornerRadius, bossMode, expected }) => {
      expect(
        drawGameBoardBorderRadius(
          position,
          val,
          squareMatches,
          cornerRadius,
          bossMode
        )
      ).toEqual(expected);
    }
  );
});
