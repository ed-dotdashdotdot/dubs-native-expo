import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';
import allActions from '../../actions';

import ExpoFastImage from 'expo-fast-image';

import { defaultImages } from '../../configuration/config.json';
import { ipAddress } from '../../configuration/config.json';
import timerStartDate from '../../js/helpers/timerStartDate';

const LoadingImage = props => {
  let { imageToUse } = { ...props };
  if (imageToUse == '') {
    imageToUse = defaultImages[Math.floor(Math.random() * defaultImages.length)];
  }

  const timer = useSelector(state => state.timer);
  const { gameActions, imagesActions, timerActions } = { ...allActions };
  const dispatch = useDispatch();
  
  const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageToUse}.jpg&size=large`;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 24,
          textAlign: 'center',
        }}  
      >
        Loading...
      </Text>
      <ExpoFastImage
        // onLoad={() => {}}
        // onLoadStart={() => {}}
        onLoad={() => {
          dispatch(gameActions.setGameStatus('game-on'));
          dispatch(imagesActions.setImagesLoaded(true));
          dispatch(imagesActions.setImagesSelected(imageToUse));
          dispatch(timerActions.setTimerStart(timerStartDate(timer.paused)));
          dispatch(timerActions.setTimerEnd(''));
          dispatch(timerActions.setTimerPaused(0));
          dispatch(timerActions.setTimerSaved(0));
          dispatch(timerActions.setTimerStatus('game-on'));
        }}
        // onLoadEnd={() => {}}
        uri={imageSrc}
        cacheKey={`image-${imageToUse}-large`}
        style={{
          height: 1,
          opacity: 0,
          width: 1,
        }}
      />
    </View>
  );
}

export default LoadingImage;
