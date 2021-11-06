const drawBorderTopRightRadius = (val, squareMatches, cornerRadius, bossMode) => {
  if (bossMode) {
    if (val.indexOf('B') !== -1) {
      return {
        borderBottomLeftRadius: squareMatches ? cornerRadius : 0,
      }
    }
  }
  return {
    borderTopRightRadius: squareMatches ? cornerRadius : 0,
  };
};

export default drawBorderTopRightRadius;