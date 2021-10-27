const getGameSpecs = (level, isPortrait, gameWidth, gameHeight)  => ({
cols: level === 'hard' 
    ? isPortrait ? 8 : 12 
    : level === 'normal' 
      ? isPortrait ? 6 : 8
      : isPortrait ? 4 : 6,
  height: gameHeight,
  rows: level === 'hard' 
    ? isPortrait ? 12 : 8 
    : level === 'normal' 
      ? isPortrait ? 8 : 6
      : isPortrait ? 6 : 4,
  total: level === 'hard' ? 96 : level === 'normal' ? 48 : 24,
  width: gameWidth,
});

export default getGameSpecs;
