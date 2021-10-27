import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // StyleSheet,
  // Button,
  // Text,
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
        gameArray.map(val => {
          return (
            <View 
              key={val}
              style={{
                // backgroundColor: 'red',
                height: gameSpecs.height / gameSpecs.rows,
                overflow: 'hidden',
                width: gameSpecs.width / gameSpecs.cols,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.25}
                // onPress={() => alert(val)}
                onPress={e => {
                  makeSelection(val);
                }}
              >
                <Image
                  resizeMode='stretch'
                  source={imgSrc}
                  style={{
                    borderRadius: 10,
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
              </TouchableOpacity>
            </View>
          )
        })
      }
    </View>
  );
}

export default GameBoard;
