import React from 'react';
import { Text } from 'react-native';

import Translate from '../Translate';

import gameOnHeaderStyles from './styles.js';

const GameOnHeader = props => {
  const { level } = { ...props };
  return (
    <Text style={gameOnHeaderStyles.header}>
      <Translate textKey={level} />
    </Text>
  );
}

export default GameOnHeader;
