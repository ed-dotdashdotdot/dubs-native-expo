import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import DrawGameDuration from '../DrawGameDuration';
// import HighScoreSummary from '../HighScoreSummary';
import HighScoreMessage from '../HighScoreMessage';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import NewGameButtons from '../buttons/NewGameButtons';
import Translate from '../Translate';

// import { getGameHighScoreKey } from '../../js/helpers/getGameHighScoreKey';
// import { getEndTimes } from '../../js/helpers/getEndTimes';
// import { isHighScore } from '../../js/helpers/isHighScore';

import { localiseDurationSeconds } from '../../js/helpers/localiseDurationSeconds';

import {
  colours,
  fontFamily,
  wowMessageAfterMs,
} from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const GameOver = () => {
  const duration = useSelector(state => state.duration);
  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);
  const language = useSelector(state => state.language);
  const { durationActions } = { ...allActions };
  const dispatch = useDispatch();

  const gameDuration = ((duration.end - duration.start) / 1000).toFixed(2) * 1000;
  // console.log(gameDuration)

  // const currentHighScore = Number(game.highScore);
  // const gameScore = Number(gameDuration / 1000);

  // const haveWeGotAHighScore = gameScore < currentHighScore ? true : false;
  // const isThereAHighScoreEntry = (highScoreKey, highScores) => {
  //   const highScoreFilter = highScores.filter(val => {
  //     return val.indexOf(highScoreKey) !== -1;
  //   });
  //   // console.log('highScoreFilter:')
  //   // console.log(highScoreFilter)
  //   // console.log(highScoreFilter.length);
  //   return highScoreFilter.length === 1 ? true : false;
  // }
  // const isThereAHighScoreEntryValue = isThereAHighScoreEntry( // move to a helper file
  //   `--${game.level}${game.bossMode ? "BossMode" : ""}--${images.selected}--`,
  //   duration.highScores
  // );
  // console.log('\n');
  // console.log('isThereAHighScoreEntryValue:');
  // console.log(isThereAHighScoreEntryValue);
  // console.log('\n');

  let subTextKeys = `${game.level}Level`;
  if (game.bossMode) {
    subTextKeys += '|withBossMode';
  }

  // const getEndTimeObject = getEndTimes(new Date().getTime(), duration.start);

  useEffect(() => {
    // if (!isThereAHighScoreEntryValue) {
    //   const highScoreKey = `--${game.level}${game.bossMode ? "BossMode" : ""}--${images.selected}--`;
    //   const highScoresUpdateValue = [ ...duration.highScores, `${duration.saved}${highScoreKey}--` ];
    //   // dispatch(durationActions.setDurationHighScores(highScoresUpdateValue));
    // } else if (haveWeGotAHighScore) {
    //   // console.log('haveWeGotAHighScore')
    //   // console.log(haveWeGotAHighScore)
    //   const highScoreKey = `--${game.level}${game.bossMode ? "BossMode" : ""}--${images.selected}--`;
    //   const highScoresFiltered = duration.highScores.filter(val => {
    //     return val.indexOf(highScoreKey) === -1
    //   });
    //   const highScoresUpdateValue = [ ...highScoresFiltered, `${duration.saved}${highScoreKey}--` ];
    //   // dispatch(durationActions.setDurationHighScores(highScoresUpdateValue));
    // }
  }, []);

  // console.log('duration:');
  // console.log(duration);
  // console.log('game:');
  // console.log(game);

  const gameKey = `--${game.level}${game.bossMode ? "BossMode" : ""}--${images.selected}--`
  // console.log('gameKey');
  // console.log(gameKey);

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
  // console.log('\n--\n')
  // console.log('highScoreForThisGame')
  // console.log(highScoreForThisGame);
  // console.log('\n--\n')

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
              padding: 12,
              marginBottom: 24,
            },
            globalStyles.border,
            globalStyles.borderRadius8,
          ]}
        >
          {/* <Text
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
                  gameDuration={duration.saved}
                  lang={language.selected}
                />
              ) : (
                <Translate textKey="wowThatTookAReallyLongTime" />
              )
            }
          </Text> */}
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
        {/* <Text
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
            `Image: ${images.selected}`
          }
          {
            `duration.saved: ${duration.saved}`
          }
        </Text> */}
        <NewGameButtons section="game-over" />
      </InfoInner>
    </ScrollView>
  );
};

export default GameOver;
