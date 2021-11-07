import React, { useEffect } from 'react';
import { ScrollView, View, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';

import whichLevelColour from '../../js/helpers/whichLevelColour';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const GamePaused = () => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const timer = useSelector(state => state.timer);
  const { timerActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  useEffect(() => {
    if (timer.saved === 0) {
      const endTime = new Date().getTime();
      const timeDifference = (endTime - timer.start);
      const timeInMilliseconds = timeDifference;
      dispatch(timerActions.setTimerPaused(timeInMilliseconds));
      dispatch(timerActions.setTimerStatus('game-paused'));
    }
  }, []);

  return (
    <ScrollView>
      <View 
        style={[
          globalStyles.infoInner,
        ]}>
        <PageHeading 
          colour={whichLevelColour(game.level)}
          text={polyglot.t(`gamePaused.${lang.toUpperCase()}`)} 
        />
        <NewGameButtons section="game-paused" />
      </View>
    </ScrollView>
  );
}

export default GamePaused;
