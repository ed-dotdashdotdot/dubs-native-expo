import React from 'react';
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

// import gameGrid from '../../js/helpers/gameGrid';
// import getCorners from '../../js/helpers/getCorners';
// import getSquares from '../../js/helpers/getSquares';
import gameArray from '../../js/helpers/gameArray';
import gameGridPositions from '../../js/helpers/gameGridPositions';

const GameBoard = props => {
  const { level } = { ...props };
  const { height, width } = useWindowDimensions();
  const isPortrait = () => {
    return height >= width;
  };

  const gameWidth = width - 24 - 4;
  const gameHeight = height - 128 - 24 - 24 - 4;

  const gameSpecs = {
    cols: level === 'hard' 
      ? isPortrait() ? 8 : 12 
      : level === 'normal' 
        ? isPortrait() ? 6 : 8
        : isPortrait() ? 4 : 6,
    height: gameHeight,
    rows: level === 'hard' 
      ? isPortrait() ? 12 : 8 
      : level === 'normal' 
        ? isPortrait() ? 8 : 6
        : isPortrait() ? 6 : 4,
    total: level === 'hard' ? 96 : level === 'normal' ? 48 : 24,
    width: gameWidth,
  };
  // let gameArray = [];
  // for (let i=0; i < gameSpecs.total; i++) {
  //   gameArray.push(i);
  // }
  // alert(gameArray(level).length);

  const gameSquares = gameArray(level);
  // gameSquares.sort(() => (Math.random() > 0.5) ? 1 : -1);

  const imgSrc = require('../../assets/game-images/2.jpg');

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
        gameSquares.map(val => {
          return (
            <View 
              key={val}
              style={{
                height: gameSpecs.height / gameSpecs.rows,
                overflow: 'hidden',
                width: gameSpecs.width / gameSpecs.cols,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() => alert(val)}
              >
                <Image
                  resizeMode='stretch'
                  source={imgSrc}
                  style={{
                    borderRadius: 10,
                    height: gameSpecs.height,
                    left: gameGridPositions(
                      val, 
                      level, 
                      isPortrait(), 
                      gameSpecs.width, 
                      gameSpecs.height,
                      gameSpecs.rows,
                      gameSpecs.cols
                      ).x,
                    position: 'absolute',
                    top: gameGridPositions(
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
