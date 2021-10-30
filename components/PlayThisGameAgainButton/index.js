import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
import allActions from '../../actions';

// import Button from '../../../ui.components/button';
import Translate from '../Translate';

// const PlayThisGameAgainButtonStyled = styled.li`
//   button {
//     height: 100%;
//   }
// `;

import globalStyles from '../../css/style.js';

const PlayThisGameAgainButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  return (
    <View
      style={[
        globalStyles.border,
        globalStyles.borderRadius8,
        // styles.newGameButtonsButton, 
        // styles.greenButton,
        {
          backgroundColor: 'black',
          marginBottom: 12,
        }
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(gameActions.injectGameFound([]));
          dispatch(gameActions.setGameStatus('game-on'));
          dispatch(gameActions.setGameSelected(''));
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
          <Translate textKey="playThisGameAgain" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayThisGameAgainButton;
