export const getExistingHighScoreValueHERE = (
  level,
  bossMode,
  image,
  currentHighScores,
) => {
  // console.log('getExistingHighScoreValueHERE');
  const keyToSearchFor = `--${level}${bossMode ? "BossMode" : ""}--${image}--`;
  const currentHighScoresFiltered = currentHighScores.filter(val => {
    return val.indexOf(keyToSearchFor) !== -1;
  });
  // console.log('currentHighScoresFiltered')
  // console.log(currentHighScoresFiltered)
  // console.log(currentHighScoresFiltered.length)
  let highScoreTime;
  if (currentHighScoresFiltered.length === 1) {
    highScoreTime = currentHighScoresFiltered[0].split('--')[0];
  }
  // console.log('\n/getExistingHighScoreValueHERE\n');
  return {
    key: keyToSearchFor,
    time: highScoreTime && highScoreTime !== '' ? +highScoreTime : 0,
  }
};
