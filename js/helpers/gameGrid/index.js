export const gameGrid = (level, height, width, portrait) => {
  if (level === 'easy') {
    if (portrait) {
      return {
        height: height / 6,
        width: width / 4,
      }  
    }
    return {
      height: height / 4,
      width: width / 6,
    }
  } else if (level === 'normal') {
    if (portrait) {
      return {
        height: height / 8,
        width: width / 6,
      }  
    }
    return {
      height: height / 6,
      width: width / 8,
    }
  } else if (level === 'hard') {
    if (portrait) {
      return {
        height: height / 12,
        width: width / 8,
      }  
    }
    return {
      height: height / 8,
      width: width / 12,
    }
  }
};
