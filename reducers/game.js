const defaultGameState = {
  bossMode: false, // true, false
  clicks: 0,
  // data123: [
  //   '001B', '000B', '003B', '002B', '004B', '005B', '006B', '007B', '008B', '009B', 
  //   '010B', '011B', '012B', '013B', '014B', '015B', '016B', '017B', '018B', '019B', 
  //   '021B', '020B', '023B', '022B'
  // ],
  // data123123: [ 
  //   '001B', '000B', '002B', '003B', '004B', '005B', '006B', '007B', '008B', '009B', 
  //   '010B', '011B', '012B', '013B', '014B', '015B', '016B', '017B', '018B', '019B', 
  //   '020B', '021B', '022B', '023B'
  // ],
  // data123: [
  //   '000A', '001A', '002A', '003A', '004A', '005A', '006A', '007A', 
  //   '008A', '009A', '010A', '011A', 
  //   '000B', '001B', '002B', '003B', '004B', '005B', '006B', '007B', '008B', '009B', 
  //   '010B', '011B', 
  // ],
  data: [],
  found: [],
  highlight: [],
  // id: '', // generated by uuid
  // invert: false,
  // lastMove: '',
  level: '', // easy, normal, hard
  selected: '',
  status: 'game-home', // null, game-ready, game-on, game-over, game-paused, what-is-boss-mode
  highScore: 0, // null, game-ready, game-on, game-over, game-paused, what-is-boss-mode
};

const game = (state = defaultGameState, action) => {
  switch (action.type) {
    case 'SET_GAME_BOSSMODE': return {
      ...state,
      ...{
        bossMode: action.payload,
      }
    };
    case 'SET_GAME_CLICKS': return {
      ...state,
      ...{
        clicks: action.payload,
      }
    };
    case 'SET_GAME_DATA': return {
      ...state,
      ...{
        data: action.payload,
      }
    };
    case 'SET_GAME_FOUND': return {
      ...state,
      ...{
        found: [...state.found, ...action.payload],
      }
    };
    case 'INJECT_GAME_FOUND': return {
      ...state,
      found: action.payload,
    };
    case 'SET_GAME_ID': return {
      ...state,
      ...{
        id: action.payload,
      }
    };
    case 'SET_GAME_HIGHLIGHT': return {
      ...state,
      ...{
        highlight: action.payload,
      }
    };
    // case 'SET_GAME_INVERT': return {
    //   ...state,
    //   ...{
    //     invert: action.payload,
    //   }
    // };
    // case 'SET_GAME_LASTMOVE': return {
    //   ...state,
    //   ...{
    //     lastMove: action.payload,
    //   }
    // };
    case 'SET_GAME_LEVEL': return {
      ...state,
      ...{
        level: action.payload,
      }
    };
    case 'SET_GAME_SELECTED': return {
      ...state,
      ...{
        selected: action.payload,
      }
    };
    case 'SET_GAME_STATUS': return {
      ...state,
      ...{
        status: action.payload,
      }
    };
    case 'SET_GAME_HIGHSCORE': return {
      ...state,
      ...{
        highScore: action.payload,
      }
    };
    default: return state;
  }
};

export default game;
