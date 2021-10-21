import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  useWindowDimensions
} from 'react-native';

const GameBoard = () => {

  // const squares = new Array(24);
  const squares = ['', '', '', '', '', '', '', '', '', '', '', '', ];

  return (
    <View style={{ display: 'flex',}}>

      {/* <View>
        <Image
          source={require('../../assets/game-images/2.jpg')}
        />
      </View> */}

      <View style={{ 
        display: 'flex',
        // flex: 1,
        flexDirection: 'row',
        position: 'relative',
        top: 0,
        left: 0,
        width: 240, 
        height: 360, 
        // overflow: 'hidden',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'red',
        marginTop: 0,
        marginBottom: 48,
      }}>
        <Text style={{ fontSize: 48 }}>
          {squares.length}
        </Text>
        {
          squares.map(index => (
            <View style={{ 
              flex: 1,
              position: 'relative',
              top: 0,
              left: 0,
              width: 50, 
              height: 50, 
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: 'blue',
            }}>
              <Text>Hello {index}</Text>
            </View>
          ))
        }
      </View>

    </View>
    
  );
}

export default GameBoard;
