import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import ExpoFastImage from 'expo-fast-image';

import { 
  colours, 
  ipAddress 
} from '../../../../configuration/config.json';

import globalStyles from '../../../../css/style';

const YourHighScoresDrawThumb = ({ imageRef }) => {
  const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageRef}.jpg&size=small`;
  return (
    <View 
      style={{
        height: 96,
        width: 96,
      }}
    >
      <ExpoFastImage
        uri={imageSrc}
        cacheKey={`image-${imageRef}-small`}
        style={[
          {
            borderColor: colours.white,
            borderWidth: 2,
            height: '100%',
            width: '100%',
          },
          globalStyles.borderRadius8,
        ]}
      />
    </View>
  );
};

YourHighScoresDrawThumb.propTypes = {
  imageRef: PropTypes.string.isRequired,
};

export default YourHighScoresDrawThumb;
