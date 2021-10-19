import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import Container from './components/Container';
import Header from './components/Header';
import Info from './components/Info';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  return (
    <Container>
      <Header />
      <Info />
      <LanguageSelector />
      <StatusBar style="auto" />
    </Container>
  );
}

export default App;
