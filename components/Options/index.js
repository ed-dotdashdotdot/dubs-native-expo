import React from 'react';
import { Button, View, Image, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const Options = () => {
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (  
    <View style={[
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
    ]}>
      <Button
        accessibilityLabel="Back to home"
        color={'white'}
        onPress={() => {
          dispatch(gameActions.setGameLevel(''));
          dispatch(gameActions.setGameStatus('game-home'));
        }}
        title={polyglot.t(`backToHome.${lang.toUpperCase()}`)}
      />
    </View>
  );
}

export default Options;
