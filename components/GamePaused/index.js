import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import allActions from '../../actions';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import NewGameButtons from '../buttons/NewGameButtons';

import whichLevelColour from '../../js/helpers/whichLevelColour';

const GamePaused = () => {
  const game = useSelector(state => state.game);
  const timer = useSelector(state => state.timer);
  const { timerActions } = { ...allActions };
  const dispatch = useDispatch();

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
      <InfoInner>
        <PageHeading 
          colour={whichLevelColour(game.level)}
          textKey='gamePaused' 
        />
        <NewGameButtons section="game-paused" />
      </InfoInner>
    </ScrollView>
  );
};

export default GamePaused;
