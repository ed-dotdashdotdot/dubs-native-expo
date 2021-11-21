const defaultDurationState = {
  end: '',
  highScores: [],
  isHighScore: false,
  paused: 0,
  saved: 0,
  start: '',
  status: '', // 'game-on', 'game-paused' ...
};

const duration = (state = defaultDurationState, action) => {
  switch (action.type) {
    case 'SET_DURATION_START': return {
      ...state,
      start: action.payload,
    };
    case 'SET_DURATION_END': return {
      ...state,
      end: action.payload,
    };
    case 'SET_DURATION_PAUSED': return {
      ...state,
      paused: action.payload,
    };
    case 'SET_DURATION_SAVED': return {
      ...state,
      saved: action.payload,
    };
    case 'SET_DURATION_STATUS': return {
      ...state,
      status: action.payload,
    };
    case 'SET_DURATION_STATUS': return {
      ...state,
      status: action.payload,
    };
    case 'SET_DURATION_HIGHSCORES': return {
      ...state,
      highScores: action.payload,
    };
    case 'SET_DURATION_ISHIGHSCORE': return {
      ...state,
      isHighScore: action.payload,
    };
    default: return state;
  }
};

export default duration;
