import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../../actions';

import ExpoFastImage from 'expo-fast-image';

import { 
  colours, 
  ipAddress 
} from '../../../../configuration/config.json';

import globalStyles from '../../../../css/style';

const YourHighScoresDrawThumb = props => {
  const { 
    dimensions, 
    imageRef 
  } = { ...props };

  // const maxHeight = dimensions.height - 24 - 24 - 8;
  // const maxWidth = dimensions.width - 24 - 24 - 8;
  // const imagesPerRow = dimensions.width > 999 ? 6 : dimensions.width > 600 ? 4 : 2;

  // const { imagesActions, gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageRef}.jpg&size=small`;

  return (
    <View 
      style={[
        { 
          // padding: 6,
        }, {
          // height: (maxWidth / imagesPerRow),
          // width: (maxWidth / imagesPerRow),
          height: 96,
          width: 96,
        }
      ]}
    >
      {/* <TouchableOpacity
        accessible={true}
        accessibilityRole='imagebutton'
        // onPress={() => {
        //   dispatch(gameActions.setGameStatus('image-detail'));
        //   dispatch(imagesActions.setImagesDetail(imageRef));
        // }}
      > */}
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
        {/* <Text
          style={[
            {
              borderColor: colours.white,
              borderWidth: 2,
              height: '100%',
              width: '100%',
            },
            globalStyles.borderRadius8,
          ]}
        >
          {imageSrc}
        </Text> */}
      {/* </TouchableOpacity> */}
    </View>
  );
};

YourHighScoresDrawThumb.propTypes = {
  dimensions: PropTypes.object.isRequired,
  imageRef: PropTypes.string.isRequired,
};

export default YourHighScoresDrawThumb;