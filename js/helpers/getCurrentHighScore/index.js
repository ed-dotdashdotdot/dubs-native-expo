export const getCurrentHighScore = (
  gameKey, 
  highScores
) => {
  console.log('gameKey:');
  console.log(gameKey);
  console.log('highScores:');
  console.log(highScores);
  const highScoresFiltered = highScores.filter(val => val.indexOf(gameKey) !== -1);
  console.log('highScoresFiltered.length')
  console.log(highScoresFiltered.length)

  let returnValue = 0;
  if (highScoresFiltered.length === 1) {
    returnValue = highScoresFiltered[0].split('--')[0];
  }
  
  return returnValue;

}