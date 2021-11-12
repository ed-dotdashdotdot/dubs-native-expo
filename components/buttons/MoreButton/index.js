import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import MoreButtonSvg from './components/MoreButtonSvg';

const MoreButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('language-select'));
      }}
    >
      <MoreButtonSvg />
    </TouchableOpacity>
  );
};

export default MoreButton;
