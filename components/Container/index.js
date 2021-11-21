// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ImageBackground, useWindowDimensions, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import AppStateManager from '../AppStateManager';
import Header from '../Header';
import GameOnHeader from '../GameOnHeader';
import GameOptions from '../GameOptions';
import Info from '../Info';
import Options from '../Options';
import OptionsHomepage from '../OptionsHomepage';
import Mesh from '../Mesh';

import { getHighScoreKey } from '../../js/helpers/getHighScoreKey';
import { isGameOver } from '../../js/helpers/isGameOver';
import { getExistingHighScoreValue } from '../../js/helpers/getExistingHighScoreValue';
import { whatIsTheHighScore } from '../../js/helpers/whatIsTheHighScore';

import { colours } from '../../configuration/config.json';

const Container = () => {
  const duration = useSelector(state => state.duration);
  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);
  const language = useSelector(state => state.language);
  const { durationActions, gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const { 
    height,
    width,
  } = useWindowDimensions();

  useEffect(() => {
    if (isGameOver(game.status, game.data.length, game.found.length)) {

      const newDate = new Date().getTime();
      const gameDuration = newDate - duration.start;
      const gameDurationHumanise = `${(gameDuration / 1000).toFixed(2)}`;

      const currentHighScoreStatus = getExistingHighScoreValue(
        game.level,
        game.bossMode,
        images.selected,
        duration.highScores,
      );
      const whatIsTheHighScoreValue = whatIsTheHighScore(
        currentHighScoreStatus.time,
        gameDuration / 1000
      );
      if (currentHighScoreStatus.time === 0) {
        const updateKey = getHighScoreKey(
          game.level,
          game.bossMode,
          images.selected
        );
        const updateValue = `${whatIsTheHighScoreValue.time}${updateKey}`;
        const highScoreUpdateValue = [ ...duration.highScores, updateValue ];
        dispatch(durationActions.setDurationHighScores(highScoreUpdateValue));
      } else {
        if (whatIsTheHighScoreValue.highScore === true) {
          const updateKey = getHighScoreKey(
            game.level,
            game.bossMode,
            images.selected
          );
          const updateValue = `${whatIsTheHighScoreValue.time}${updateKey}`;
          const existingHighScoresFiltered = duration.highScores.filter(val => {
            return val.indexOf(updateKey) === -1
          });
          const highScoreUpdateValue = [ ...existingHighScoresFiltered, updateValue ];
          dispatch(durationActions.setDurationHighScores(highScoreUpdateValue));
        }
      }
      dispatch(durationActions.setDurationEnd(newDate));
      dispatch(durationActions.setDurationSaved(gameDurationHumanise));
      dispatch(durationActions.setDurationIsHighScore(whatIsTheHighScoreValue.highScore));
      dispatch(gameActions.setGameStatus('game-over'));
    }
  }, [game.found.length]);

  return (
    <AppStateManager
      status={game.status}
    >
      <View 
        style={{
          alignItems: 'center',
          backgroundColor: game.highlight.length ? colours.red025 : colours.black050,
          flex: 1,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <ImageBackground 
          style={[
            {
              height: height,
              width: width,
            },
          ]}
        >
          <Mesh 
            colour={colours.white025} 
            height={height}
            width={width}
          />
        </ImageBackground>
        {game.status === 'game-on' ? (
          <GameOnHeader 
            bossMode={game.bossMode} 
            level={game.level} 
          />
        ) : 
          <Header />
        }
        <Info />
        {
          game.status === 'game-home'
            ? <OptionsHomepage selectedLanguage={language.selected} width={width} />
            : game.status === 'game-on' 
              ? <GameOptions />
              : game.status === 'game-loading'
                ? null
                : <Options />
        }
      </View>
    </AppStateManager>
  );
};

export default Container;
