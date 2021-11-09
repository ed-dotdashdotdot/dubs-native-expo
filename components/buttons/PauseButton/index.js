import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import allActions from '../../../actions';

import PauseButtonSvg from './components/PauseButtonSvg';

const PauseButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('game-paused'));
      }}
    >
      <PauseButtonSvg />
    </TouchableOpacity>
  );
};

export default PauseButton;
