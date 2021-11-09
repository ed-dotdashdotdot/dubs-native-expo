export const gameRows = (level, portrait) => {
  if (level === 'easy') {
    if (portrait) {
      return {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 1,
        '5': 1,
        '6': 1,
        '7': 1,
        '8': 2,
        '9': 2,
        '10': 2,
        '11': 2,
        '12': 3,
        '13': 3,
        '14': 3,
        '15': 3,
        '16': 4,
        '17': 4,
        '16': 4,
        '19': 4,
        '20': 5,
        '21': 5,
        '22': 5,
        '23': 5,
      };
    }
    return {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 1,
      '7': 1,
      '8': 1,
      '9': 1,
      '10': 1,
      '11': 1,
      '12': 2,
      '13': 2,
      '14': 2,
      '15': 2,
      '16': 2,
      '17': 2,
      '16': 3,
      '19': 3,
      '20': 3,
      '21': 3,
      '22': 3,
      '23': 3,
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
