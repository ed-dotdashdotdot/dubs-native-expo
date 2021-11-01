import React from 'react';
import { Image, Text, ScrollView, TouchableOpacity, View, } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../../../actions';

import { ipAddress } from '../../../../configuration/config.json';

const DrawThumb = props => {
  const { 
    dimensions, 
    imageRef 
  } = { ...props };

  const maxHeight = dimensions.height - 24 - 24 - 8;
  const maxWidth = dimensions.width - 24 - 24 - 8;
  const imagesPerRow = dimensions.width > 999 ? 6 : dimensions.width > 600 ? 4 : 2;

  const { imagesActions, gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const imageSrc = {uri: `http://${ipAddress.server}/dubs-cdn/image/?image=${imageRef}.jpg&size=small`};
  // const imageSrc = `../../../../../../img/game-board/small/${imageRef}.jpg`;

  return (
    <View 
      id="thumb"
      style={[
        { 
          height: (maxWidth / imagesPerRow),
          padding: 6,
          width: (maxWidth / imagesPerRow),
        }
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(gameActions.setGameStatus('image-detail'));
          dispatch(imagesActions.setImagesDetail(imageRef));
        }}
        type="button"
      >
        <Image
          source={imageSrc}
          style={[
            {
              height: '100%',
              width: '100%',
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 8,
            }
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrawThumb;
