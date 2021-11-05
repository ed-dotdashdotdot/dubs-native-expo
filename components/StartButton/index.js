import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Text, TouchableOpacity, View } from 'react-native';

import allActions from '../../actions';

import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const StartButton = props => {
  const {
    gameData,
    startTextKey,
  } = { ...props };
  const language = useSelector(state => state.language);
  const { gameActions, imagesActions } = { ...allActions };
  const dispatch = useDispatch();
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';
  return (
    <View 
      id="start-with-random-image"
      style={[
        {
          alignSelf: 'center',
          backgroundColor: '#00aa00',
          width: '100%',
        },
        globalStyles.border,
        globalStyles.borderRadius8,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          // dispatch(imagesActions.setImagesSelected(image));
          dispatch(gameActions.setGameData(gameData));
          dispatch(gameActions.setGameStatus('game-loading'));
        }}
        style={[
          {
            padding: 12,
          }
        ]}
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
          <Translate textKey={startTextKey} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartButton;
