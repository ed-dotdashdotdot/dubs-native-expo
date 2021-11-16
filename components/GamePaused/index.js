import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import NewGameButtons from '../buttons/NewGameButtons';

import { whichLevelColour } from '../../js/helpers/whichLevelColour';

const GamePaused = () => {
  const game = useSelector(state => state.game);
  const duration = useSelector(state => state.duration);
  const { durationActions } = { ...allActions };
  const dispatch = useDispatch();

  useEffect(() => {
    if (duration.saved === 0) {
      const endTime = new Date().getTime();
      const timeDifference = (endTime - duration.start);
      const timeInMilliseconds = timeDifference;
      dispatch(durationActions.setDurationPaused(timeInMilliseconds));
      dispatch(durationActions.setDurationStatus('game-paused'));
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
