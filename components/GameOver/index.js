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

import { getGameHighScoreKey } from '../../js/helpers/getGameHighScoreKey';
import { getEndTimes } from '../../js/helpers/getEndTimes';
import { isHighScore } from '../../js/helpers/isHighScore';

import {
  colours,
  fontFamily,
  wowMessageAfterMs,
} from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const GameOver = () => {
  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);
  const language = useSelector(state => state.language);
  const duration = useSelector(state => state.duration);
  const { durationActions } = { ...allActions };
  const dispatch = useDispatch();

  const gameDuration = ((duration.end - duration.start) / 1000).toFixed(2) * 1000;

  let subTextKeys = `${game.level}Level`;
  if (game.bossMode) {
    subTextKeys += '|withBossMode';
  }

  const getEndTimeObject = getEndTimes(new Date().getTime(), duration.start);
  // console.log('getEndTimeObject:')
  // console.log(getEndTimeObject)

  useEffect(() => {
    if (duration.saved === 0) {
      // const endTime = new Date().getTime();
      // const timeDifference = (endTime - duration.start) / 1000;
      // const timeInSeconds = timeDifference;
      dispatch(durationActions.setDurationEnd(getEndTimeObject.endTime));
      dispatch(durationActions.setDurationSaved(getEndTimeObject.timeInSeconds));
    }
  });

  // console.log('--');
  // console.log(duration.saved?.toFixed(2));
  // console.log(game.bossMode);
  // console.log(images.selected);
  // console.log(game.level);
  // console.log(duration.highScores);
  // console.log('--');

  // const isThisGameAHighScore = isHighScore(
  //   getGameHighScoreKey(
  //     getEndTimeObject.timeInSeconds.toFixed(2),
  //     game.bossMode,
  //     images.selected,
  //     game.level,
  //   ),
  //   duration.highScores
  // );
  // const gameHighScoreKey = getGameHighScoreKey(
  //   getEndTimeObject.timeInSeconds.toFixed(2),
  //   game.bossMode,
  //   images.selected,
  //   game.level,
  // );
  // console.log('gameHighScoreKey:::')
  // console.log(gameHighScoreKey)

  // console.log('isThisGameAHighScore:');
  // console.log(isThisGameAHighScore);

  // useEffect(() => {
  //   // const timeDifference = (endTime - duration.start) / 1000;
  //   // const timeInSeconds = timeDifference;
  //   if (isThisGameAHighScore) {
  //     // update state with new high score
  //     // console.log('update state with new high score');
  //     const newHighScoreArray = duration.highScores.filter(val => {
  //       return val.indexOf(`${game.level}${game.bossMode ? 'BossMode' : ''}--${images.selected}`) === -1;
  //     });
  //     const updateValue = [ ...newHighScoreArray, gameHighScoreKey ]
  //     // console.log(newHighScoreArray);
  //     // console.log('updateValue:');
  //     // console.log(updateValue);
  //   } else {
  //     // leave state alone
  //     // console.log('leave state alone');
  //   }
  // }, []);

  const currentHighScoreForThisLevel = duration.highScores.filter(val => val.indexOf(`--${game.level}--${images.selected}`) !== -1);
  console.log('currentHighScoreForThisLevel:')
  console.log(currentHighScoreForThisLevel)
  console.log(currentHighScoreForThisLevel.length)
  // if (currentHighScoreForThisLevel.length) {
    const currentHighScoreForThisLevelValue = currentHighScoreForThisLevel[0].split('--')[0]
  // }
  console.log('currentHighScoreForThisLevelValue:');
  console.log(currentHighScoreForThisLevelValue);
  console.log('getEndTimeObject.timeInSeconds:');
  console.log(getEndTimeObject.timeInSeconds);

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
                  gameDuration={1000 * duration.saved.toFixed(2)}
                  lang={language.selected}
                />
              ) : (
                <Translate textKey="wowThatTookAReallyLongTime" />
              )
            }
          </Text>
          <Text
            style={{
              color: colours.white,
              fontFamily: fontFamily,
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            {/* <HighScoreSummary
              gameDuration={duration.saved.toFixed(2)}
              // gameDuration123={duration.saved}
              // isHighScore={isThisGameAHighScore}
              highScoreKey={`${duration.saved.toFixed(2)}--${game.level}--${images.selected}`}
              highScores={duration.highScores}
              levelImage={`--${game.level}--${images.selected}`}
              level={game.level}
              bossMode={game.bossMode}
              image={images.selected}
            /> */}
          </Text>
        </View>
        {/* <HighScoreSummary
          duration={duration.saved.toFixed(2)}
        /> */}
        {/* <View
          style={{
            backgroundColor: 'black',
            borderColor: 'white',
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 2,
            marginBottom: 12,
            padding: 12,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 24,
            }}
          >
            {
              gameHighScoreKey
            }
          </Text>
          <Text
            style={{
              color: 'yellow',
              fontSize: 48,
              fontWeight: 'bold',
            }}
          >
            {
              isThisGameAHighScore.toString()
            }
          </Text>
        </View> */}
        {/* <View
          style={{
            backgroundColor: 'green',
            borderColor: 'magenta',
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 2,
            marginBottom: 12,
            padding: 12,
          }}
        >
          <HighScoreSummary
            // duration={duration.saved.toFixed(2)}
            isHighScore={isThisGameAHighScore}
            highScoreKey={`${duration.saved.toFixed(2)}--${game.level}--${images.selected}`}
            highScores={duration.highScores}
            levelImage={`--${game.level}--${images.selected}`}
          />
        </View> */}
        <NewGameButtons section="game-over" />
      </InfoInner>
    </ScrollView>
  );
};

export default GameOver;
