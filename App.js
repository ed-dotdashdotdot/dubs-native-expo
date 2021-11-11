import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import * as Localization from 'expo-localization';

import Config from './components/Config';

import Container from './components/Container';

import { colours } from './configuration/config.json';

const App = () => {
  const store = createStore(
    rootReducer
  );

  console.log(Localization.locale);
  console.log(Localization.locales);
  // console.log(Localization.isoCurrencyCodes);

  return (
    <Provider store={store}>
      <Config
        deviceLocale={Localization.locale}
      />
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
};

export default App;
