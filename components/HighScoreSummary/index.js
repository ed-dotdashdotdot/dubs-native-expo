import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

// import HighScoresDrawSection from './components/HighScoresDrawSection';
// import InfoInner from '../InfoInner';
// import PageHeading from '../PageHeading';
import Translate from '../Translate';

import { getHighScore } from '../../js/helpers/getHighScore';
import { getGameHighScoreKey } from '../../js/helpers/getGameHighScoreKey';
import { getEndTimes } from '../../js/helpers/getEndTimes';
import { isHighScore } from '../../js/helpers/isHighScore';

const HighScoreSummary = props => {
  const { 
    gameDuration, 
    // gameDuration123, 
    highScoreKey, 
    // isHighScore, 
    highScores, 
    levelImage, 
    level, 
    bossMode,
    image 
  } = { ...props };

  // console.log(level)
  // console.log(image)

  // console.log('- - -');
  // console.log(`gameDuration: ${gameDuration}`);
  // console.log(`gameDuration123: ${gameDuration123}`);
  // console.log(`isHighScore: ${isHighScore.toString()}`);
  // console.log('- - -');

  // const game = useSelector(state => state.game);
  // const images = useSelector(state => state.images);
  // const language = useSelector(state => state.language);
  const duration = useSelector(state => state.duration);
  const { durationActions } = { ...allActions };
  const dispatch = useDispatch();

  // console.log('duration.saved:');
  // console.log(duration.saved.toFixed(2));
  // console.log(duration.saved);
  // console.log(highScores);
  // console.log(isHighScore);
  // console.log(highScoreKey);
  // console.log('-');

  // const isThisGameAHighScoreHERE = isHighScore(
  //   getGameHighScoreKey(
  //     getEndTimeObject.timeInSeconds.toFixed(2),
  //     game.bossMode,
  //     images.selected,
  //     game.level,
  //   ),
  //   duration.highScores
  // );
  // console.log('isThisGameAHighScoreHERE:');
  // console.log(isThisGameAHighScoreHERE);

  // console.log('levelImage:');
      // console.log(levelImage);

  // console.log('DURATION.SAVED-1:')
  // console.log(duration.saved)
  // console.log(duration.highScores)
  // console.log(level, 
  //   bossMode,
  //   image 
  // );

  const isThisAHighScore = (duration, key, highScores) => {
    // console.log('--')
    // console.log(isThisAHighScore)
    // console.log(duration)
    // console.log(key)
    // console.log(highScores)
    // console.log('--')

    // let currentScoreSplit = currentValues.split('--');
    // const currentScore = currentScoreSplit[0];
    // const currentLevel = currentScoreSplit[1];
    // const currentImage = currentScoreSplit[2];

    const highScoresFiltered = highScores.filter(val => val.indexOf(key) !== -1);
    console.log('highScoresFiltered:')
    console.log(highScoresFiltered)
    let returnValue = false;
    
    if (highScoresFiltered.length === 1) {
      // compare times
      const highScore = highScoresFiltered[0].split('--')[0];
      // console.log('highScore:')
      // console.log(highScore)
      if (Number(duration) < Number(highScore)) {
        returnValue = true;
      }
    } else {
      // this is a high score as it's the first time it's been played
      returnValue = true;
    }
    return returnValue;
  };
  // console.log(isThisAHighScore(
  //   duration.saved,
  //   levelImage,
  //   duration.highScores
  // ));



  useEffect(() => {
    // console.log(`isHighScore - useEffect: ${isHighScore.toString()}`);
    if (isHighScore || isThisAHighScore) {
      console.log('***IS A HIGH SCORE***')
      // console.log('highScoreKey:')
      // console.log(highScoreKey)
      // console.log('DURATION.SAVED-2:')
      // console.log(duration.saved)
      // console.log('--')
      // console.log(`isHighScore: ${isHighScore}`);
      // console.log('gameDuration:');
      // console.log(gameDuration);
      // console.log('duration.saved:');
      // console.log(duration);
      // console.log(duration.saved);
      // console.log('--');
      // console.log('highScoreKey:');
      // console.log(highScoreKey);
      // console.log('isHighScore:');
      // console.log(isHighScore);
      // console.log('highScores:');
      // console.log(highScores);
      // console.log('levelImage:');
      // console.log(levelImage);

      // remove existing value
      const highScoresFiltered = highScores.filter(val => {
        return val.indexOf(levelImage) === -1;
      });

      const highScoreUpdateValue = [ 
        ...highScoresFiltered, 
        `${duration.saved.toFixed(2)}--${level}${bossMode ? "BossMode" : ''}--${image}` 
      ];
      // console.log('highScoreUpdateValue:')
      // console.log(highScoreUpdateValue)
      // console.log('---')

      dispatch(durationActions.setDurationHighScores(highScoreUpdateValue));
      
    } else {
      console.log('***NOT A HIGH SCORE***')
    }
  }, []);

  // console.log('highScoreKey:')
  // console.log(highScoreKey)
  // console.log('--')

  let evaluateHighScoreKey;
  if (!isThisAHighScore) {
    const currentHighScoreKey = highScores.filter(val => {
      return val.indexOf(levelImage) !== -1;
    });
    evaluateHighScoreKey = currentHighScoreKey[0].split('--')[0];
  } else {
    evaluateHighScoreKey = highScoreKey;
  }

  return (
    <>
      <Text>
        {isThisAHighScore && (
          <Translate textKey={'newHighScore'} />
        )}
        {!isThisAHighScore && (
          <>
            <Translate textKey={'highScore'} />
            {" "}
            {getHighScore(evaluateHighScoreKey)}
          </>
        )}
      </Text>
    </>
  );
};

HighScoreSummary.propTypes = {
  // duration: PropTypes.string.isRequired,
};

export default HighScoreSummary;
