import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // StyleSheet,
  // Button,
  Text,
  View,
  // ScrollView,
  Image,
  // ImageBackground,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import allActions from '../../actions';

// import gameGrid from '../../js/helpers/gameGrid';
// import getCorners from '../../js/helpers/getCorners';
// import getSquares from '../../js/helpers/getSquares';
import getGameArray from '../../js/helpers/getGameArray';
import getGameGridPositions from '../../js/helpers/getGameGridPositions';
import getGameSpecs from '../../js/helpers/getGameSpecs';
import isButtonFound from '../../js/helpers/isButtonFound';
import sliceValue from '../../js/helpers/sliceValue';

const GameBoard = props => {
  const { level } = { ...props };

  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const { height, width } = useWindowDimensions();
  const isPortrait = () => {
    return height >= width;
  };

  console.log(game);

  const gameWidth = width - 24 - 4;
  const gameHeight = height - 128 - 24 - 24 - 4;

  const gameSpecs = getGameSpecs(level, isPortrait(), gameWidth, gameHeight);
  let gameArray = [];
  if (game.data.lenth === 0) {
    const gameArray = getGameArray(level);
    gameArray.sort(() => (Math.random() > 0.5) ? 1 : -1);
  } else {
    gameArray = game.data;
  }

  const imgSrc = require('../../assets/game-images/2.jpg');

  const makeSelection = buttonId => {
    // console.log(`buttonId: ${buttonId}`);
    dispatch(gameActions.setGameClicks(game.clicks + 1));
    dispatch(gameActions.setGameHighlight([]));
    // console.log(game);
    console.log(`game.selected: ${game.selected}`);
    console.log(`buttonId:      ${buttonId}`);
    
    if (game.selected) {
      console.log(`YES - game.selected`);
      if (game.selected === buttonId) {
        console.log(`YES - game.selected === buttonId`);
        dispatch(gameActions.setGameSelected(''));
      } else {
        console.log(`NOT - game.selected === buttonId`);
        // make comparison
        const clickedNumber = sliceValue(buttonId);
        const selectedNumber = sliceValue(game.selected);
        console.log(`clickedNumber: ${clickedNumber}`);
        console.log(`selectedNumber: ${selectedNumber}`);
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
        }
      }
    } else {
      console.log(`NOT - game.selected`);
      // add to selected
      dispatch(gameActions.setGameSelected(buttonId));
    }
    console.log(game);
    console.log(`\n`);
  };

  // console.log(game.found);
  // console.log(game.found.length);

  return (
    <View 
      style={{
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        height: gameSpecs.height,
        width: gameSpecs.width,
      }}
    >
      {
        gameArray.map((val, index) => {
          return (
            <View 
              key={`${val} - ${index}`}
              style={{
                // backgroundColor: 'red',
                // borderColor: 'green',
                // borderStyle: 'solid',
                // borderWidth: game.selected === val ? 0 : 0,
                height: gameSpecs.height / gameSpecs.rows,
                opacity: isButtonFound(val, game.found) ? 0.1: 1,
                overflow: 'hidden',
                width: gameSpecs.width / gameSpecs.cols,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.25}
                onPress={() => {
                  if (isButtonFound(val, game.found)) {
                    console.log(`${val} - FOUND`);
                  } else {
                    makeSelection(val);
                  }
                }}
                disabled={isButtonFound(val, game.found) ? true: false}
              >
                {!isButtonFound(val, game.found) &&
                  <Image
                    resizeMode='stretch'
                    source={imgSrc}
                    style={{
                      borderRadius: 24, // was 10
                      height: gameSpecs.height,
                      left: getGameGridPositions(
                        val, 
                        level, 
                        isPortrait(), 
                        gameSpecs.width, 
                        gameSpecs.height,
                        gameSpecs.rows,
                        gameSpecs.cols
                        ).x,
                      position: 'absolute',
                      top: getGameGridPositions(
                        val, 
                        level, 
                        isPortrait(), 
                        gameSpecs.width, 
                        gameSpecs.height,
                        gameSpecs.rows,
                        gameSpecs.cols
                      ).y,
                      width: gameSpecs.width,
                    }}
                  />
                }
                {game.selected === val && (
                  <>
                    <View
                      style={{
                        borderColor: 'white',
                        borderStyle: 'solid',
                        borderWidth: '2',
                        height: gameSpecs.height / gameSpecs.rows,
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: gameSpecs.width / gameSpecs.cols,
                      }}
                    />
                    <View
                      style={{
                        borderColor: 'black',
                        borderStyle: 'solid',
                        borderWidth: '2',
                        height: gameSpecs.height / gameSpecs.rows - 4,
                        left: 2,
                        position: 'absolute',
                        top: 2,
                        width: gameSpecs.width / gameSpecs.cols - 4,
                      }}
                    />
                  </>
                )}
              </TouchableOpacity>
            </View>
          )
        })
      }
    </View>
  );
}

export default GameBoard;
