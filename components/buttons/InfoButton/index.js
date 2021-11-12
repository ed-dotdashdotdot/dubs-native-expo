import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import InfoButtonSvg from './components/InfoButtonSvg';

const InfoButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('app-info'));
      }}
    >
      <InfoButtonSvg />
    </TouchableOpacity>
  );
};

export default InfoButton;
