import React from 'react';
import { View } from 'react-native';

import GameBoard from '../GameBoard';

import styles from './styles.js';

const GameOn = props => {
  const { level } = { ...props };
  return (
    <View style={styles.infoInner}>
      <GameBoard level={level} />
    </View>
  );
}

export default GameOn;
