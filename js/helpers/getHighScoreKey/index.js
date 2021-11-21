export const getHighScoreKey = (
  level,
  bossMode,
  image
) => `--${level}${bossMode ? "BossMode" : ""}--${image}--`;
