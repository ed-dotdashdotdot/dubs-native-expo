export const isGameOver = (
  status,
  dataLength,
  foundLength
) => (!!(status === 'game-on' && foundLength !== 0 && foundLength === (dataLength / 2)));
