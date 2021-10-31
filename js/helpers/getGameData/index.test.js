/* eslint-disable no-undef */
import getGameData from '.';

describe('getGameData()', () => {
  describe('when level is `easy`', () => {
    it('should return an array with a length of 24', () => {
      expect(getGameData('easy').length).toBe(24);
    });
  });
  describe('when level is `normal`', () => {
    it('should return an array with a length of 48', () => {
      expect(getGameData('normal').length).toBe(48);
    });
  });
  describe('when level is `hard`', () => {
    it('should return an array with a length of 96', () => {
      expect(getGameData('hard').length).toBe(96);
    });
  });
});
