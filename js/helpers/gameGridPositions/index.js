const gameGridPositions = (position, level, portrait, imgWidth, imgHeight) => {
  if (level === 'easy') {
    if (portrait) {
      switch (position) {
        case 1: return {
          'row': 0,
          'x': (imgWidth * 1) * -1,
          'y': 0,
        };
        case 2: return {
          'row': 0,
          'x': (imgWidth * 2) * -1,
          'y': 0,
        };
        case 3: return {
          'row': 0,
          'x': (imgWidth * 3) * -1,
          'y': 0,
        };
        case 4: return {
          'row': 0,
          'x': (imgWidth * 0) * -1,
          'y': (imgHeight * 1) * -1,
        };
        case 5: return {
          'row': 0,
          'x': (imgWidth * 1) * -1,
          'y': (imgHeight * 1) * -1,
        };
        case 6: return {
          'row': 0,
          'x': (imgWidth * 2) * -1,
          'y': (imgHeight * 1) * -1,
        };
        case 7: return {
          'row': 0,
          'x': (imgWidth * 3) * -1,
          'y': (imgHeight * 1) * -1,
        };
        case 8: return {
          'row': 0,
          'x': (imgWidth * 0) * -1,
          'y': (imgHeight * 2) * -1,
        };
        case 9: return {
          'row': 0,
          'x': (imgWidth * 1) * -1,
          'y': (imgHeight * 2) * -1,
        };
        case 10: return {
          'row': 0,
          'x': (imgWidth * 2) * -1,
          'y': (imgHeight * 2) * -1,
        };
        case 11: return {
          'row': 0,
          'x': (imgWidth * 3) * -1,
          'y': (imgHeight * 2) * -1,
        };
        case 12: return {
          'row': 0,
          'x': (imgWidth * 0) * -1,
          'y': (imgHeight * 3) * -1,
        };
        case 13: return {
          'row': 0,
          'x': (imgWidth * 1) * -1,
          'y': (imgHeight * 3) * -1,
        };
        case 14: return {
          'row': 0,
          'x': (imgWidth * 2) * -1,
          'y': (imgHeight * 3) * -1,
        };
        case 15: return {
          'row': 0,
          'x': (imgWidth * 3) * -1,
          'y': (imgHeight * 3) * -1,
        };
        case 16: return {
          'row': 0,
          'x': (imgWidth * 0) * -1,
          'y': (imgHeight * 4) * -1,
        };
        case 17: return {
          'row': 0,
          'x': (imgWidth * 1) * -1,
          'y': (imgHeight * 4) * -1,
        };
        case 18: return {
          'row': 0,
          'x': (imgWidth * 2) * -1,
          'y': (imgHeight * 4) * -1,
        };
        case 19: return {
          'row': 0,
          'x': (imgWidth * 3) * -1,
          'y': (imgHeight * 4) * -1,
        };
        case 20: return {
          'row': 0,
          'x': (imgWidth * 0) * -1,
          'y': (imgHeight * 5) * -1,
        };
        case 21: return {
          'row': 0,
          'x': (imgWidth * 1) * -1,
          'y': (imgHeight * 5) * -1,
        };
        case 22: return {
          'row': 0,
          'x': (imgWidth * 2) * -1,
          'y': (imgHeight * 5) * -1,
        };
        case 23: return {
          'row': 0,
          'x': (imgWidth * 3) * -1,
          'y': (imgHeight * 5) * -1,
        };
        default: return {
          'row': 0,
          'x': 0,
          'y': 0,
        };
      };
    }
    imgHeight = imgWidth;
    switch (position) {
      case 1: return {
        'row': 0,
        'x': (imgHeight * 1) * -1,
        'y': 0,
      };
      case 2: return {
        'row': 0,
        'x': (imgHeight * 2) * -1,
        'y': 0,
      };
      case 3: return {
        'row': 0,
        'x': (imgHeight * 3) * -1,
        'y': 0,
      };
      case 4: return {
        'row': 0,
        'x': (imgHeight * 4) * -1,
        'y': 0,
      };
      case 5: return {
        'row': 0,
        'x': (imgHeight * 5) * -1,
        'y': 0,
      };
      case 6: return {
        'row': 0,
        'x': (imgHeight * 0) * -1,
        'y': (imgWidth * 1) * -1,
      };
      case 7: return {
        'row': 0,
        'x': (imgHeight * 1) * -1,
        'y': (imgWidth * 1) * -1,
      };
      case 8: return {
        'row': 0,
        'x': (imgHeight * 2) * -1,
        'y': (imgWidth * 1) * -1,
      };
      case 9: return {
        'row': 0,
        'x': (imgHeight * 3) * -1,
        'y': (imgWidth * 1) * -1,
      };
      case 10: return {
        'row': 0,
        'x': (imgHeight * 4) * -1,
        'y': (imgWidth * 1) * -1,
      };
      case 11: return {
        'row': 0,
        'x': (imgHeight * 5) * -1,
        'y': (imgWidth * 1) * -1,
      };
      case 12: return {
        'row': 0,
        'x': (imgHeight * 0) * -1,
        'y': (imgWidth * 2) * -1,
      };
      case 13: return {
        'row': 0,
        'x': (imgHeight * 1) * -1,
        'y': (imgWidth * 2) * -1,
      };
      case 14: return {
        'row': 0,
        'x': (imgHeight * 2) * -1,
        'y': (imgWidth * 2) * -1,
      };
      case 15: return {
        'row': 0,
        'x': (imgHeight * 3) * -1,
        'y': (imgWidth * 2) * -1,
      };
      case 16: return {
        'row': 0,
        'x': (imgHeight * 4) * -1,
        'y': (imgWidth * 2) * -1,
      };
      case 17: return {
        'row': 0,
        'x': (imgHeight * 5) * -1,
        'y': (imgWidth * 2) * -1,
      };
      case 18: return {
        'row': 0,
        'x': (imgHeight * 0) * -1,
        'y': (imgWidth * 3) * -1,
      };
      case 19: return {
        'row': 0,
        'x': (imgHeight * 1) * -1,
        'y': (imgWidth * 3) * -1,
      };
      case 20: return {
        'row': 0,
        'x': (imgHeight * 2) * -1,
        'y': (imgWidth * 3) * -1,
      };
      case 21: return {
        'row': 0,
        'x': (imgHeight * 3) * -1,
        'y': (imgWidth * 3) * -1,
      };
      case 22: return {
        'row': 0,
        'x': (imgHeight * 4) * -1,
        'y': (imgWidth * 3) * -1,
      };
      case 23: return {
        'row': 0,
        'x': (imgHeight * 5) * -1,
        'y': (imgWidth * 3) * -1,
      };
      default: return {
        'row': 0,
        'x': 0,
        'y': 0,
      };
    };
  } else if (level === 'normal') {
    
  } else if (level === 'hard') {
    
  }
};

export default gameGridPositions;
