import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import AppStateManager from './components/AppStateManager';
import Container from './components/Container';
import { colours } from './configuration/config.json';

const App = () => {
  const store = createStore(
    rootReducer
  );
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{
          backgroundColor: colours.black050,
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
