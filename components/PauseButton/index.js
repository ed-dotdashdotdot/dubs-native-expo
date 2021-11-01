import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

import PauseButtonSvg from '../PauseButtonSvg';

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
}

export default PauseButton;
