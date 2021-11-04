import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// import { useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../../actions';

import PauseButton from '../PauseButton';
// import PauseButtonSvg from '../PauseButtonSvg';
// import Translate from '../Translate';

import globalStyles from '../../css/style.js';
import Timer from '../Timer';

const GameOptions = () => {
  // const { gameActions } = { ...allActions };
  // const dispatch = useDispatch();
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const timer = useSelector(state => state.timer);


  return (
    <View 
      id="gameOptions"
      style={[
        {
          bottom: 12,
          height: 48,
          position: 'absolute',
          width: '100%',
        },
      ]}
    >
      <View 
        style={[
          {
            flexDirection: 'row',
            height: 48,
          },
        ]}
      >
        <View 
          id="left"
          style={{ height: 48, width: 48 }}
        />

        <View 
          id="stopwatch"
          style={[
            {
              flex: 1,
              height: 48,
              justifyContent: 'center',
            },
          ]}
        >
          <Text
            style={[
              {
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
              },
              globalStyles.fontFamilyCourier,  
            ]}
          >
            {
              game.status === 'game-on' && timer.start && (
                <Timer 
                  lang={language.selected} 
                  start={timer.start} 
                />
              )
            }
          </Text>
        </View>

        <View 
          id="right"
          style={[
            {
              height: 48,
              width: 48,
            },
          ]}
        >
          <PauseButton />
        </View>
      
      </View>

    </View>
  );
}

export default GameOptions;
