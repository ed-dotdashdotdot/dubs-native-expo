import React from 'react';
// import { View } from 'react-native';

import GameBoard from '../GameBoard';

const GameOn = props => {
  const { dimensions, level } = { ...props };
  return (
    <GameBoard
      dimensions={dimensions}
      level={level}
    />
  );
}

export default GameOn;
