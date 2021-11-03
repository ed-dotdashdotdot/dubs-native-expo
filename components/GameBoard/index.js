import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Vibration,
  View,
} from 'react-native';
import allActions from '../../actions';

import ExpoFastImage from 'expo-fast-image';

import { defaultImages } from '../../configuration/config.json';
import getCorners from '../../js/helpers/getCorners';
import getGameArray from '../../js/helpers/getGameArray';
import getGameGridPositions from '../../js/helpers/getGameGridPositions';
import getGameSpecs from '../../js/helpers/getGameSpecs';
import isButtonFound from '../../js/helpers/isButtonFound';
import isPortrait from '../../js/helpers/isPortrait';
import sliceValue from '../../js/helpers/sliceValue';
import { ipAddress } from '../../configuration/config.json';

const GameBoard = props => {
  const { dimensions, level } = { ...props };
  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);
  const { gameActions, imagesActions } = { ...allActions };
  const dispatch = useDispatch();

  const { height, width } = useWindowDimensions();
  const isDevicePortrait = isPortrait(height, width);

  const gameWidth = dimensions.width - 4;
  const gameHeight = dimensions.height - 4;

  const gameSpecs = getGameSpecs(level, isDevicePortrait, gameWidth, gameHeight);
  let gameArray = [];
  if (game.data.lenth === 0) {
    const gameArray = getGameArray(level);
    gameArray.sort(() => (Math.random() > 0.5) ? 1 : -1);
  } else {
    gameArray = game.data;
  }

  // console.log('defaultImages:');
  // console.log(defaultImages);
  // console.log('-----');

  let imageToUse = '';
  // if (images.selected === "") {
  //   // get random image
  //   imageToUse = defaultImages[Math.floor(Math.random() * defaultImages.length)];
  //   dispatch(imagesActions.setImagesSelected(imageToUse));
  // } else {
  //   imageToUse = images.selected;
  // }

  useEffect(() => {
    console.log('images.loaded:');
    console.log(images.loaded);
    console.log('-');
    if (images.selected === "") {
      // get random image
      imageToUse = defaultImages[Math.floor(Math.random() * defaultImages.length)];
      dispatch(imagesActions.setImagesSelected(imageToUse));
    } 
    // else {
    //   imageToUse = images.selected;
    // }
    // console.log('imageToUse - useEffect:');
    // console.log(imageToUse);
    // console.log('-|-|-');
  }, []);

   imageToUse = images.selected;

  // const imgSrc = require('../../assets/game-images/2.jpg');
  // const imgSrc = {uri: `http://${ipAddress.server}/dubs-cdn/image/?image=${imageToUse}.jpg&size=large`};
  const imgSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageToUse}.jpg&size=large`;

  // console.log('imgSrc:');
  // console.log(imgSrc);
  // console.log('imageToUse:');
  // console.log(imageToUse);
  // console.log('-----');

  const makeSelection = buttonId => {
    dispatch(gameActions.setGameClicks(game.clicks + 1));
    dispatch(gameActions.setGameHighlight([]));
    // console.log(`game.selected: ${game.selected}`);
    // console.log(`buttonId:      ${buttonId}`);
    if (game.selected) {
      // console.log(`YES - game.selected`);
      if (game.selected === buttonId) {
        // console.log(`YES - game.selected === buttonId`);
        dispatch(gameActions.setGameSelected(''));
      } else {
        // console.log(`NOT - game.selected === buttonId`);
        // make comparison
        const clickedNumber = sliceValue(buttonId);
        const selectedNumber = sliceValue(game.selected);
        // console.log(`clickedNumber: ${clickedNumber}`);
        // console.log(`selectedNumber: ${selectedNumber}`);
        if (clickedNumber === selectedNumber) {
          // correct selection
          dispatch(gameActions.setGameFound([clickedNumber]));
          dispatch(gameActions.setGameSelected(''));
          // do not highlight if it's the last selection
          if (
            (game.selected !== '')
            && ((game.found.length + 1) !== (game.data.length / 2))
          ) {
            dispatch(gameActions.setGameLastMove('correct'));
            setTimeout(() => {
              dispatch(gameActions.setGameLastMove(''));
            }, 250);
          }
        } else {
          // incorrect selection
          dispatch(gameActions.setGameSelected(''));
          dispatch(gameActions.setGameHighlight([game.selected, buttonId]));
          dispatch(gameActions.setGameLastMove('incorrect'));
          setTimeout(() => {
            dispatch(gameActions.setGameHighlight([]));
            dispatch(gameActions.setGameLastMove(''));
          }, 250);
          Vibration.vibrate();
        }
      }
    } else {
      // console.log(`NOT - game.selected`);
      // add to selected
      dispatch(gameActions.setGameSelected(buttonId));
    }
    // console.log(game);
    // console.log(`\n`);
  };

  const topRightSquare = getCorners(level, isDevicePortrait).topRight;
  const bottomLeftSquare = getCorners(level, isDevicePortrait).bottomLeft;
  const bottomRightSquare = getCorners(level, isDevicePortrait).bottomRight;

  return (
    <View 
      style={[
        {
          display: 'flex',
          flexDirection: "row",
          flexWrap: 'wrap',
          height: gameSpecs.height,
          width: gameSpecs.width,
        }
      ]}
    >
      {
        gameArray.map((val, index) => {
          return (
            <View 
              key={`${val} - ${index}`}
              style={[
                {
                  height: gameSpecs.height / gameSpecs.rows,
                  opacity: isButtonFound(val, game.found) ? 0.1: 1,
                  overflow: 'hidden',
                  width: gameSpecs.width / gameSpecs.cols,
                  borderBottomLeftRadius: index === bottomLeftSquare ? 10 : 0,
                  borderBottomRightRadius: index === gameArray.length - 1 ? 10 : 0,
                  borderTopLeftRadius: index === 0 ? 10 : 0,
                  borderTopRightRadius: index === topRightSquare ? 10 : 0,
                }
              ]}
            >
              <Pressable
                disabled={isButtonFound(val, game.found) ? true: false}
                onPressIn={() => {
                  if (!isButtonFound(val, game.found)) {
                    makeSelection(val);
                  }
                }}
                style={[
                  {
                    // opacity: 0.25,
                  }
                ]}
              >
                {!isButtonFound(val, game.found) && (
                  <>
                    <ExpoFastImage
                      // onLoad={imageLoaded} 
                      // resizeMode={'contain'}
                      // source={{uri: `http://${ipAddress.server}/dubs-cdn/image/?image=${images.selected}`}}
                      // source={{
                      //   uri: imageSrc,
                      //   // headers: { Authorization: 'someAuthToken' },
                      //   // priority: FastImage.priority.normal,
                      // }}
                      cacheKey={`image-${images.selected}`}
                      resizeMode='stretch'
                      style={[
                        {
                          // borderRadius: index === 0 ? 24 : 0, // was 10
                          height: gameSpecs.height,
                          left: getGameGridPositions(
                            val, 
                            level, 
                            isDevicePortrait, 
                            gameSpecs.width, 
                            gameSpecs.height,
                            gameSpecs.rows,
                            gameSpecs.cols
                            ).x,
                          position: 'absolute',
                          top: getGameGridPositions(
                            val, 
                            level, 
                            isDevicePortrait, 
                            gameSpecs.width, 
                            gameSpecs.height,
                            gameSpecs.rows,
                            gameSpecs.cols
                          ).y,
                          width: gameSpecs.width,
                        }
                      ]}
                      uri={imgSrc}
                    />
                    {/* <Image
                      resizeMode='stretch'
                      source={imgSrc}
                      style={[
                        {
                          // borderRadius: index === 0 ? 24 : 0, // was 10
                          height: gameSpecs.height,
                          left: getGameGridPositions(
                            val, 
                            level, 
                            isDevicePortrait, 
                            gameSpecs.width, 
                            gameSpecs.height,
                            gameSpecs.rows,
                            gameSpecs.cols
                            ).x,
                          position: 'absolute',
                          top: getGameGridPositions(
                            val, 
                            level, 
                            isDevicePortrait, 
                            gameSpecs.width, 
                            gameSpecs.height,
                            gameSpecs.rows,
                            gameSpecs.cols
                          ).y,
                          width: gameSpecs.width,
                        }
                      ]}
                    /> */}
                  </>
                )}
                {game.selected === val && (
                  <>
                    <View
                      style={[
                        {
                          borderColor: 'white',
                          borderStyle: 'solid',
                          borderWidth: '2',
                          height: gameSpecs.height / gameSpecs.rows,
                          left: 0,
                          position: 'absolute',
                          top: 0,
                          width: gameSpecs.width / gameSpecs.cols,
                        }
                      ]}
                    />
                    <View
                      style={[
                        {
                          borderColor: 'black',
                          borderStyle: 'solid',
                          borderWidth: '2',
                          height: gameSpecs.height / gameSpecs.rows - 4,
                          left: 2,
                          position: 'absolute',
                          top: 2,
                          width: gameSpecs.width / gameSpecs.cols - 4,
                        }
                      ]}
                    />
                  </>
                )}
              </Pressable>
            </View>
          )
        })
      }
    </View>
  );
}

export default GameBoard;
