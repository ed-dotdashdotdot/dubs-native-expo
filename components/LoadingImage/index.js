import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import ExpoFastImage from 'expo-fast-image';

import Translate from '../Translate';

import { durationStartDate } from '../../js/helpers/durationStartDate';
import { getCurrentHighScore } from '../../js/helpers/getCurrentHighScore';

import { colours, defaultImages, ipAddress } from '../../configuration/config.json';

const LoadingImage = props => {
  let { imageToUse } = { ...props };
  if (imageToUse == '') {
    imageToUse = defaultImages[Math.floor(Math.random() * defaultImages.length)];
  }

  const game = useSelector(state => state.game);
  const duration = useSelector(state => state.duration);
  const { gameActions, imagesActions, durationActions } = { ...allActions };
  const dispatch = useDispatch();
  
  const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageToUse}.jpg&size=large`;

  // console.log('---');
  // console.log(imageToUse, level);
  // console.log('---');

  const getCurrentHighScoreVal = getCurrentHighScore(`${game.level}--${imageToUse}`, duration.highScores);

  console.log(':::::-----:::::');
  console.log('getCurrentHighScoreVal:');
  console.log(getCurrentHighScoreVal);
  console.log(':::::-----:::::');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: colours.white,
          fontSize: 24,
          textAlign: 'center',
        }}  
      >
        <Translate textKey='loading' />
      </Text>
      <ExpoFastImage
        // onLoad={() => {}}
        // onLoadStart={() => {}}
        onLoad={() => {
          dispatch(gameActions.setGameStatus('game-on'));
          if (getCurrentHighScoreVal !== 0) { 
            dispatch(gameActions.setGameHighScore(getCurrentHighScoreVal));
          }
          dispatch(imagesActions.setImagesLoaded(true));
          dispatch(imagesActions.setImagesSelected(imageToUse));
          dispatch(durationActions.setDurationStart(durationStartDate(duration.paused)));
          dispatch(durationActions.setDurationEnd(''));
          dispatch(durationActions.setDurationPaused(0));
          dispatch(durationActions.setDurationSaved(0));
          dispatch(durationActions.setDurationStatus('game-on'));
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
};

LoadingImage.propTypes = {
  imageToUse: PropTypes.string.isRequired,
};

export default LoadingImage;
