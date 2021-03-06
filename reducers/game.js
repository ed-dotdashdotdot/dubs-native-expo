const defaultGameState = {
  bossMode: false, // true, false
  clicks: 0,
  data: [],
  found: [],
  highlight: [],
  // id: '', // generated by uuid
  level: '', // easy, normal, hard
  selected: '',
  status: 'game-home', // null, game-ready, game-on, game-over, game-paused, what-is-boss-mode
  highScore: 0, 
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
