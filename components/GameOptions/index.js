import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';

import PauseButton from '../buttons/PauseButton';
import Timer from '../Timer';

import { colours, fontFamily } from '../../configuration/config.json';

const GameOptions = () => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const timer = useSelector(state => state.timer);
  return (
    <View 
      style={{
        bottom: 12,
        height: 48,
        position: 'absolute',
        width: '100%',
      }}
    >
      <View 
        style={{
          flexDirection: 'row',
          height: 48,
        }}
      >
        <View 
          style={{ 
            height: 48, 
            width: 48 
          }}
        />
        <View 
          style={{
            flex: 1,
            height: 48,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: colours.white,
              fontFamily: fontFamily,
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
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
          style={{
            height: 48,
            width: 48,
          }}
        >
          <PauseButton />
        </View>
      </View>
    </View>
  );
};

export default GameOptions;
