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

import { getHighScoreKeyHERE } from '../../js/helpers/getHighScoreKeyHERE';
import { isGameOver } from '../../js/helpers/isGameOver';
import { getExistingHighScoreValueHERE } from '../../js/helpers/getExistingHighScoreValueHERE';
import { whatIsTheHighScoreHERE } from '../../js/helpers/whatIsTheHighScoreHERE';

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

      const currentHighScoreStatusHERE = getExistingHighScoreValueHERE(
        game.level,
        game.bossMode,
        images.selected,
        duration.highScoresHERE,
      );
      const whatIsTheHighScoreHEREValue = whatIsTheHighScoreHERE(
        currentHighScoreStatusHERE.time,
        gameDuration / 1000
      );
      console.log('whatIsTheHighScoreHEREValue:')
      console.log(whatIsTheHighScoreHEREValue)

      if (currentHighScoreStatusHERE.time === 0) {
        console.log("NO EXISTING HIGH SCORE EXISTS - ADD IT TO HIGH SCORE ARRAY");
        const updateKey = getHighScoreKeyHERE(
          game.level,
          game.bossMode,
          images.selected
        );
        const updateValue = `${whatIsTheHighScoreHEREValue.time}${updateKey}`;
        const highScoreUpdateValueHERE = [ ...duration.highScoresHERE, updateValue ];
        console.log('highScoreUpdateValueHERE1:');
        console.log(highScoreUpdateValueHERE);
        dispatch(durationActions.setDurationHighScores(highScoreUpdateValueHERE));
      } else {
        if (whatIsTheHighScoreHEREValue.highScore === true) {
          console.log("UPDATE HIGH SCORE ARRAY WITH THIS VALUE");
          const updateKey = getHighScoreKeyHERE(
            game.level,
            game.bossMode,
            images.selected
          );
          const updateValue = `${whatIsTheHighScoreHEREValue.time}${updateKey}`;

          console.log('updateValue:');
          console.log(updateValue);

          const existingHighScoresFiltered = duration.highScoresHERE.filter(val => {
            return val.indexOf(updateKey) === -1
          });
          
          const highScoreUpdateValueHERE = [ ...existingHighScoresFiltered, updateValue ];
          console.log('highScoreUpdateValueHERE:');
          console.log(highScoreUpdateValueHERE);
          dispatch(durationActions.setDurationHighScores(highScoreUpdateValueHERE));
        } else {
          console.log("LEAVE HIGH SCORE ARRAY ALONE");
          console.log(duration.highScoresHERE);
        }
      }
      
      dispatch(durationActions.setDurationEnd(newDate));
      dispatch(durationActions.setDurationSaved(gameDurationHumanise));
      dispatch(durationActions.setDurationIsHighScoreHERE(whatIsTheHighScoreHEREValue.highScore));
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
