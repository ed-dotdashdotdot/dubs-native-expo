export const getHighScoreKeyHERE = (
  level,
  bossMode,
  image
) => {
  return `--${level}${bossMode ? "BossMode" : ""}--${image}--`;
}
