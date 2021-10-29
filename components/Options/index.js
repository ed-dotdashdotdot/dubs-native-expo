import React from 'react';
import { Button, View, Image, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

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
        height: 48,
        // lineHeight: 48,
        width: '100%',
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 12,
        // marginTop: 12,
        // borderRadius: 8,
        // borderStyle: 'solid',
        // borderWidth: 2,
        // borderColor: 'white',
        // flex: 1,
        // alignSelf: 'center',
        justifyContent: 'center',
      },
      globalStyles.border,
      globalStyles.borderRadius8,
      styles.options,
    ]}>
      <Button
        accessibilityLabel="Back to home"
        // activeOpacity={0.5}
        color={'white'}
        title={polyglot.t(`backToHome.${lang.toUpperCase()}`)}
        // asd='backToHome'
        onPress={() => {
          dispatch(gameActions.setGameLevel(''));
          dispatch(gameActions.setGameStatus('game-home'));
        }}
      />
    </View>
  );
}

export default Options;
