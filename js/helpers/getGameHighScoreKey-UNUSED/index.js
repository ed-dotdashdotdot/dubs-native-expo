export const getGameHighScoreKey = (durationSeconds, bossMode, image, level) => {
  // example output: 134.56--easyBossMode--1--
  return `${durationSeconds}--${level}${ bossMode ? 'BossMode' : ''}--${image}`;
}