import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import SettingsButtonSvg from './components/SettingsButtonSvg';

const SettingsButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('app-settings'));
      }}
    >
      <SettingsButtonSvg />
    </TouchableOpacity>
  );
};

export default SettingsButton;
