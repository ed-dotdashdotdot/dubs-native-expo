export const getCurrentHighScore = (
  gameKey, 
  highScores
) => {
  const highScoresFiltered = highScores.filter(val => val.indexOf(gameKey) !== -1);
  let returnValue = 0;
  if (highScoresFiltered.length === 1) {
    returnValue = highScoresFiltered[0].split('--')[0];
  }
  return returnValue;

}