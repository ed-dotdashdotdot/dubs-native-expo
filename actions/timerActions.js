const setTimerEnd = data => ({
  type: 'SET_TIMER_END',
  payload: data,
});
const setTimerPaused = data => ({
  type: 'SET_TIMER_PAUSED',
  payload: data,
});
const setTimerSaved = data => ({
  type: 'SET_TIMER_SAVED',
  payload: data,
});
const setTimerStart = data => ({
  type: 'SET_TIMER_START',
  payload: data,
});
const setTimerStatus = data => ({
  type: 'SET_TIMER_STATUS',
  payload: data,
});

const exportedTimerObject = {
  setTimerEnd,
  setTimerPaused,
  setTimerSaved,
  setTimerStart,
  setTimerStatus,
};

export default exportedTimerObject;
