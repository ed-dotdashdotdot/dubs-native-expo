import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Translate from '../Translate';

import { colours, fontFamily } from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const PageHeading = props => {
  const { colour, textKey } = { ...props };
  return (
    <View 
      style={[
        {
          marginBottom: 24,
        }, {
          backgroundColor: colour === 'green' 
            ? colours.green  
            : colour === 'amber' 
              ? colours.amber  
              : colour === 'red' 
                ? colours.red  
                : colours.black,
        },
        globalStyles.border,
        globalStyles.borderRadius8,
        globalStyles.padding12,
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
        <Translate textKey={textKey} />
      </Text>
    </View>
  );
};

PageHeading.propTypes = {
  colour: PropTypes.string,
  textKey: PropTypes.string.isRequired
};

export default PageHeading;
