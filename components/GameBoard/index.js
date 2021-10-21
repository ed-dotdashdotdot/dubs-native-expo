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

  return (
    <View style={{ display: 'flex',}}>

      {/* <View>
        <Image
          source={require('../../assets/game-images/2.jpg')}
        />
      </View> */}
      {/* <Text style={{ fontSize: 48 }}>
        {squares.length}
      </Text> */}

      <View style={{ 
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
        top: 0,
        left: 0,
        // width: '100%', 
        // height: '100%', 
        // overflow: 'hidden',
        // borderWidth: 2,
        // borderStyle: 'solid',
        // borderColor: 'red',
        marginTop: 0,
        marginBottom: 48,
        flexWrap: 'wrap',
      }}>
        {
          squares.map((val, index) => (
            <View
              key={val}
              style={{ 
                backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                borderBottomLeftRadius: index === getCorners(level, isPortrait()).bottomLeft && 10,
                borderBottomRightRadius: index === squares.length - 1 && 10,
                borderTopLeftRadius: index === 0 && 10,
                borderTopRightRadius: index === getCorners(level, isPortrait()).topRight && 10,
                height: gameGrid(level, gameHeight, gameWidth, isPortrait()).height,
                left: 0,
                position: 'relative',
                top: 0,
                width: gameGrid(level, gameHeight, gameWidth, isPortrait()).width,
              }}
            >
              <TouchableOpacity 
                style={{ 
                  fontSize: 12,
                  textAlign:'center',
                  borderColor: 'red',
                  borderStyle: 'solid',
                  borderWidth: 0,
                  width: '100%',
                  height: '100%',
                  textAlign: 'center',
                  selfAlign: 'center',
                  display: 'flex',
                }}
                // title={`${val} - ${index}`}
              >
                <Text>{`${val} - ${index}`}</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>

    </View>
    
  );
}

export default GameBoard;
