// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// import Container from './components/Container';
import Header from '../Header';
import Info from '../Info';
import LanguageSelector from '../LanguageSelector';
import Options from '../Options';

import styles from './styles.js';

const Container = () => {
  const game = useSelector(state => state.game);
  return (
    <View style={styles.container}>
      {
        game.status !== 'game-on' && <Header />
      }
      {
        game.status === 'game-on' && (
          <Text style={{
            color: 'white',
            fontFamily: 'Courier New',
            fontSize: 24,
          }}>
            {game.level}
          </Text>
        )
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
