import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';

import gameGrid from '../../js/helpers/gameGrid';
import getCorners from '../../js/helpers/getCorners';
import getSquares from '../../js/helpers/getSquares';
import gameGridPositions from '../../js/helpers/gameGridPositions';

const GameBoard = props => {
  const { level } = { ...props };

  let squares = getSquares(level);

  const { height, width } = useWindowDimensions();
  const isPortrait = () => {
    return height >= width;
  };
  const gameHeight = height - 176 - 4;
  const gameWidth = width - (12 * 2) - 4;

  const imgSrc = require('../../assets/game-images/6x4-grid.jpg');
  const imgWidth = isPortrait() 
    ? gameGrid(level, gameHeight, gameWidth, isPortrait()).height
    : gameGrid(level, gameHeight, gameWidth, isPortrait()).width
  ;
  const imgHeight = isPortrait() 
    ? gameGrid(level, gameHeight, gameWidth, isPortrait()).width
    : gameGrid(level, gameHeight, gameWidth, isPortrait()).height
  ;

  return (
    <View style={{ display: 'flex' }}>
      <View style={{ 
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {
          squares.map((val, index) => {
            return (
              <View
                key={val}
                style={{
                  borderBottomLeftRadius: index === getCorners(level, isPortrait()).bottomLeft && 100,
                  borderBottomRightRadius: index === squares.length - 1 && 100,
                  borderTopLeftRadius: index === 0 && 100,
                  borderTopRightRadius: index === getCorners(level, isPortrait()).topRight && 100,
                  height: gameGrid(level, gameHeight, gameWidth, isPortrait()).height,
                  left: 0,
                  position: 'relative',
                  top: 0,
                  width: gameGrid(level, gameHeight, gameWidth, isPortrait()).width,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderColor: 'red',
                    borderStyle: 'solid',
                    borderWidth: 2,
                  }}
                  activeOpacity={0.75}
                >
                  <View style={{
                    width: gameGrid(level, gameHeight, gameWidth, isPortrait()).width,
                  }}>
                    <Image
                      resizeMode='cover'
                      source={imgSrc}
                      style={{
                        left: gameGridPositions(index, level, isPortrait(), imgWidth, imgHeight).x,
                        opacity: 0.99,
                        top: gameGridPositions(index, level, isPortrait(), imgWidth, imgHeight).y,
                      }} 
                    />
                  </View>
                </TouchableOpacity>
              </View>
            );
          })
        }
      </View>
    </View>
  );
}

export default GameBoard;
