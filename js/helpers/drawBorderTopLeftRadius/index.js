const drawBorderTopLeftRadius = (val, squareMatches, cornerRadius, bossMode) => {
  if (bossMode) {
    if (val.indexOf('B') !== -1) {
      return {
        borderBottomRightRadius: squareMatches ? cornerRadius : 0,
      }
    }
  }
  return {
    borderTopLeftRadius: squareMatches ? cornerRadius : 0,
  };
};

export default drawBorderTopLeftRadius;