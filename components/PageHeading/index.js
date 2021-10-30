import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import globalStyles from '../../css/style.js';

const PageHeading = props => {
  const { colour, text } = { ...props };

  return (
    <View style={[
      {
        borderRadius: 8,
        backgroundColor: colour === 'green' 
          ? 'green' 
          : colour === 'amber' 
            ? 'orange' 
            : colour === 'red' 
              ? 'red' 
              : 'transparent',
        marginBottom: 24,
      },
      globalStyles.border,
      globalStyles.padding12,
    ]}>
      <Text
        style={[
          {
            fontSize: 32,
            fontWeight: 'bold',
            margin: 0,
            padding: 0,
            textAlign: 'center',
            width: '100%',
          },
          globalStyles.colorWhite,
          globalStyles.fontFamilyCourier,
        ]}
      >
        { text }
      </Text>
    </View>
  );
};

PageHeading.propTypes = {
  colour: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default PageHeading;
