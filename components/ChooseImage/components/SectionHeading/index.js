import React from 'react';
import { Text, View, } from 'react-native';

import Translate from '../../../Translate';
import { colours, fontFamily } from '../../../../configuration/config.json';

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
          borderRadius: 8,
          borderBottomWidth: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          padding: 12,
        },
        globalStyles.border,
      ]}
    >
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        <Translate textKey={textKey} />
      </Text>
    </View>
  );
};

export default SectionHeading;
