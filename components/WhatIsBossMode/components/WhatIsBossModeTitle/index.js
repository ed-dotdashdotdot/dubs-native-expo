import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Translate from '../../../Translate';

import { 
  colours, 
  fontFamily 
} from '../../../../configuration/config.json';

const WhatIsBossModeTitle = ({ textKey }) => (
  <Text
    accessible={true}
    accessibilityRole='header'
    style={{
      color: colours.white,
      fontFamily: fontFamily,
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 12,
      textAlign: 'center',
    }}
  >
    <Translate textKey={textKey} />
  </Text>
);

WhatIsBossModeTitle.propTypes = {
  textKey: PropTypes.string.isRequired,
};

export default WhatIsBossModeTitle;
