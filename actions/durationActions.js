const setDurationEnd = data => ({
  type: 'SET_DURATION_END',
  payload: data,
});
const setDurationPaused = data => ({
  type: 'SET_DURATION_PAUSED',
  payload: data,
});
const setDurationSaved = data => ({
  type: 'SET_DURATION_SAVED',
  payload: data,
});
const setDurationStart = data => ({
  type: 'SET_DURATION_START',
  payload: data,
});
const setDurationStatus = data => ({
  type: 'SET_DURATION_STATUS',
  payload: data,
});
const setDurationHighScores = data => ({
  type: 'SET_DURATION_HIGHSCORES',
  payload: data,
});

const exportedDurationObject = {
  setDurationEnd,
  setDurationPaused,
  setDurationSaved,
  setDurationStart,
  setDurationStatus,
  setDurationHighScores,
};

export default exportedDurationObject;
