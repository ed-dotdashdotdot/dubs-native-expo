import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { colours, fontFamily } from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const PageHeading = props => {
  const { colour, text } = { ...props };
  return (
    <View 
      style={[
        {
          backgroundColor: colour === 'green' 
            ? colours.green  
            : colour === 'amber' 
              ? colours.amber  
              : colour === 'red' 
                ? colours.red  
                : colours.black ,
          marginBottom: 24,
          padding: 12,
        },
        globalStyles.border,
        globalStyles.borderRadius8,
      ]}
    >
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 32,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
          textAlign: 'center',
          width: '100%',
        }}
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
