import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

import Translate from '../Translate';

import globalStyles from '../../css/style.js';

const Options = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  return (  
    <TouchableOpacity 
      style={[
        {
          backgroundColor: 'black',
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
        dispatch(gameActions.setGameLevel(''));
        dispatch(gameActions.setGameStatus('game-home'));
      }}
    >
      <Text
        style={[
          {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          },
          globalStyles.fontFamilyCourier,  
        ]}
      >
        <Translate textKey='backToHome' />
      </Text>
    </TouchableOpacity>
  );
}

export default Options;
