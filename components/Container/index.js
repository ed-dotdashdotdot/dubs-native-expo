// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

// import Container from './components/Container';
import Header from '../Header';
import GameOnHeader from '../GameOnHeader';
import Info from '../Info';
import LanguageSelector from '../LanguageSelector';
import Options from '../Options';

import isGameOver from '../../js/helpers/isGameOver';
import ucFirst from '../../js/helpers/ucFirst';

import styles from './styles.js';

const Container = () => {
  const game = useSelector(state => state.game);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  console.log(game.status);
  console.log(game.data.length);
  console.log(game.found.length);
  if (isGameOver(game.status, game.data.length, game.found.length)) {
    // setTimeout(() => (
    //   dispatch(gameActions.setGameStatus('game-over'))
    // ), 0);
    console.log('GAME-OVER');
  } else {
    console.log('NOT-GAME-OVER');
  }

  return (
    <View style={styles.container}>
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
