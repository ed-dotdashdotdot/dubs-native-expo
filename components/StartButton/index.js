import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native';

import allActions from '../../actions';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

const StartButton = props => {
  const {
    gameData,
    startTextKey,
  } = { ...props };
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';
  return (
    <Button
      onPress={() => {
        dispatch(gameActions.setGameData(gameData));
        dispatch(gameActions.setGameStatus('game-loading'));
      }}
      title={polyglot.t(`${startTextKey}.${lang.toUpperCase()}`)}
    />
  );
};

export default StartButton;
