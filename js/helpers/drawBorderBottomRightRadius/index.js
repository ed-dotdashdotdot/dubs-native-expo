const drawBorderBottomRightRadius = (val, squareMatches, cornerRadius, bossMode) => {
  if (bossMode) {
    if (val.indexOf('B') !== -1) {
      return {
        borderTopLeftRadius: squareMatches ? cornerRadius * 2 : 0,
      }
    }
  }
  return {
    borderBottomRightRadius: squareMatches ? cornerRadius * 2 : 0,
  };
};

export default drawBorderBottomRightRadius;