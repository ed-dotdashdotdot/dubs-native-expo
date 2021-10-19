const defaultTimerState = {
  start: '',
  end: '',
  paused: 0,
  saved: 0,
  status: '', // 'game-on', 'game-paused'
};

const timer = (state = defaultTimerState, action) => {
  switch (action.type) {
    case 'SET_TIMER_START': return {
      ...state,
      start: action.payload,
    };
    case 'SET_TIMER_END': return {
      ...state,
      end: action.payload,
    };
    case 'SET_TIMER_PAUSED': return {
      ...state,
      paused: action.payload,
    };
    case 'SET_TIMER_SAVED': return {
      ...state,
      saved: action.payload,
    };
    case 'SET_TIMER_STATUS': return {
      ...state,
      status: action.payload,
    };
    default: return state;
  }
};

export default timer;
