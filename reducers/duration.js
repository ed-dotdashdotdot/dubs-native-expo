const defaultDurationState = {
  start: '',
  end: '',
  paused: 0,
  saved: 0,
  highScore: true,
  highScores123: [
    "20.56--easy--1",
    "134.56--easyBossMode--1123",
    "20.00--easy--2",
    "33.33--easy--4123",
    "123.35--normal--1123",
    "134.56--normal--2123",
    "334.56--normalBossMode--2123",
    "434.56--hard--1123",
    "434.56--hard--3123",
    "1434.00--hardBossMode--3123",
    "123.45--hardBossMode--1123",
    "123.00--hardBossMode--9123",
    "123.00--hardBossMode--10123",
  ],
  highScores: [
    "21.20--easy--1",
    "22.00--easy--2",
    "23.00--easy--3",
    "24.00--easy--4",
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
