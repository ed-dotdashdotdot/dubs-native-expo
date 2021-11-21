export const whatIsTheHighScore = (
  currentHighScoreTime, 
  gameDuration
) => {
  const currentHighScoreTimeSeconds = +currentHighScoreTime;
  const gameDurationSeconds = +gameDuration;
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
