import React, { useEffect } from 'react';
import { Text, ScrollView, View, } from 'react-native';

import Translate from '../../../Translate';

import globalStyles from '../../../../css/style.js';

const SectionHeading = props => {
  const {
    // children,
    // classes,
    gameStatus,
    textKey,
    // type,
    // ...rest
  } = { ...props };
  // const Component = type;

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

// SectionHeading.defaultProps = {
//   textKey: 'h2'
// };

export default SectionHeading;
