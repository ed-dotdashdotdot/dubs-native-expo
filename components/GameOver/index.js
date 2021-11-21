import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useSelector } from 'react-redux';

import HighScoreMessage from '../HighScoreMessage';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import NewGameButtons from '../buttons/NewGameButtons';
import Translate from '../Translate';

import { localiseDurationSeconds } from '../../js/helpers/localiseDurationSeconds';

import {
  colours,
  fontFamily,
} from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const GameOver = () => {
  const duration = useSelector(state => state.duration);
  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);
  const language = useSelector(state => state.language);

  let subTextKeys = `${game.level}Level`;
  if (game.bossMode) {
    subTextKeys += '|withBossMode';
  }
  const gameKey = `--${game.level}${game.bossMode ? "BossMode" : ""}--${images.selected}--`
  const highScoreForThisGameFunction = (gameKey, highScores) => {
    const highScoresFiltered = highScores.filter(val => {
      return val.indexOf(gameKey) !== -1;
    });
    return highScoresFiltered.length === 1 ? highScoresFiltered[0].split('--')[0] : null;
  };
  const highScoreForThisGame = highScoreForThisGameFunction(
    gameKey,
    duration.highScores
  );

  return (
    <ScrollView>
      <InfoInner>
        <PageHeading
          subTextKeys={subTextKeys}
          textKey='gameOver'
        />
        <View
          style={[
            {
              alignContent: 'flex-end',
              backgroundColor: colours.black,
              flex: 1,
              marginBottom: 24,
              padding: 12,
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
              localiseDurationSeconds(duration.saved, language.selected)
            }
            {" "}
            <Translate textKey='secondsLong' />
          </Text>
          <Text
            style={{
              color: colours.white,
              fontFamily: fontFamily,
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            <HighScoreMessage  
              currentHighScore={highScoreForThisGame}
              isHighScore={duration.isHighScore}
              lang={language.selected}
            />
          </Text>
        </View>
        <NewGameButtons section="game-over" />
      </InfoInner>
    </ScrollView>
  );
};

export default GameOver;
