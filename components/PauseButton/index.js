import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

import PauseButtonSvg from './components/PauseButtonSvg';

import { colours } from '../../configuration/config.json';

const PauseButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('game-paused'));
      }}
    >
      <PauseButtonSvg colour={colours.white} />
    </TouchableOpacity>
  );
}

export default PauseButton;
