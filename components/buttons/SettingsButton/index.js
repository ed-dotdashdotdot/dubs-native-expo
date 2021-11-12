import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import SettingsButtonSvg from './components/SettingsButtonSvg';

const SettingsButton = props => {
  const { width } = { ...props };
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('app-settings'));
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width,
        }}
      >
        <SettingsButtonSvg />
      </View>
    </TouchableOpacity>
  );
};

SettingsButton.defaultProps = {
  width: 36,
};

SettingsButton.propTypes = {
  width: PropTypes.string.isRequired,
};

export default SettingsButton;
