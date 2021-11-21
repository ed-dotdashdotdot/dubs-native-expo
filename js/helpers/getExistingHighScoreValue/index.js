export const getExistingHighScoreValue = (
  level,
  bossMode,
  image,
  currentHighScores,
) => {
  const keyToSearchFor = `--${level}${bossMode ? "BossMode" : ""}--${image}--`;
  const currentHighScoresFiltered = currentHighScores.filter(val => {
    return val.indexOf(keyToSearchFor) !== -1;
  });
  let highScoreTime;
  if (currentHighScoresFiltered.length === 1) {
    highScoreTime = currentHighScoresFiltered[0].split('--')[0];
  }
  return {
    key: keyToSearchFor,
    time: highScoreTime && highScoreTime !== '' ? +highScoreTime : 0,
  }
};
