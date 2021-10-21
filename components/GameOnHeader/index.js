import React from 'react';
import { Text } from 'react-native';

import Translate from '../Translate';

import styles from './styles.js';

const GameOnHeader = props => {
  const { level } = { ...props };
  return (
    <Text style={styles.gameOnHeader}>
      <Translate textKey={level} />
    </Text>
  );
}

export default GameOnHeader;
