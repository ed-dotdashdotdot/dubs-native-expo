import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import Translate from '../Translate';
import { colours, fontFamily } from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const Options = () => {
  const game = useSelector(state => state.game);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const dispatches = section => {
    if (section === 'game-over') {
      dispatch(gameActions.setGameLevel(''));
      dispatch(gameActions.setGameStatus('game-home'));
    }
    if (section === 'game-paused') {
      dispatch(gameActions.setGameLevel(''));
      dispatch(gameActions.setGameStatus('game-home'));
    }
    if (section === 'game-ready') {
      dispatch(gameActions.setGameLevel(''));
      dispatch(gameActions.setGameStatus('game-home'));
    }
    if (section === 'choose-image') {
      dispatch(gameActions.setGameStatus('game-ready'));
    }
    if (section === 'image-detail') {
      dispatch(gameActions.setGameStatus('choose-image'));
    }
    if (section === 'what-is-boss-mode') {
      dispatch(gameActions.setGameStatus('game-ready'));
    }
  }
  const buttonText = section => {
    if (section === 'game-over') {
      return 'backToHome';
    }
    if (section === 'game-paused') {
      return 'backToHome';
    }
    if (section === 'game-ready') {
      return 'backToHome';
    }
    if (section === 'choose-image') {
      return 'back';
    }
    if (section === 'image-detail') {
      return 'back';
    }
    if (section === 'what-is-boss-mode') {
      return 'back';
    }
    return 'backToHome'
  }

  return (  
    <TouchableOpacity 
      style={[
        {
          backgroundColor: colours.black,
          bottom: 12,
          height: 48,
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
        },
        globalStyles.border,
        globalStyles.borderRadius8,
      ]}
      onPress={() => {
        dispatches(game.status);
      }}
    >
      <Text
        style={[
          {
            color: colours.white,
            fontFamily: fontFamily,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          },
        ]}
      >
        <Translate textKey={buttonText(game.status)} />
      </Text>
    </TouchableOpacity>
  );
}

export default Options;
