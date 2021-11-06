const drawGameBoardBorderRadius = (position, val, squareMatches, cornerRadius, bossMode) => {
  if (position === 'bottomLeft') {
    if (bossMode) {
      if (val.indexOf('B') !== -1) {
        return {
          borderTopRightRadius: squareMatches ? cornerRadius : 0,
        }
      }
    }
    return {
      borderBottomLeftRadius: squareMatches ? cornerRadius : 0,
    };
  }
  if (position === 'bottomRight') {
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
  }
  if (position === 'topLeft') {
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
  }
  if (position === 'topRight') {
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
  }
};

export default drawGameBoardBorderRadius;