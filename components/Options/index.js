import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import Translate from '../Translate';

import { getBackButtonText } from '../../js/helpers/getBackButtonText';

import { 
  colours, 
  fontFamily 
} from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const Options = () => {
  const game = useSelector(state => state.game);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const getBackButtonDispatches = section => {
    if (
      section === 'game-over' ||
      section === 'game-paused' ||
      section === 'game-ready'
    ) {
      dispatch(gameActions.setGameLevel(''));
      dispatch(gameActions.setGameStatus('game-home'));
    } else if (
      section === 'choose-image' ||
      section === 'what-is-boss-mode'
    ) {
      dispatch(gameActions.setGameStatus('game-ready'));
    } else if (
      section === 'image-detail'
    ) {
      dispatch(gameActions.setGameStatus('choose-image'));
    } else {
      dispatch(gameActions.setGameStatus('game-home'));
    }
  }
  return (  
    <TouchableOpacity 
      accessible={true}
      accessibilityRole='button'
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
        getBackButtonDispatches(game.status);
      }}
    >
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        <Translate textKey={getBackButtonText(game.status)} />
      </Text>
    </TouchableOpacity>
  );
};

export default Options;
