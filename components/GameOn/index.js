import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import PageHeading from '../PageHeading';
// import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

// import { setGameStatus } from '../../actions';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const GameOn = props => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  const { level } = { ...props };

  // const whichLevelColour = level => {
  //   if (level === 'easy') return 'green';
  //   if (level === 'normal') return 'amber';
  //   if (level === 'hard') return 'red';
  //   return null;
  // }

  return (
    <ScrollView>
      <View style={styles.infoInner}>
        <Text>Game grid goes here</Text>
      </View>
    </ScrollView>
    
  );
}

export default GameOn;
