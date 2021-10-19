import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import Container from './components/Container';

const App = () => {
  const store = createStore(
    rootReducer
  );

  return (
    <Provider store={store}>
      <Container />
      <StatusBar style="auto" />
    </Provider>
  );
}

export default App;
