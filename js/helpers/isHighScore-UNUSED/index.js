export const isHighScore = (currentValues, highScores) => {

  // split currentScore
  let currentScoreSplit = currentValues.split('--');
  const currentScore = currentScoreSplit[0];
  const currentLevel = currentScoreSplit[1];
  const currentImage = currentScoreSplit[2];

  const highScoresFiltered = highScores.filter(val => val.indexOf(`${currentLevel}--${currentImage}--`) !== -1);

  let returnValue = false;
  
  if (highScoresFiltered.length === 1) {
    // compare times
    const highScore = highScoresFiltered[0].split('--')[0];
    if (Number(currentScore) < Number(highScore)) {
      returnValue = true;
    }
  } else {
    // this is a high score as it's the first time it's been played
    returnValue = true;
  }
  return returnValue;
}