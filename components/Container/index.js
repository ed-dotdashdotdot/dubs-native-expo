// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import Header from '../Header';
import GameOnHeader from '../GameOnHeader';
import Info from '../Info';
import LanguageSelector from '../LanguageSelector';
import Options from '../Options';

import isGameOver from '../../js/helpers/isGameOver';

const Container = () => {
  const game = useSelector(state => state.game);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  useEffect(() => {
    if (isGameOver(game.status, game.data.length, game.found.length)) {
      dispatch(gameActions.setGameStatus('game-over'));
    }
  }, [game.found.length]);

  return (
    <View 
      style={{
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.33)',
        flex: 1,
      }}
    >
      {game.status === 'game-on' ? (
        <GameOnHeader level={game.level} />
      ) : 
        <Header />
      }
      <Info />
      {
        game.status === 'game-home'
          ? <LanguageSelector />
          : <Options />
      }
    </View>
  );
}

export default Container;
