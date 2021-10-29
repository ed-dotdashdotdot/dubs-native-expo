import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
      <SafeAreaProvider>
        <SafeAreaView style={{
          backgroundColor: 'rgba(0,0,0, 0.5)',
          flex: 1,
        }}>
          <Container />
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
