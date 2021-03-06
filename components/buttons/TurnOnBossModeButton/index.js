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

import globalStyles from '../../../css/globalStyles.js';

const TurnOnBossModeButton = ({ bossMode }) => {
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
        accessible={true}
        accessibilityRole='button'
        onPress={() => {
          dispatch(gameActions.setGameBossMode(!bossMode));
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
          <Translate textKey={bossMode ? 'turnBossModeOff' : 'turnBossModeOn'} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

TurnOnBossModeButton.propTypes = {
  bossMode: PropTypes.bool.isRequired,
};

export default TurnOnBossModeButton;
