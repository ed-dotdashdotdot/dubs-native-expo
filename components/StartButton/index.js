import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  // Image,
  // Text,
  // TouchableOpacity,
  // useWindowDimensions,
  // View,
} from 'react-native';

import allActions from '../../actions';

// import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

const StartButton = props => {
  const {
    gameData,
    position,
    startTextKey,
  } = { ...props };
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions, imagesActions } = { ...allActions };
  const dispatch = useDispatch();
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';
  const uid = 'TEMP-UID--IS-THIS-NEEDED?';
  return (
    <Button
      onPress={() => {
        dispatch(gameActions.setGameData(gameData));
        dispatch(gameActions.setGameId(uid));
        dispatch(gameActions.setGameStatus('game-loading'));
      }}
      title={polyglot.t(`${startTextKey}.${lang.toUpperCase()}`)}
    />
  );
};

export default StartButton;
