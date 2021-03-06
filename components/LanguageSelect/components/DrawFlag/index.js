import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useDispatch } from 'react-redux';
import allActions from '../../../../actions';

import { getLanguageFromFlag } from '../../../../js/helpers/getLanguageFromFlag';
import { drawFlagComponent } from '../../../../js/helpers/drawFlagComponent';

import globalStyles from '../../../../css/globalStyles.js';

const DrawFlag = ({ dimensions, flag }) => {
  const { gameActions, languageActions } = { ...allActions };
  const dispatch = useDispatch();

  const maxWidth = dimensions.width - 12 - 12 - 8;
  const flagsPerRow = dimensions.width > 999 ? 6 : dimensions.width > 600 ? 4 : 3;

  return (
    <View
      style={{
        padding: 12,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(languageActions.setChangeLanguage(getLanguageFromFlag(flag)));
          dispatch(gameActions.setGameStatus('game-home'));
        }}
        style={[
          {
            borderRadius: (maxWidth / flagsPerRow) / 2,
            height: (maxWidth / flagsPerRow) - 12 - 12,
            width: (maxWidth / flagsPerRow) - 12 - 12,
          },
          globalStyles.border,
        ]}
      >
        {(() => drawFlagComponent(
          flag, 
          (maxWidth / flagsPerRow) - 12 - 12 - 4, 
          (maxWidth / flagsPerRow) - 12 - 12 - 4,
        ))()}
        {/* <Text
          style={{
            fontSize: 64,
            textAlign: 'center',
          }}
        >🇬🇧</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default DrawFlag;
