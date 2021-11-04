import React from 'react';
import { View } from 'react-native';

import GameBoard from '../GameBoard';

const GameOn = props => {
  const { dimensions, level } = { ...props };
  return (
    <View>
      <GameBoard
        dimensions={dimensions}
        level={level}
      />
    </View>
  );
}

export default GameOn;
