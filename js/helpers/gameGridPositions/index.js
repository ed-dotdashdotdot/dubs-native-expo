const gameGridPositions = (position, level, portrait, gameWidth, gameHeight, rows, cols) => {
  
  if (level === 'easy') {
    if (portrait) {
      switch (position) {
        case 1: return {
          col: 1,
          row: 0,
          x: ((gameWidth / cols) * 1) * -1,  // * col
          y: ((gameHeight / rows) * 0) * -1, // * row
        };
        case 2: return {
          col: 2,
          row: 0,
          x: ((gameWidth / cols) * 2) * -1,  // * col
          y: ((gameHeight / rows) * 0) * -1, // * row
        };
        case 3: return {
          col: 3,
          row: 0,
          x: ((gameWidth / cols) * 3) * -1,  // * col
          y: ((gameHeight / rows) * 0) * -1, // * row
        };
        case 4: return {
          col: 0,
          row: 1,
          x: ((gameWidth / cols) * 0) * -1,  // * col
          y: ((gameHeight / rows) * 1) * -1, // * row
        };
        case 5: return {
          col: 1,
          row: 1,
          x: ((gameWidth / cols) * 1) * -1,  // * col
          y: ((gameHeight / rows) * 1) * -1, // * row
        };
        case 6: return {
          col: 2,
          row: 1,
          x: ((gameWidth / cols) * 2) * -1,  // * col
          y: ((gameHeight / rows) * 1) * -1, // * row
        };
        case 7: return {
          col: 3,
          row: 1,
          x: ((gameWidth / cols) * 3) * -1,  // * col
          y: ((gameHeight / rows) * 1) * -1, // * row
        };
        case 8: return {
          col: 0,
          row: 2,
          x: ((gameWidth / cols) * 0) * -1,  // * col
          y: ((gameHeight / rows) * 2) * -1, // * row
        };
        case 9: return {
          col: 1,
          row: 2,
          x: ((gameWidth / cols) * 1) * -1,  // * col
          y: ((gameHeight / rows) * 2) * -1, // * row
        };
        case 10: return {
          col: 2,
          row: 2,
          x: ((gameWidth / cols) * 2) * -1,  // * col
          y: ((gameHeight / rows) * 2) * -1, // * row
        };
        case 11: return {
          col: 3,
          row: 2,
          x: ((gameWidth / cols) * 3) * -1,  // * col
          y: ((gameHeight / rows) * 2) * -1, // * row
        };
        case 12: return {
          col: 0,
          row: 3,
          x: ((gameWidth / cols) * 0) * -1,  // * col
          y: ((gameHeight / rows) * 3) * -1, // * row
        };
        case 13: return {
          col: 1,
          row: 3,
          x: ((gameWidth / cols) * 1) * -1,  // * col
          y: ((gameHeight / rows) * 3) * -1, // * row
        };
        case 14: return {
          col: 2,
          row: 3,
          x: ((gameWidth / cols) * 2) * -1,  // * col
          y: ((gameHeight / rows) * 3) * -1, // * row
        };
        case 15: return {
          col: 3,
          row: 3,
          x: ((gameWidth / cols) * 3) * -1,  // * col
          y: ((gameHeight / rows) * 3) * -1, // * row
        };
        case 16: return {
          col: 0,
          row: 4,
          x: ((gameWidth / cols) * 0) * -1,  // * col
          y: ((gameHeight / rows) * 4) * -1, // * row
        };
        case 17: return {
          col: 1,
          row: 4,
          x: ((gameWidth / cols) * 1) * -1,  // * col
          y: ((gameHeight / rows) * 4) * -1, // * row
        };
        case 18: return {
          col: 2,
          row: 4,
          x: ((gameWidth / cols) * 2) * -1,  // * col
          y: ((gameHeight / rows) * 4) * -1, // * row
        };
        case 19: return {
          col: 3,
          row: 4,
          x: ((gameWidth / cols) * 3) * -1,  // * col
          y: ((gameHeight / rows) * 4) * -1, // * row
        };
        case 20: return {
          col: 0,
          row: 5,
          x: ((gameWidth / cols) * 0) * -1,  // * col
          y: ((gameHeight / rows) * 5) * -1, // * row
        };
        case 21: return {
          col: 1,
          row: 5,
          x: ((gameWidth / cols) * 1) * -1,  // * col
          y: ((gameHeight / rows) * 5) * -1, // * row
        };
        case 22: return {
          col: 2,
          row: 5,
          x: ((gameWidth / cols) * 2) * -1,  // * col
          y: ((gameHeight / rows) * 5) * -1, // * row
        };
        case 23: return {
          col: 3,
          row: 5,
          x: ((gameWidth / cols) * 3) * -1,  // * col
          y: ((gameHeight / rows) * 5) * -1, // * row
        };
        default: return {
          col: 0,
          row: 0,
          x: 0,
          y: 0,
        };
      };
    }
    switch (position) {
      case 1: return {
        col: 1,
        row: 0,
        x: ((gameWidth / cols) * 1) * -1,  // * col
        y: ((gameHeight / rows) * 0) * -1, // * row
      };
      case 2: return {
        col: 2,
        row: 0,
        x: ((gameWidth / cols) * 2) * -1,  // * col
        y: ((gameHeight / rows) * 0) * -1, // * row
      };
      case 3: return {
        col: 3,
        row: 0,
        x: ((gameWidth / cols) * 3) * -1,  // * col
        y: ((gameHeight / rows) * 0) * -1, // * row
      };
      case 4: return {
        col: 4,
        row: 0,
        x: ((gameWidth / cols) * 4) * -1,  // * col
        y: ((gameHeight / rows) * 0) * -1, // * row
      };
      case 5: return {
        col: 5,
        row: 0,
        x: ((gameWidth / cols) * 5) * -1,  // * col
        y: ((gameHeight / rows) * 0) * -1, // * row
      };
      case 6: return {
        col: 0,
        row: 1,
        x: ((gameWidth / cols) * 0) * -1,  // * col
        y: ((gameHeight / rows) * 1) * -1, // * row
      };
      case 7: return {
        col: 1,
        row: 1,
        x: ((gameWidth / cols) * 1) * -1,  // * col
        y: ((gameHeight / rows) * 1) * -1, // * row
      };
      case 8: return {
        col: 2,
        row: 1,
        x: ((gameWidth / cols) * 2) * -1,  // * col
        y: ((gameHeight / rows) * 1) * -1, // * row
      };
      case 9: return {
        col: 3,
        row: 1,
        x: ((gameWidth / cols) * 3) * -1,  // * col
        y: ((gameHeight / rows) * 1) * -1, // * row
      };
      case 10: return {
        col: 4,
        row: 1,
        x: ((gameWidth / cols) * 4) * -1,  // * col
        y: ((gameHeight / rows) * 1) * -1, // * row
      };
      case 11: return {
        col: 5,
        row: 1,
        x: ((gameWidth / cols) * 5) * -1,  // * col
        y: ((gameHeight / rows) * 1) * -1, // * row
      };
      case 12: return {
        col: 0,
        row: 2,
        x: ((gameWidth / cols) * 0) * -1,  // * col
        y: ((gameHeight / rows) * 2) * -1, // * row
      };
      case 13: return {
        col: 1,
        row: 2,
        x: ((gameWidth / cols) * 1) * -1,  // * col
        y: ((gameHeight / rows) * 2) * -1, // * row
      };
      case 14: return {
        col: 2,
        row: 2,
        x: ((gameWidth / cols) * 2) * -1,  // * col
        y: ((gameHeight / rows) * 2) * -1, // * row
      };
      case 15: return {
        col: 3,
        row: 2,
        x: ((gameWidth / cols) * 3) * -1,  // * col
        y: ((gameHeight / rows) * 2) * -1, // * row
      };
      case 16: return {
        col: 4,
        row: 2,
        x: ((gameWidth / cols) * 4) * -1,  // * col
        y: ((gameHeight / rows) * 2) * -1, // * row
      };
      case 17: return {
        col: 5,
        row: 2,
        x: ((gameWidth / cols) * 5) * -1,  // * col
        y: ((gameHeight / rows) * 2) * -1, // * row
      };
      case 18: return {
        col: 0,
        row: 3,
        x: ((gameWidth / cols) * 0) * -1,  // * col
        y: ((gameHeight / rows) * 3) * -1, // * row
      };
      case 19: return {
        col: 1,
        row: 3,
        x: ((gameWidth / cols) * 1) * -1,  // * col
        y: ((gameHeight / rows) * 3) * -1, // * row
      };
      case 20: return {
        col: 2,
        row: 3,
        x: ((gameWidth / cols) * 2) * -1,  // * col
        y: ((gameHeight / rows) * 3) * -1, // * row
      };
      case 21: return {
        col: 3,
        row: 3,
        x: ((gameWidth / cols) * 3) * -1,  // * col
        y: ((gameHeight / rows) * 3) * -1, // * row
      };
      case 22: return {
        col: 4,
        row: 3,
        x: ((gameWidth / cols) * 4) * -1,  // * col
        y: ((gameHeight / rows) * 3) * -1, // * row
      };
      case 23: return {
        col: 5,
        row: 3,
        x: ((gameWidth / cols) * 5) * -1,  // * col
        y: ((gameHeight / rows) * 3) * -1, // * row
      };
      default: return {
        col: 0,
        row: 0,
        x: 0,
        y: 0,
      };
    };
  }
  // /override for testing on game-home

  if (level === 'easy123') {
    if (portrait) {
      switch (position) {
        case 1: return {
          'row': 0,
          'x': (gameWidth * 1) * -1,
          'y': 0,
        };
        case 2: return {
          'row': 0,
          'x': (gameWidth * 2) * -1,
          'y': 0,
        };
        case 3: return {
          'row': 0,
          'x': (gameWidth * 3) * -1,
          'y': 0,
        };
        case 4: return {
          'row': 0,
          'x': (gameWidth * 0) * -1,
          'y': (gameHeight * 1) * -1,
        };
        case 5: return {
          'row': 0,
          'x': (gameWidth * 1) * -1,
          'y': (gameHeight * 1) * -1,
        };
        case 6: return {
          'row': 0,
          'x': (gameWidth * 2) * -1,
          'y': (gameHeight * 1) * -1,
        };
        case 7: return {
          'row': 0,
          'x': (gameWidth * 3) * -1,
          'y': (gameHeight * 1) * -1,
        };
        case 8: return {
          'row': 0,
          'x': (gameWidth * 0) * -1,
          'y': (gameHeight * 2) * -1,
        };
        case 9: return {
          'row': 0,
          'x': (gameWidth * 1) * -1,
          'y': (gameHeight * 2) * -1,
        };
        case 10: return {
          'row': 0,
          'x': (gameWidth * 2) * -1,
          'y': (gameHeight * 2) * -1,
        };
        case 11: return {
          'row': 0,
          'x': (gameWidth * 3) * -1,
          'y': (gameHeight * 2) * -1,
        };
        case 12: return {
          'row': 0,
          'x': (gameWidth * 0) * -1,
          'y': (gameHeight * 3) * -1,
        };
        case 13: return {
          'row': 0,
          'x': (gameWidth * 1) * -1,
          'y': (gameHeight * 3) * -1,
        };
        case 14: return {
          'row': 0,
          'x': (gameWidth * 2) * -1,
          'y': (gameHeight * 3) * -1,
        };
        case 15: return {
          'row': 0,
          'x': (gameWidth * 3) * -1,
          'y': (gameHeight * 3) * -1,
        };
        case 16: return {
          'row': 0,
          'x': (gameWidth * 0) * -1,
          'y': (gameHeight * 4) * -1,
        };
        case 17: return {
          'row': 0,
          'x': (gameWidth * 1) * -1,
          'y': (gameHeight * 4) * -1,
        };
        case 18: return {
          'row': 0,
          'x': (gameWidth * 2) * -1,
          'y': (gameHeight * 4) * -1,
        };
        case 19: return {
          'row': 0,
          'x': (gameWidth * 3) * -1,
          'y': (gameHeight * 4) * -1,
        };
        case 20: return {
          'row': 0,
          'x': (gameWidth * 0) * -1,
          'y': (gameHeight * 5) * -1,
        };
        case 21: return {
          'row': 0,
          'x': (gameWidth * 1) * -1,
          'y': (gameHeight * 5) * -1,
        };
        case 22: return {
          'row': 0,
          'x': (gameWidth * 2) * -1,
          'y': (gameHeight * 5) * -1,
        };
        case 23: return {
          'row': 0,
          'x': (gameWidth * 3) * -1,
          'y': (gameHeight * 5) * -1,
        };
        default: return {
          'row': 0,
          'x': 0,
          'y': 0,
        };
      };
    }
    gameHeight = gameWidth;
    switch (position) {
      case 1: return {
        'row': 0,
        'x': (gameHeight * 1) * -1,
        'y': 0,
      };
      case 2: return {
        'row': 0,
        'x': (gameHeight * 2) * -1,
        'y': 0,
      };
      case 3: return {
        'row': 0,
        'x': (gameHeight * 3) * -1,
        'y': 0,
      };
      case 4: return {
        'row': 0,
        'x': (gameHeight * 4) * -1,
        'y': 0,
      };
      case 5: return {
        'row': 0,
        'x': (gameHeight * 5) * -1,
        'y': 0,
      };
      case 6: return {
        'row': 0,
        'x': (gameHeight * 0) * -1,
        'y': (gameWidth * 1) * -1,
      };
      case 7: return {
        'row': 0,
        'x': (gameHeight * 1) * -1,
        'y': (gameWidth * 1) * -1,
      };
      case 8: return {
        'row': 0,
        'x': (gameHeight * 2) * -1,
        'y': (gameWidth * 1) * -1,
      };
      case 9: return {
        'row': 0,
        'x': (gameHeight * 3) * -1,
        'y': (gameWidth * 1) * -1,
      };
      case 10: return {
        'row': 0,
        'x': (gameHeight * 4) * -1,
        'y': (gameWidth * 1) * -1,
      };
      case 11: return {
        'row': 0,
        'x': (gameHeight * 5) * -1,
        'y': (gameWidth * 1) * -1,
      };
      case 12: return {
        'row': 0,
        'x': (gameHeight * 0) * -1,
        'y': (gameWidth * 2) * -1,
      };
      case 13: return {
        'row': 0,
        'x': (gameHeight * 1) * -1,
        'y': (gameWidth * 2) * -1,
      };
      case 14: return {
        'row': 0,
        'x': (gameHeight * 2) * -1,
        'y': (gameWidth * 2) * -1,
      };
      case 15: return {
        'row': 0,
        'x': (gameHeight * 3) * -1,
        'y': (gameWidth * 2) * -1,
      };
      case 16: return {
        'row': 0,
        'x': (gameHeight * 4) * -1,
        'y': (gameWidth * 2) * -1,
      };
      case 17: return {
        'row': 0,
        'x': (gameHeight * 5) * -1,
        'y': (gameWidth * 2) * -1,
      };
      case 18: return {
        'row': 0,
        'x': (gameHeight * 0) * -1,
        'y': (gameWidth * 3) * -1,
      };
      case 19: return {
        'row': 0,
        'x': (gameHeight * 1) * -1,
        'y': (gameWidth * 3) * -1,
      };
      case 20: return {
        'row': 0,
        'x': (gameHeight * 2) * -1,
        'y': (gameWidth * 3) * -1,
      };
      case 21: return {
        'row': 0,
        'x': (gameHeight * 3) * -1,
        'y': (gameWidth * 3) * -1,
      };
      case 22: return {
        'row': 0,
        'x': (gameHeight * 4) * -1,
        'y': (gameWidth * 3) * -1,
      };
      case 23: return {
        'row': 0,
        'x': (gameHeight * 5) * -1,
        'y': (gameWidth * 3) * -1,
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
