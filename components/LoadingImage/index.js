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

import { ipAddress } from '../../configuration/config.json';

const LoadingImage = props => {
  const { imageToUse } = { ...props };
  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);
  const { gameActions, imagesActions } = { ...allActions };
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('LOADIMAGE - USEEFFECT');
    // dispatch(imagesActions.setImagesLoaded(true));
  }, []);

  const imageLoaded = () => {
    // this.setState(() => ({ loaded: true }))
    // console.log('images.loaded:');
    // console.log(images.loaded);
    // console.log('images:');
    // console.log(images);
    console.log('imageLoaded');
    return () => true;
  };

  const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${images.selected}`;

  return (
    <ExpoFastImage
      // onLoad={imageLoaded} 
      // resizeMode={'contain'}
      // source={{uri: `http://${ipAddress.server}/dubs-cdn/image/?image=${images.selected}`}}
      // source={{
      //   uri: imageSrc,
      //   // headers: { Authorization: 'someAuthToken' },
      //   // priority: FastImage.priority.normal,
      // }}
      uri={imageSrc}
      cacheKey={`image-${images.selected}`}
    />
  );
}

export default LoadingImage;
