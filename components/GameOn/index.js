import React from 'react';
import { View } from 'react-native';

import GameBoard from '../GameBoard';

const GameOn = props => {
  const { level } = { ...props };
  return (
    <View>
      <GameBoard level={level} />
    </View>
  );
}

export default GameOn;
