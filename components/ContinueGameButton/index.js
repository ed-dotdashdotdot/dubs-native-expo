import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

import Translate from '../Translate';

import globalStyles from '../../css/style.js';

const ContinueGameButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  return (
    <View
      style={[
        globalStyles.border,
        globalStyles.borderRadius8,
        {
          backgroundColor: 'black',
          marginBottom: 12,
        }
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          // dispatch(gameActions.injectGameFound([]));
          dispatch(gameActions.setGameStatus('game-on'));
          // dispatch(gameActions.setGameSelected(''));
        }}
        style={[
          {
            padding: 12,
          }
        ]}
        type="button"
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
          <Translate textKey="continueGame" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueGameButton;
