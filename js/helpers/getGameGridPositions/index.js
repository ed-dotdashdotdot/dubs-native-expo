const getGameGridPositions = (position, level, portrait, gameWidth, gameHeight, rows, cols) => {
  
  if (level === 'easy') {
    if (portrait) {
      switch (position) {
        case '001A' : case '001B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '002A' : case '002B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '003A' : case '003B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '004A' : case '004B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '005A' : case '005B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '006A' : case '006B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '007A' : case '007B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '008A' : case '008B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '009A' : case '009B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '010A' : case '010B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '011A' : case '011B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '012A' : case '012B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '013A' : case '013B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '014A' : case '014B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '015A' : case '015B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '016A' : case '016B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '017A' : case '017B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '018A' : case '018B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '019A' : case '019B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '020A' : case '020B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '021A' : case '021B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '022A' : case '022B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '023A' : case '023B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        default: return {
          x: 0,
          y: 0,
        };
      };
    }
    switch (position) {
      case '001A' : case '001B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '002A' : case '002B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '003A' : case '003B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '004A' : case '004B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '005A' : case '005B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '006A' : case '006B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '007A' : case '007B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '008A' : case '008B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '009A' : case '009B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '010A' : case '010B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '011A' : case '011B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '012A' : case '012B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '013A' : case '013B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '014A' : case '014B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '015A' : case '015B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '016A' : case '016B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '017A' : case '017B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '018A' : case '018B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '019A' : case '019B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '020A' : case '020B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '021A' : case '021B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '022A' : case '022B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '023A' : case '023B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      default: return {
        x: 0,
        y: 0,
      };
    };
  } else if (level === 'normal') {
    if (portrait) {
      switch (position) {
        case '001A' : case '001B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '002A' : case '002B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '003A' : case '003B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '004A' : case '004B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '005A' : case '005B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '006A' : case '006B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '007A' : case '007B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '008A' : case '008B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '009A' : case '009B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '010A' : case '010B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '011A' : case '011B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '012A' : case '012B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '013A' : case '013B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '014A' : case '014B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '015A' : case '015B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '016A' : case '016B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '017A' : case '017B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '018A' : case '018B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '019A' : case '019B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '020A' : case '020B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '021A' : case '021B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '022A' : case '022B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '023A' : case '023B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '024A' : case '024B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '025A' : case '025B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '026A' : case '026B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '027A' : case '027B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '028A' : case '028B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '029A' : case '029B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '030A' : case '030B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '031A' : case '031B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '032A' : case '032B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '033A' : case '033B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '034A' : case '034B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '035A' : case '035B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '036A' : case '036B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '037A' : case '037B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '038A' : case '038B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '039A' : case '039B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '040A' : case '040B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '041A' : case '041B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '042A' : case '042B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '043A' : case '043B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '044A' : case '044B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '045A' : case '045B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '046A' : case '046B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '047A' : case '047B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        default: return {
          x: 0,
          y: 0,
        };
      };
    }
    switch (position) {
      case '001A' : case '001B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '002A' : case '002B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '003A' : case '003B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '004A' : case '004B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '005A' : case '005B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '006A' : case '006B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '007A' : case '007B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '008A' : case '008B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '009A' : case '009B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '010A' : case '010B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '011A' : case '011B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '012A' : case '012B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '013A' : case '013B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '014A' : case '014B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '015A' : case '015B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '016A' : case '016B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '017A' : case '017B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '018A' : case '018B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '019A' : case '019B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '020A' : case '020B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '021A' : case '021B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '022A' : case '022B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '023A' : case '023B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '024A' : case '024B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '025A' : case '025B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '026A' : case '026B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '027A' : case '027B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '028A' : case '028B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '029A' : case '029B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '030A' : case '030B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '031A' : case '031B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '032A' : case '032B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '033A' : case '033B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '034A' : case '034B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '035A' : case '035B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '036A' : case '036B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '037A' : case '037B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '038A' : case '038B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '039A' : case '039B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '040A' : case '040B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '041A' : case '041B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '042A' : case '042B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '043A' : case '043B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '044A' : case '044B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '045A' : case '045B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '046A' : case '046B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '047A' : case '047B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      default: return {
        x: 0,
        y: 0,
      };
    };
  } else if (level === 'hard') {
    if (portrait) {
      switch (position) {
        case '001A' : case '001B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '002A' : case '002B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '003A' : case '003B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '004A' : case '004B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '005A' : case '005B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '006A' : case '006B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '007A' : case '007B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 0) * -1,
        };
        case '008A' : case '008B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '009A' : case '009B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '010A' : case '010B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '011A' : case '011B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '012A' : case '012B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '013A' : case '013B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '014A' : case '014B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '015A' : case '015B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 1) * -1,
        };
        case '016A' : case '016B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '017A' : case '017B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '018A' : case '018B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '019A' : case '019B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '020A' : case '020B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '021A' : case '021B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '022A' : case '022B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '023A' : case '023B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 2) * -1,
        };
        case '024A' : case '024B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '025A' : case '025B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '026A' : case '026B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '027A' : case '027B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '028A' : case '028B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '029A' : case '029B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '030A' : case '030B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '031A' : case '031B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 3) * -1,
        };
        case '032A' : case '032B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '033A' : case '033B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '034A' : case '034B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '035A' : case '035B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '036A' : case '036B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '037A' : case '037B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '038A' : case '038B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '039A' : case '039B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 4) * -1,
        };
        case '040A' : case '040B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '041A' : case '041B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '042A' : case '042B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '043A' : case '043B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '044A' : case '044B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '045A' : case '045B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '046A' : case '046B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '047A' : case '047B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 5) * -1,
        };
        case '048A' : case '048B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '049A' : case '049B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '050A' : case '050B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '051A' : case '051B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '052A' : case '052B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '053A' : case '053B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '054A' : case '054B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '055A' : case '055B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 6) * -1,
        };
        case '056A' : case '056B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '057A' : case '057B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '058A' : case '058B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '059A' : case '059B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '060A' : case '060B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '061A' : case '061B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '062A' : case '062B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '063A' : case '063B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 7) * -1,
        };
        case '064A' : case '064B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 8) * -1,
        };
        case '065A' : case '065B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 8) * -1,
        };
        case '066A' : case '066B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 8) * -1,
        };
        case '067A' : case '067B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 8) * -1,
        };
        case '068A' : case '068B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 8) * -1,
        };
        case '069A' : case '069B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 8) * -1,
        };
        case '070A' : case '070B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 8) * -1,
        };
        case '071A' : case '071B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 8) * -1,
        };
        case '072A' : case '072B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 9) * -1,
        };
        case '073A' : case '073B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 9) * -1,
        };
        case '074A' : case '074B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 9) * -1,
        };
        case '075A' : case '075B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 9) * -1,
        };
        case '076A' : case '076B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 9) * -1,
        };
        case '077A' : case '077B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 9) * -1,
        };
        case '078A' : case '078B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 9) * -1,
        };
        case '079A' : case '079B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 9) * -1,
        };
        case '080A' : case '080B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 10) * -1,
        };
        case '081A' : case '081B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 10) * -1,
        };
        case '082A' : case '082B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 10) * -1,
        };
        case '083A' : case '083B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 10) * -1,
        };
        case '084A' : case '084B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 10) * -1,
        };
        case '085A' : case '085B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 10) * -1,
        };
        case '086A' : case '086B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 10) * -1,
        };
        case '087A' : case '087B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 10) * -1,
        };
        case '088A' : case '088B': return {
          x: ((gameWidth / cols) * 0) * -1,
          y: ((gameHeight / rows) * 11) * -1,
        };
        case '089A' : case '089B': return {
          x: ((gameWidth / cols) * 1) * -1,
          y: ((gameHeight / rows) * 11) * -1,
        };
        case '090A' : case '090B': return {
          x: ((gameWidth / cols) * 2) * -1,
          y: ((gameHeight / rows) * 11) * -1,
        };
        case '091A' : case '091B': return {
          x: ((gameWidth / cols) * 3) * -1,
          y: ((gameHeight / rows) * 11) * -1,
        };
        case '092A' : case '092B': return {
          x: ((gameWidth / cols) * 4) * -1,
          y: ((gameHeight / rows) * 11) * -1,
        };
        case '093A' : case '093B': return {
          x: ((gameWidth / cols) * 5) * -1,
          y: ((gameHeight / rows) * 11) * -1,
        };
        case '094A' : case '094B': return {
          x: ((gameWidth / cols) * 6) * -1,
          y: ((gameHeight / rows) * 11) * -1,
        };
        case '095A' : case '095B': return {
          x: ((gameWidth / cols) * 7) * -1,
          y: ((gameHeight / rows) * 11) * -1,
        };
        default: return {
          x: 0,
          y: 0,
        };
      };
    }
    switch (position) {
      case '001A' : case '001B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '002A' : case '002B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '003A' : case '003B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '004A' : case '004B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '005A' : case '005B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '006A' : case '006B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '007A' : case '007B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '008A' : case '008B': return {
        x: ((gameWidth / cols) * 8) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '009A' : case '009B': return {
        x: ((gameWidth / cols) * 9) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '010A' : case '010B': return {
        x: ((gameWidth / cols) * 10) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '011A' : case '011B': return {
        x: ((gameWidth / cols) * 11) * -1,
        y: ((gameHeight / rows) * 0) * -1,
      };
      case '012A' : case '012B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '013A' : case '013B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '014A' : case '014B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '015A' : case '015B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '016A' : case '016B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '017A' : case '017B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '018A' : case '018B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '019A' : case '019B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '020A' : case '020B': return {
        x: ((gameWidth / cols) * 8) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '021A' : case '021B': return {
        x: ((gameWidth / cols) * 9) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '022A' : case '022B': return {
        x: ((gameWidth / cols) * 10) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '023A' : case '023B': return {
        x: ((gameWidth / cols) * 11) * -1,
        y: ((gameHeight / rows) * 1) * -1,
      };
      case '024A' : case '024B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '025A' : case '025B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '026A' : case '026B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '027A' : case '027B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '028A' : case '028B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '029A' : case '029B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '030A' : case '030B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '031A' : case '031B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '032A' : case '032B': return {
        x: ((gameWidth / cols) * 8) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '033A' : case '033B': return {
        x: ((gameWidth / cols) * 9) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '034A' : case '034B': return {
        x: ((gameWidth / cols) * 10) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '035A' : case '035B': return {
        x: ((gameWidth / cols) * 11) * -1,
        y: ((gameHeight / rows) * 2) * -1,
      };
      case '036A' : case '036B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '037A' : case '037B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '038A' : case '038B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '039A' : case '039B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '040A' : case '040B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '041A' : case '041B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '042A' : case '042B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '043A' : case '043B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '044A' : case '044B': return {
        x: ((gameWidth / cols) * 8) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '045A' : case '045B': return {
        x: ((gameWidth / cols) * 9) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '046A' : case '046B': return {
        x: ((gameWidth / cols) * 10) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '047A' : case '047B': return {
        x: ((gameWidth / cols) * 11) * -1,
        y: ((gameHeight / rows) * 3) * -1,
      };
      case '048A' : case '048B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '049A' : case '049B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '050A' : case '050B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '051A' : case '051B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '052A' : case '052B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '053A' : case '053B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '054A' : case '054B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '055A' : case '055B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '056A' : case '056B': return {
        x: ((gameWidth / cols) * 8) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '057A' : case '057B': return {
        x: ((gameWidth / cols) * 9) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '058A' : case '058B': return {
        x: ((gameWidth / cols) * 10) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '059A' : case '059B': return {
        x: ((gameWidth / cols) * 11) * -1,
        y: ((gameHeight / rows) * 4) * -1,
      };
      case '060A' : case '060B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '061A' : case '061B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '062A' : case '062B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '063A' : case '063B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '064A' : case '064B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '065A' : case '065B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '066A' : case '066B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '067A' : case '067B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '068A' : case '068B': return {
        x: ((gameWidth / cols) * 8) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '069A' : case '069B': return {
        x: ((gameWidth / cols) * 9) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '070A' : case '070B': return {
        x: ((gameWidth / cols) * 10) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '071A' : case '071B': return {
        x: ((gameWidth / cols) * 11) * -1,
        y: ((gameHeight / rows) * 5) * -1,
      };
      case '072A' : case '072B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '073A' : case '073B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '074A' : case '074B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '075A' : case '075B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '076A' : case '076B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '077A' : case '077B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '078A' : case '078B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '079A' : case '079B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '080A' : case '080B': return {
        x: ((gameWidth / cols) * 8) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '081A' : case '081B': return {
        x: ((gameWidth / cols) * 9) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '082A' : case '082B': return {
        x: ((gameWidth / cols) * 10) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '083A' : case '083B': return {
        x: ((gameWidth / cols) * 11) * -1,
        y: ((gameHeight / rows) * 6) * -1,
      };
      case '084A' : case '084B': return {
        x: ((gameWidth / cols) * 0) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '085A' : case '085B': return {
        x: ((gameWidth / cols) * 1) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '086A' : case '086B': return {
        x: ((gameWidth / cols) * 2) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '087A' : case '087B': return {
        x: ((gameWidth / cols) * 3) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '088A' : case '088B': return {
        x: ((gameWidth / cols) * 4) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '089A' : case '089B': return {
        x: ((gameWidth / cols) * 5) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '090A' : case '090B': return {
        x: ((gameWidth / cols) * 6) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '091A' : case '091B': return {
        x: ((gameWidth / cols) * 7) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '092A' : case '092B': return {
        x: ((gameWidth / cols) * 8) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '093A' : case '093B': return {
        x: ((gameWidth / cols) * 9) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '094A' : case '094B': return {
        x: ((gameWidth / cols) * 10) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      case '095A' : case '095B': return {
        x: ((gameWidth / cols) * 11) * -1,
        y: ((gameHeight / rows) * 7) * -1,
      };
      default: return {
        x: 0,
        y: 0,
      };
    };
  }
};

export default getGameGridPositions;
