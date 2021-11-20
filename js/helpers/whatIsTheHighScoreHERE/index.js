export const whatIsTheHighScoreHERE = (
  currentHighScoreTime, 
  gameDuration
) => {
  // console.log('\n');
  // console.log('whatIsTheHighScoreHERE');
  // console.log(currentHighScoreTime);
  // console.log(typeof currentHighScoreTime);
  // console.log(typeof +currentHighScoreTime);
  // console.log(gameDuration / 1000);
  const currentHighScoreTimeSeconds = +currentHighScoreTime;
  const gameDurationSeconds = +gameDuration;
  // console.log(currentHighScoreTimeSeconds);
  // console.log(gameDurationSeconds);
  // console.log(typeof gameDuration);
  // console.log('/whatIsTheHighScoreHERE');
  // console.log('\n');
  if (currentHighScoreTimeSeconds === 0) { 
    return {
      highScore: true,
      time: gameDurationSeconds.toFixed(2)
    }
  }
  return {
    highScore: gameDurationSeconds < currentHighScoreTimeSeconds ? true : false,
    time: gameDurationSeconds < currentHighScoreTimeSeconds ? gameDurationSeconds.toFixed(2) : currentHighScoreTimeSeconds.toFixed(2),
  }
};
