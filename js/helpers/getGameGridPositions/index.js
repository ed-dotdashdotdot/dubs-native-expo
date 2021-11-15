export const getGameGridPositions = (
  position, 
  level, 
  portrait, 
  gameWidth, 
  gameHeight, 
  rows, 
  cols
) => {
  if (level === 'easy') {
    if (portrait) {
      switch (position) {
        case '001A' : case '001B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '002A' : case '002B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '003A' : case '003B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '004A' : case '004B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '005A' : case '005B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '006A' : case '006B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '007A' : case '007B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '008A' : case '008B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '009A' : case '009B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '010A' : case '010B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '011A' : case '011B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '012A' : case '012B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '013A' : case '013B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '014A' : case '014B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '015A' : case '015B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '016A' : case '016B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '017A' : case '017B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '018A' : case '018B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '019A' : case '019B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '020A' : case '020B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '021A' : case '021B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '022A' : case '022B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '023A' : case '023B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 5),
        };
        default: return {
          x: 0,
          y: 0,
        };
      };
    }
    switch (position) {
      case '001A' : case '001B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '002A' : case '002B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '003A' : case '003B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '004A' : case '004B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '005A' : case '005B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '006A' : case '006B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '007A' : case '007B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '008A' : case '008B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '009A' : case '009B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '010A' : case '010B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '011A' : case '011B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '012A' : case '012B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '013A' : case '013B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '014A' : case '014B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '015A' : case '015B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '016A' : case '016B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '017A' : case '017B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '018A' : case '018B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '019A' : case '019B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '020A' : case '020B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '021A' : case '021B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '022A' : case '022B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '023A' : case '023B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 3),
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
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '002A' : case '002B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '003A' : case '003B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '004A' : case '004B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '005A' : case '005B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '006A' : case '006B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '007A' : case '007B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '008A' : case '008B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '009A' : case '009B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '010A' : case '010B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '011A' : case '011B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '012A' : case '012B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '013A' : case '013B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '014A' : case '014B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '015A' : case '015B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '016A' : case '016B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '017A' : case '017B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '018A' : case '018B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '019A' : case '019B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '020A' : case '020B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '021A' : case '021B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '022A' : case '022B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '023A' : case '023B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '024A' : case '024B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '025A' : case '025B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '026A' : case '026B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '027A' : case '027B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '028A' : case '028B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '029A' : case '029B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '030A' : case '030B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '031A' : case '031B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '032A' : case '032B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '033A' : case '033B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '034A' : case '034B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '035A' : case '035B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '036A' : case '036B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '037A' : case '037B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '038A' : case '038B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '039A' : case '039B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '040A' : case '040B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '041A' : case '041B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '042A' : case '042B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '043A' : case '043B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '044A' : case '044B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '045A' : case '045B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '046A' : case '046B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '047A' : case '047B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 7),
        };
        default: return {
          x: 0,
          y: 0,
        };
      };
    }
    switch (position) {
      case '001A' : case '001B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '002A' : case '002B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '003A' : case '003B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '004A' : case '004B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '005A' : case '005B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '006A' : case '006B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '007A' : case '007B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '008A' : case '008B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '009A' : case '009B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '010A' : case '010B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '011A' : case '011B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '012A' : case '012B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '013A' : case '013B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '014A' : case '014B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '015A' : case '015B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '016A' : case '016B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '017A' : case '017B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '018A' : case '018B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '019A' : case '019B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '020A' : case '020B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '021A' : case '021B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '022A' : case '022B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '023A' : case '023B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '024A' : case '024B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '025A' : case '025B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '026A' : case '026B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '027A' : case '027B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '028A' : case '028B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '029A' : case '029B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '030A' : case '030B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '031A' : case '031B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '032A' : case '032B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '033A' : case '033B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '034A' : case '034B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '035A' : case '035B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '036A' : case '036B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '037A' : case '037B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '038A' : case '038B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '039A' : case '039B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '040A' : case '040B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '041A' : case '041B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '042A' : case '042B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '043A' : case '043B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '044A' : case '044B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '045A' : case '045B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '046A' : case '046B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '047A' : case '047B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 5),
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
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '002A' : case '002B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '003A' : case '003B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '004A' : case '004B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '005A' : case '005B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '006A' : case '006B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '007A' : case '007B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 0),
        };
        case '008A' : case '008B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '009A' : case '009B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '010A' : case '010B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '011A' : case '011B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '012A' : case '012B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '013A' : case '013B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '014A' : case '014B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '015A' : case '015B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 1),
        };
        case '016A' : case '016B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '017A' : case '017B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '018A' : case '018B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '019A' : case '019B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '020A' : case '020B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '021A' : case '021B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '022A' : case '022B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '023A' : case '023B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 2),
        };
        case '024A' : case '024B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '025A' : case '025B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '026A' : case '026B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '027A' : case '027B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '028A' : case '028B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '029A' : case '029B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '030A' : case '030B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '031A' : case '031B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 3),
        };
        case '032A' : case '032B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '033A' : case '033B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '034A' : case '034B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '035A' : case '035B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '036A' : case '036B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '037A' : case '037B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '038A' : case '038B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '039A' : case '039B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 4),
        };
        case '040A' : case '040B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '041A' : case '041B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '042A' : case '042B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '043A' : case '043B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '044A' : case '044B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '045A' : case '045B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '046A' : case '046B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '047A' : case '047B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 5),
        };
        case '048A' : case '048B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '049A' : case '049B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '050A' : case '050B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '051A' : case '051B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '052A' : case '052B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '053A' : case '053B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '054A' : case '054B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '055A' : case '055B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 6),
        };
        case '056A' : case '056B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '057A' : case '057B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '058A' : case '058B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '059A' : case '059B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '060A' : case '060B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '061A' : case '061B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '062A' : case '062B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '063A' : case '063B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 7),
        };
        case '064A' : case '064B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 8),
        };
        case '065A' : case '065B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 8),
        };
        case '066A' : case '066B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 8),
        };
        case '067A' : case '067B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 8),
        };
        case '068A' : case '068B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 8),
        };
        case '069A' : case '069B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 8),
        };
        case '070A' : case '070B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 8),
        };
        case '071A' : case '071B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 8),
        };
        case '072A' : case '072B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 9),
        };
        case '073A' : case '073B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 9),
        };
        case '074A' : case '074B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 9),
        };
        case '075A' : case '075B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 9),
        };
        case '076A' : case '076B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 9),
        };
        case '077A' : case '077B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 9),
        };
        case '078A' : case '078B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 9),
        };
        case '079A' : case '079B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 9),
        };
        case '080A' : case '080B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 10),
        };
        case '081A' : case '081B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 10),
        };
        case '082A' : case '082B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 10),
        };
        case '083A' : case '083B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 10),
        };
        case '084A' : case '084B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 10),
        };
        case '085A' : case '085B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 10),
        };
        case '086A' : case '086B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 10),
        };
        case '087A' : case '087B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 10),
        };
        case '088A' : case '088B': return {
          x: 0 - ((gameWidth / cols) * 0),
          y: 0 - ((gameHeight / rows) * 11),
        };
        case '089A' : case '089B': return {
          x: 0 - ((gameWidth / cols) * 1),
          y: 0 - ((gameHeight / rows) * 11),
        };
        case '090A' : case '090B': return {
          x: 0 - ((gameWidth / cols) * 2),
          y: 0 - ((gameHeight / rows) * 11),
        };
        case '091A' : case '091B': return {
          x: 0 - ((gameWidth / cols) * 3),
          y: 0 - ((gameHeight / rows) * 11),
        };
        case '092A' : case '092B': return {
          x: 0 - ((gameWidth / cols) * 4),
          y: 0 - ((gameHeight / rows) * 11),
        };
        case '093A' : case '093B': return {
          x: 0 - ((gameWidth / cols) * 5),
          y: 0 - ((gameHeight / rows) * 11),
        };
        case '094A' : case '094B': return {
          x: 0 - ((gameWidth / cols) * 6),
          y: 0 - ((gameHeight / rows) * 11),
        };
        case '095A' : case '095B': return {
          x: 0 - ((gameWidth / cols) * 7),
          y: 0 - ((gameHeight / rows) * 11),
        };
        default: return {
          x: 0,
          y: 0,
        };
      };
    }
    switch (position) {
      case '001A' : case '001B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '002A' : case '002B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '003A' : case '003B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '004A' : case '004B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '005A' : case '005B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '006A' : case '006B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '007A' : case '007B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '008A' : case '008B': return {
        x: 0 - ((gameWidth / cols) * 8),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '009A' : case '009B': return {
        x: 0 - ((gameWidth / cols) * 9),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '010A' : case '010B': return {
        x: 0 - ((gameWidth / cols) * 10),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '011A' : case '011B': return {
        x: 0 - ((gameWidth / cols) * 11),
        y: 0 - ((gameHeight / rows) * 0),
      };
      case '012A' : case '012B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '013A' : case '013B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '014A' : case '014B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '015A' : case '015B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '016A' : case '016B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '017A' : case '017B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '018A' : case '018B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '019A' : case '019B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '020A' : case '020B': return {
        x: 0 - ((gameWidth / cols) * 8),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '021A' : case '021B': return {
        x: 0 - ((gameWidth / cols) * 9),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '022A' : case '022B': return {
        x: 0 - ((gameWidth / cols) * 10),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '023A' : case '023B': return {
        x: 0 - ((gameWidth / cols) * 11),
        y: 0 - ((gameHeight / rows) * 1),
      };
      case '024A' : case '024B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '025A' : case '025B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '026A' : case '026B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '027A' : case '027B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '028A' : case '028B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '029A' : case '029B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '030A' : case '030B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '031A' : case '031B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '032A' : case '032B': return {
        x: 0 - ((gameWidth / cols) * 8),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '033A' : case '033B': return {
        x: 0 - ((gameWidth / cols) * 9),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '034A' : case '034B': return {
        x: 0 - ((gameWidth / cols) * 10),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '035A' : case '035B': return {
        x: 0 - ((gameWidth / cols) * 11),
        y: 0 - ((gameHeight / rows) * 2),
      };
      case '036A' : case '036B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '037A' : case '037B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '038A' : case '038B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '039A' : case '039B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '040A' : case '040B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '041A' : case '041B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '042A' : case '042B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '043A' : case '043B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '044A' : case '044B': return {
        x: 0 - ((gameWidth / cols) * 8),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '045A' : case '045B': return {
        x: 0 - ((gameWidth / cols) * 9),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '046A' : case '046B': return {
        x: 0 - ((gameWidth / cols) * 10),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '047A' : case '047B': return {
        x: 0 - ((gameWidth / cols) * 11),
        y: 0 - ((gameHeight / rows) * 3),
      };
      case '048A' : case '048B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '049A' : case '049B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '050A' : case '050B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '051A' : case '051B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '052A' : case '052B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '053A' : case '053B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '054A' : case '054B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '055A' : case '055B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '056A' : case '056B': return {
        x: 0 - ((gameWidth / cols) * 8),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '057A' : case '057B': return {
        x: 0 - ((gameWidth / cols) * 9),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '058A' : case '058B': return {
        x: 0 - ((gameWidth / cols) * 10),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '059A' : case '059B': return {
        x: 0 - ((gameWidth / cols) * 11),
        y: 0 - ((gameHeight / rows) * 4),
      };
      case '060A' : case '060B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '061A' : case '061B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '062A' : case '062B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '063A' : case '063B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '064A' : case '064B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '065A' : case '065B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '066A' : case '066B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '067A' : case '067B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '068A' : case '068B': return {
        x: 0 - ((gameWidth / cols) * 8),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '069A' : case '069B': return {
        x: 0 - ((gameWidth / cols) * 9),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '070A' : case '070B': return {
        x: 0 - ((gameWidth / cols) * 10),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '071A' : case '071B': return {
        x: 0 - ((gameWidth / cols) * 11),
        y: 0 - ((gameHeight / rows) * 5),
      };
      case '072A' : case '072B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '073A' : case '073B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '074A' : case '074B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '075A' : case '075B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '076A' : case '076B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '077A' : case '077B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '078A' : case '078B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '079A' : case '079B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '080A' : case '080B': return {
        x: 0 - ((gameWidth / cols) * 8),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '081A' : case '081B': return {
        x: 0 - ((gameWidth / cols) * 9),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '082A' : case '082B': return {
        x: 0 - ((gameWidth / cols) * 10),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '083A' : case '083B': return {
        x: 0 - ((gameWidth / cols) * 11),
        y: 0 - ((gameHeight / rows) * 6),
      };
      case '084A' : case '084B': return {
        x: 0 - ((gameWidth / cols) * 0),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '085A' : case '085B': return {
        x: 0 - ((gameWidth / cols) * 1),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '086A' : case '086B': return {
        x: 0 - ((gameWidth / cols) * 2),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '087A' : case '087B': return {
        x: 0 - ((gameWidth / cols) * 3),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '088A' : case '088B': return {
        x: 0 - ((gameWidth / cols) * 4),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '089A' : case '089B': return {
        x: 0 - ((gameWidth / cols) * 5),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '090A' : case '090B': return {
        x: 0 - ((gameWidth / cols) * 6),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '091A' : case '091B': return {
        x: 0 - ((gameWidth / cols) * 7),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '092A' : case '092B': return {
        x: 0 - ((gameWidth / cols) * 8),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '093A' : case '093B': return {
        x: 0 - ((gameWidth / cols) * 9),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '094A' : case '094B': return {
        x: 0 - ((gameWidth / cols) * 10),
        y: 0 - ((gameHeight / rows) * 7),
      };
      case '095A' : case '095B': return {
        x: 0 - ((gameWidth / cols) * 11),
        y: 0 - ((gameHeight / rows) * 7),
      };
      default: return {
        x: 0,
        y: 0,
      };
    };
  }
};
