import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import Translate from '../../Translate';

import { 
  colours, 
  fontFamily 
} from '../../../configuration/config.json';

import globalStyles from '../../../css/style.js';

const StartButton = ({ gameData, textKey }) => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <View 
      style={[
        {
          alignSelf: 'center',
          backgroundColor: colours.green,
          marginBottom: 12,
          width: '100%',
        },
        globalStyles.border,
        globalStyles.borderRadius8,
      ]}
    >
      <TouchableOpacity
        accessible={true}
        accessibilityRole='button'
        onPress={() => {
          dispatch(gameActions.setGameData(gameData));
          dispatch(gameActions.setGameStatus('game-loading'));
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
          <Translate textKey={textKey} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

StartButton.propTypes = {
  gameData: PropTypes.array.isRequired,
  textKey: PropTypes.string.isRequired,
};

export default StartButton;
