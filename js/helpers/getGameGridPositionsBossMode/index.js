export const getGameGridPositionsBossMode = (position, bossMode) => {
  if (bossMode) {
    if (position.indexOf('B') !== -1) {
      return { scaleFactor: -1};
    }
  }
  return { scaleFactor: 1 };
};
