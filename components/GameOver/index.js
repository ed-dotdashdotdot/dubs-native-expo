import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import DrawGameDuration from '../DrawGameDuration';
import HighScoreSummary from '../HighScoreSummary';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import NewGameButtons from '../buttons/NewGameButtons';
import Translate from '../Translate';

import {
  colours,
  fontFamily,
  wowMessageAfterMs,
} from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const GameOver = () => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const duration = useSelector(state => state.duration);
  const { durationActions } = { ...allActions };
  const dispatch = useDispatch();

  const gameDuration = ((duration.end - duration.start) / 1000).toFixed(2) * 1000;

  let subTextKeys = `${game.level}Level`;
  if (game.bossMode) {
    subTextKeys += '|withBossMode';
  }

  useEffect(() => {
    const endTime = new Date().getTime();
    const timeDifference = (endTime - duration.start) / 1000;
    const timeInSeconds = timeDifference;
    dispatch(durationActions.setDurationEnd(endTime));
    dispatch(durationActions.setDurationSaved(timeInSeconds));
  }, []);

  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey='gameOver'
          subTextKeys={subTextKeys}
        />
        <View
          style={[
            {
              alignContent: 'flex-end',
              backgroundColor: colours.black,
              flex: 1,
              padding: 24,
              marginBottom: 24,
            },
            globalStyles.border,
            globalStyles.borderRadius8,
          ]}
        >
          <Text 
            style={{
              alignSelf: 'center',
              color: colours.white,
              fontFamily: fontFamily,
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {
              gameDuration < wowMessageAfterMs ? (
                <DrawGameDuration
                  gameDuration={gameDuration}
                  lang={language.selected}
                />
              ) : (
                <Translate textKey="wowThatTookAReallyLongTime" />
              )
            }
          </Text>
        </View>
        <HighScoreSummary />
        <NewGameButtons section="game-over" />
      </InfoInner>
    </ScrollView>
  );
};

export default GameOver;
