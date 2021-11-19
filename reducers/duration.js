const defaultDurationState = {
  start: '',
  end: '',
  paused: 0,
  saved: 0,
  // highScore: true,
  highScores: [
    "21.21--easy--1--",
    "22.22--easy--2--",
    "23.23--easy--3--",
    "24.24--easy--4--",
    "25.25--easy--5--",
    "31.31--easyBossMode--1--",
    "41.41--normal--1--",
    "51.51--normalBossMode--1--",
    "61.61--hard--1--",
    "62.62--hard--2--",
    "71.71--hardBossMode--1--",
    "72.72--hardBossMode--2--",
    "73.73--hardBossMode--3--",
    "74.74--hardBossMode--4--",
    "75.75--hardBossMode--5--",
  ],
  status: '', // 'game-on', 'game-paused'
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
    default: return state;
  }
};

export default duration;
