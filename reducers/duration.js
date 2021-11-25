const defaultDurationState = {
  end: '',
  highScores: [
    '12.34--easy--1--',
    '22.45--easy--4--',
    '2.45--easy--2--',
    '123.45--easyBossMode--2--',
    '235.56--normal--3--',
    '1235.56--normalBossMode--3--',
    '123.00--hard--3--',
  ],
  highScores123: [],
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
