export const getHighScoreKey = (
  level,
  bossMode,
  image
) => {
  return `--${level}${bossMode ? "BossMode" : ""}--${image}--`;
}
