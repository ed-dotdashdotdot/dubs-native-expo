import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import globalStyles from '../../css/style.js';

const PageHeading = props => {
  const { colour, text } = { ...props };
  // console.log(colour)

  return (
    <View style={[
      {
        borderRadius: 8,
        backgroundColor: colour === 'green' 
          ? '#00aa00' 
          : colour === 'amber' 
            ? '#ff9900' 
            : colour === 'red' 
              ? '#aa0000' 
              : '#000000',
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
