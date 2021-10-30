import React from 'react';
import { Text, View } from 'react-native';

import Translate from '../Translate';

const GameOnHeader = props => {
  const { level } = { ...props };
  return (
    <View 
      style={[
        {
          flex: 1,
          height: 24,
          justifyContent: 'center',
          position: 'absolute',
          top: 12,
          width: '100%',
        }
      ]}
    >
      <Text 
        style={[
          {
            color: 'white',
            fontFamily: 'Courier New',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }
        ]}
      >
        <Translate textKey={level} />
      </Text>
    </View>
  );
}

export default GameOnHeader;
