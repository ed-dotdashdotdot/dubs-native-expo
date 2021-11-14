export const getCorners = (level='easy', portrait=false) => {
  if (level === 'easy') {
    if (portrait) {
      return {
        bottomLeft: 20,
        topRight: 3,
      };
    }
    return {
      bottomLeft: 18,
      topRight: 5,
    };
  } else if (level === 'normal') {
    if (portrait) {
      return {
        bottomLeft: 42,
        topRight: 5,
      };
    }
    return {
      bottomLeft: 40,
      topRight: 7,
    };
  } else if (level === 'hard') {
    if (portrait) {
      return {
        bottomLeft: 88,
        topRight: 7,
      };
    }
    return {
      bottomLeft: 84,
      topRight: 11,
    };
  }
};
