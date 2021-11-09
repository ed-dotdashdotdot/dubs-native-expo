import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import allActions from '../../../actions';

import Translate from '../../Translate';
import { colours, fontFamily } from '../../../configuration/config.json';

import globalStyles from '../../../css/style.js';

const ContinueGameButton = () => {
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
          dispatch(gameActions.setGameStatus('game-loading'));
        }}
        style={[
          globalStyles.padding12,
        ]}
        type="button"
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
          <Translate textKey="continueGame" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueGameButton;
