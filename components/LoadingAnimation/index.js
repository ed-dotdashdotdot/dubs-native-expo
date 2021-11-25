import React from 'react';
import { Text } from 'react-native';
import Translate from '../Translate';

import { 
  colours, 
  fontFamily, 
} from '../../configuration/config.json';

const LoadingAnimation = () => (
  <Text
    accessible={false}
    style={{
      color: colours.white,
      fontFamily: fontFamily,
      fontSize: 48,
      textAlign: 'center',
    }}
  >
    <Translate textKey='loading' />
  </Text>
);

export default LoadingAnimation;
