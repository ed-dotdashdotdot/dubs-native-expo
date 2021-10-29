import React from 'react';
import { Text, ScrollView, View, } from 'react-native';
import { useSelector } from 'react-redux';

import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const GameOver = () => {
  const language = useSelector(state => state.language);

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading 
          text={polyglot.t(`gameOver.${lang.toUpperCase()}`)} 
        />
        <Text style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 24,
        }}>
          Game over content -  Add game duration
        </Text>
        <NewGameButtons />
      </View>
    </ScrollView>
  );
}

export default GameOver;
