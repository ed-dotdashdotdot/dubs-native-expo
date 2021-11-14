import { isPortrait } from '.';

describe('isPortrait() - when height greater than width', () => {
  it.each`
    height | width | expected
    ${100} | ${99} | ${true}
    ${100} | ${50} | ${true}
    ${100} | ${0}  | ${true}
    `("should return the expected value when 'height' is: $height and 'width' is $width",
    ({ height, width, expected }) => {
      expect(
        isPortrait(height, width)
      ).toEqual(expected);
    }
  );
});
describe('isPortrait() - when height less than than width', () => {
  it.each`
    height | width  | expected
    ${99}  | ${100} | ${false}
    ${50}  | ${100} | ${false}
    ${0}   | ${100} | ${false}
    `("should return the expected value when 'height' is: $height and 'width' is $width",
    ({ height, width, expected }) => {
      expect(
        isPortrait(height, width)
      ).toEqual(expected);
    }
  );
});
describe('isPortrait() - when height is the same as width', () => {
  it.each`
    height | width  | expected
    ${100} | ${100} | ${true}
    ${50}  | ${50}  | ${true}
    ${0}   | ${0}   | ${true}
    `("should return the expected value when 'height' is: $height and 'width' is $width",
    ({ height, width, expected }) => {
      expect(
        isPortrait(height, width)
      ).toEqual(expected);
    }
  );
});
describe('isPortrait() - when height is falsy', () => {
  it.each`
    height       | width  | expected
    ${null}      | ${100} | ${false}
    ${undefined} | ${100} | ${false}
    `("should return the expected value when 'height' is: $height and 'width' is $width",
    ({ height, width, expected }) => {
      expect(
        isPortrait(height, width)
      ).toEqual(expected);
    }
  );
});
describe('isPortrait() - when width is falsy', () => {
  it.each`
    height | width        | expected
    ${100} | ${null}      | ${true}
    ${100} | ${undefined} | ${true}
    `("should return the expected value when 'height' is: $height and 'width' is $width",
    ({ height, width, expected }) => {
      expect(
        isPortrait(height, width)
      ).toEqual(expected);
    }
  );
});
describe('isPortrait() - when both height and width is falsy', () => {
  it.each`
    height       | width        | expected
    ${null}      | ${null}      | ${true}
    ${undefined} | ${undefined} | ${true}
    `("should return the expected value when 'height' is: $height and 'width' is $width",
    ({ height, width, expected }) => {
      expect(
        isPortrait(height, width)
      ).toEqual(expected);
    }
  );
});
