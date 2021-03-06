import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import Translate from '../../Translate';

import { 
  colours, 
  fontFamily 
} from '../../../configuration/config.json';

import globalStyles from '../../../css/globalStyles.js';

const PlayThisGameAgainWithBossModeButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <View
      style={[
        {
          backgroundColor: colours.black,
          marginBottom: 12,
        },
        globalStyles.border,
        globalStyles.borderRadius8,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(gameActions.injectGameFound([]));
          dispatch(gameActions.setGameStatus('game-loading'));
          dispatch(gameActions.setGameSelected(''));
          dispatch(gameActions.setGameBossMode(true));
        }}
        style={[
          globalStyles.padding12,
        ]}
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
          <Translate textKey="playThisGameAgainWithBossMode" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayThisGameAgainWithBossModeButton;
