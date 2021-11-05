import React from 'react';
import { Button, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import ChooseAnImageButton from '../ChooseAnImageButton';
import PageHeading from '../PageHeading';
import StartButton from '../StartButton';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import getGameArray from '../../js/helpers/getGameArray';
import getGameData from '../../js/helpers/getGameData';
import whichLevelColour from '../../js/helpers/whichLevelColour';

import globalStyles from '../../css/style.js';

const GameReady = props => {
  const { level } = { ...props };
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';
  // const startTextKey = gameImage ? 'start' : 'startWithRandomImage';
  const startTextKey = 'startWithRandomImage';

  const gameData = getGameData(level);

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading 
          colour={whichLevelColour(level)}
          text={polyglot.t(`${level}Level.${lang.toUpperCase()}`)} 
        />
        <Button
          onPress={() => dispatch(gameActions.setGameBossMode(!game.bossMode))}
          title={`Turn boss mode ${game.bossMode ? 'off' : 'on'}`}
        />
        <Button
          onPress={() => dispatch(gameActions.setGameStatus('what-is-boss-mode'))}
          title="What is boss mode"
        />
        <ChooseAnImageButton />
        <StartButton
          gameData={gameData}
          startTextKey={startTextKey}
        />
      </View>
    </ScrollView>
  );
}

export default GameReady;
