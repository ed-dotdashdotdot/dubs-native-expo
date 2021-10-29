import React from 'react';
import { Text, View } from 'react-native';

import Translate from '../Translate';

import gameOnHeaderStyles from './styles.js';

const GameOnHeader = props => {
  const { level } = { ...props };
  return (
    <View style={[gameOnHeaderStyles.header]}>
      <Text style={{
        color: 'white',
        fontFamily: 'Courier New',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        <Translate textKey={level} />
      </Text>
    </View>
  );
}

export default GameOnHeader;
