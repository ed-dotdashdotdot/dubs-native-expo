import React from 'react';
import { Text } from 'react-native';

import { colours, fontFamily } from '../../../../configuration/config.json';

const WhatIsBossModeCardEquals = () => (
  <Text 
    accessible={false}
    style={{
      color: colours.white,
      fontFamily: fontFamily,
      fontSize: 48,
      fontWeight: 'bold',
      textAlign: 'center',
      width: 72,
    }}
  >
    =
  </Text>
);

export default WhatIsBossModeCardEquals;
