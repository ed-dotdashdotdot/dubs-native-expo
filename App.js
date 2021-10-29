import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView } from 'react-native';
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
      <SafeAreaView style={{
        backgroundColor: 'rgba(0,0,0, 0.5)',
        flex: 1,
      }}>
        <Container />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
