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
  // alert(level);
  // const squares = new Array(24);

  let squares = getSquares(level);

  const { height, width } = useWindowDimensions();
  const isPortrait = () => {
    return height >= width;
  };
  const gameHeight = height - 176 - 4;
  const gameWidth = width - (12 * 2) - 4;

  // const gameGrid = (level, height, width, portrait) => {
  //   if (portrait === false) {
  //     return {
  //       width: width / 6,
  //       height: height / 4,
  //     }  
  //   }
  //   return {
  //     width: width / 4,
  //     height: height / 6,
  //   }
  // };

  // const borderRadius = 100;

  // const imgSrc = isPortrait() 
  //   ? require('../../assets/game-images/2.jpg') 
  //   : require('../../assets/game-images/2.jpg')
  // ;
  const imgSrc = require('../../assets/game-images/6x6-grid.jpg');
  // const imgSrc = require('../../assets/game-images/2.jpg');
  const imgWidth = isPortrait() 
    ? gameGrid(level, gameHeight, gameWidth, isPortrait()).width
    : gameGrid(level, gameHeight, gameWidth, isPortrait()).height
    // ? gameHeight
    // : gameWidth
    // ? 960 / 4
    // : 960 / 4
    // ? height
    // : width
  ;
  alert(imgWidth);
  const imgHeight = isPortrait() 
    ? gameGrid(level, gameHeight, gameWidth, isPortrait()).height
    : gameGrid(level, gameHeight, gameWidth, isPortrait()).width
    // ? gameWidth
    // : gameHeight
    // ? 960 / 4
    // : 960 / 4
    // ? height / 6
    // : width / 6
  ;
  // const imgWidth = isPortrait() 
  //   ? gameWidth
  //   : gameHeight
  // ;
  // const imgHeight = isPortrait() 
  //   ? gameHeight
  //   : gameWidth
  // ;
  // alert(`imgHeight: ${imgHeight} - imgWidth: ${imgWidth}`);
  // alert(imgWidth);

  return (
    <View style={{ display: 'flex' }}>

      {/* <View>
        <Image
          source={require('../../assets/game-images/2-small.jpg')}
        />
      </View> */}
      {/* <Text style={{ fontSize: 48 }}>
        {squares.length}
      </Text> */}

      <View style={{ 
        // display: 'flex',
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // left: 0,
        // position: 'absolute',
        // top: 0,
        // marginBottom: 48,
        // marginTop: 0,/
        // width: '100%', 
        // height: '100%', 
        // overflow: 'hidden',
        // borderWidth: 2,
        // borderStyle: 'solid',
        // borderColor: 'red',
      }}>
        {
          squares.map((val, index) => {
            return (
              <View
                key={val}
                style={{
                  // backgroundColor: `rgb(
                  //   ${Math.floor(Math.random() * 255)}, 
                  //   ${Math.floor(Math.random() * 255)}, 
                  //   ${Math.floor(Math.random() * 255)}
                  // )`,
                  borderBottomLeftRadius: index === getCorners(level, isPortrait()).bottomLeft && 100,
                  borderBottomRightRadius: index === squares.length - 1 && 100,
                  borderTopLeftRadius: index === 0 && 100,
                  borderTopRightRadius: index === getCorners(level, isPortrait()).topRight && 100,
                  height: gameGrid(level, gameHeight, gameWidth, isPortrait()).height,
                  // height: imgHeight,
                  left: 0,
                  position: 'relative',
                  top: 0,
                  // width: imgWidth,
                  width: gameGrid(level, gameHeight, gameWidth, isPortrait()).width,
                  // borderWidth: 1,
                  // borderStyle: 'solid',
                  // borderColor: 'red',
                }}
              >
                <TouchableOpacity
                  style={{
                    // fontSize: 12,
                    // borderColor: 'red',
                    // borderStyle: 'solid',
                    // borderWidth: 2,
                    // width: '100%',
                    // height: '100%',
                    // selfAlign: 'center',
                    // textAlign: 'center',
                    // display: 'flex',
                  }}
                  activeOpacity={0.75}
                >
                  {/* <Text>{`${val} - ${index}`}</Text> */}
                  <View style={{
                    // width: '100%',
                    width: gameGrid(level, gameHeight, gameWidth, isPortrait()).width,
                    height: '100%',
                    overflow: 'hidden',
                    // borderWidth: 0,
                    // borderStyle: 'solid',
                    // borderColor: 'red',
                    // marginTop: 0,
                    // marginBottom: 0,
                  }}>
                    <Image
                      resizeMode='cover'
                      source={imgSrc}
                      style={{
                        // left: index === 1
                        //   ? (imgWidth) * -1 
                        //   : index === 2 
                        //     ? ((isPortrait() ? imgWidth : imgHeight) + (isPortrait() ? imgWidth : imgHeight) * 1) * -1 
                        //     : index === 3 
                        //       ? ((isPortrait() ? imgWidth : imgHeight) + (isPortrait() ? imgWidth : imgHeight) * 2) * -1 
                        //       : index === 4
                        //         ? ((isPortrait() ? imgWidth : imgHeight) + (isPortrait() ? imgWidth : imgHeight) * 3) * -1 
                        //         : index === 5
                        //           ? ((isPortrait() ? imgWidth : imgHeight) + (isPortrait() ? imgWidth : imgHeight) * 4) * -1 
                        //           : 0,
                        left: gameGridPositions(index, level, isPortrait(), imgWidth, imgHeight).x,
                        opacity: 0.99,
                        // top: 0,
                        top: gameGridPositions(index, level, isPortrait(), imgWidth, imgHeight).y,
                        // width: 200,
                        // width: imgWidth,
                        // height: imgHeight,
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
