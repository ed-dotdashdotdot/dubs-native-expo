const setGameBossMode = data => ({
  type: 'SET_GAME_BOSSMODE',
  payload: data,
});
const setGameClicks = data => ({
  type: 'SET_GAME_CLICKS',
  payload: data,
});
const setGameData = data => ({
  type: 'SET_GAME_DATA',
  payload: data,
});
const setGameFound = data => ({
  type: 'SET_GAME_FOUND',
  payload: data,
});
const injectGameFound = data => ({
  type: 'INJECT_GAME_FOUND',
  payload: data,
});
const setGameId = data => ({
  type: 'SET_GAME_ID',
  payload: data,
});
const setGameHighlight = data => ({
  type: 'SET_GAME_HIGHLIGHT',
  payload: data,
});
const setGameInvert = data => ({
  type: 'SET_GAME_INVERT',
  payload: data,
});
const setGameLastMove = data => ({
  type: 'SET_GAME_LASTMOVE',
  payload: data,
});
const setGameLevel = data => ({
  type: 'SET_GAME_LEVEL',
  payload: data,
});
const setGameSelected = data => ({
  type: 'SET_GAME_SELECTED',
  payload: data,
});
const setGameStatus = data => ({
  type: 'SET_GAME_STATUS',
  payload: data,
});

const exportedGameObject = {
  setGameBossMode,
  setGameClicks,
  setGameData,
  setGameFound,
  injectGameFound,
  setGameId,
  setGameHighlight,
  setGameInvert,
  setGameLastMove,
  setGameLevel,
  setGameSelected,
  setGameStatus,
};

export default exportedGameObject;
