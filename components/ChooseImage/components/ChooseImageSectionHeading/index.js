import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Translate from '../../../Translate';
import { 
  colours, 
  fontFamily 
} from '../../../../configuration/config.json';

import globalStyles from '../../../../css/globalStyles.js';

const SectionHeading = ({ textKey }) => (
  <View
    style={[
      {
        borderBottomWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
      globalStyles.border,
      globalStyles.borderRadius8,
      globalStyles.padding12,
    ]}
  >
    <Text
      accessible={true}
      accessibilityRole='header'
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

SectionHeading.propTypes = {
  textKey: PropTypes.string.isRequired,
};

export default SectionHeading;
