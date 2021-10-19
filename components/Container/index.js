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
      <Header />
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
