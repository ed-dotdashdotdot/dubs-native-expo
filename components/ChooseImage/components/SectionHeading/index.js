import React from 'react';
import { Text, View, } from 'react-native';

import Translate from '../../../Translate';

import globalStyles from '../../../../css/style.js';

const SectionHeading = props => {
  const {
    gameStatus,
    textKey,
  } = { ...props };

  return (
    <View
      style={[
        {
          borderColor: 'white',
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 2,
          borderBottomWidth: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          padding: 12,
        }
      ]}
    >
      <Text
        style={[
          {
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          },
          globalStyles.fontFamilyCourier
        ]}
      >
        <Translate textKey={textKey} />
      </Text>
    </View>
  );
};

export default SectionHeading;
