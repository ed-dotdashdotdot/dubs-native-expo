import React from 'react';
import { Text, ScrollView, TouchableOpacity, View, } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../../../actions';

// import Button from '../../../../../ui.components/button';

// import DrawThumbStyled from './styles';
// import './css/index.scss';

const DrawThumb = props => {
  const { imageRef } = { ...props };

  const { imagesActions, gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const imageSrc = `http://localhost/dubs-cdn/image/?image=${imageRef}.jpg&size=small`;
  // const imageSrc = `../../../../../../img/game-board/small/${imageRef}.jpg`;

  return (
    <View id="thumb">
      <TouchableOpacity
        onPress={() => {
          dispatch(gameActions.setGameStatus('image-detail'));
          dispatch(imagesActions.setImagesDetail(imageRef));
        }}
        type="button"
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            marginBottom: 12,
          }}
        >
          {/* <img src={imageSrc} alt="" /> */}
          {imageSrc}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawThumb;
