import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import allActions from '../../actions';

// import FastImage from 'react-native-fast-image';
import ExpoFastImage from 'expo-fast-image';

import { defaultImages } from '../../configuration/config.json';
import { ipAddress } from '../../configuration/config.json';
import timerStartDate from '../../js/helpers/timerStartDate';

const LoadingImage = props => {
  let { imageToUse } = { ...props };
  if (imageToUse == '') {
    imageToUse = defaultImages[Math.floor(Math.random() * defaultImages.length)];
  }

  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);
  const timer = useSelector(state => state.timer);
  const { gameActions, imagesActions, timerActions } = { ...allActions };
  const dispatch = useDispatch();

  const imageLoaded = () => {
    // this.setState(() => ({ loaded: true }))
    console.log('imageLoaded');
    return () => true;
  };
  
  // const imageSrc = {
  //   uri: `http://${ipAddress.server}/dubs-cdn/image/?image=${imageToUse}&size=large&qwe=123`,
  //   cache: 'force-cache'
  // };
  const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageToUse}.jpg&size=large`;
  // const imageSrc = `http://${ipAddress.server}/dubs-cdn/img/large/${imageToUse}.jpg`;

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
        // onLoad={imageLoaded} 
        // onLoad={() => {
        //   console.log('onLoad');
        //   // dispatch(imagesActions.setImagesLoaded(true));
        // }}

        // onLoadStart={() => {
        //   // console.log("onLoadStart here");
        // }}
        onLoad={() => {
          // console.log("onLoad here");
          dispatch(gameActions.setGameStatus('game-on'));
          dispatch(imagesActions.setImagesLoaded(true));
          dispatch(imagesActions.setImagesSelected(imageToUse));
          // console.log(timerStartDate(timer.paused));
          // console.log(timer.start);
          dispatch(timerActions.setTimerStart(timerStartDate(timer.paused)));
          dispatch(timerActions.setTimerEnd(''));
          dispatch(timerActions.setTimerPaused(0));
          dispatch(timerActions.setTimerSaved(0));
          // dispatch(timerActions.setTimerStatus(''));
          dispatch(timerActions.setTimerStatus('game-on'));
          // console.log(timer.start);
          // start timer
        }}
        // onLoadEnd={() => {
        //   // console.log("onLoadEnd here");
        // }}
        // defaultSource={NoProfile}
        //  loadingIndicatorSource={require("@images/profile_placeholder.png")}


        // resizeMode={'contain'}
        // source={{uri: `http://${ipAddress.server}/dubs-cdn/image/?image=${images.selected}`}}
        // source={{
        //   uri: imageSrc,
        //   // headers: { Authorization: 'someAuthToken' },
        //   // priority: FastImage.priority.normal,
        // }}
        uri={imageSrc}
        cacheKey={`image-${imageToUse}-large`}
        style={{
          backgroundColor: 'red',
          borderColor: 'white',
          // borderStyle: 'solid',
          borderWidth: 2,
          height: 10,
          width: 10,
          opacity: 0,
        }}
      />
      {/* <Text
        style={{
          color: 'white',
          fontSize: 50,
        }}  
      >
        {imageSrc}
      </Text> */}
    </View>
  );
}

export default LoadingImage;
