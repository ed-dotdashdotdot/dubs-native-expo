import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import whichLevelColour from '../../js/helpers/whichLevelColour';

// import { setGameStatus } from '../../actions';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const GameOver = props => {
  const { level } = { ...props };
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        {/* <PageHeading text='Game ready' /> */}
        <PageHeading 
          // colour={whichLevelColour(level)}
          text={polyglot.t(`gameOver.${lang.toUpperCase()}`)} 
        />
        {/* <Text>{level}</Text> */}
        {/* <Text style={[
          globalStyles.fontFamilyCourier,
          styles.bodyText,
        ]}> */}
          {/* Game over content */}
          {/* { level }
          { level.toUpperCase() } */}
        {/* </Text> */}

        <Text style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 24,
        }}>
          Game over content -  Add game duration
        </Text>


        <NewGameButtons />

        {/* <Button
          onPress={() => dispatch(gameActions.setGameBossMode(!game.bossMode))}
          title={`Turn boss mode ${game.bossMode ? 'off' : 'on'}`}
        />
        <Button
          onPress={() => dispatch(gameActions.setGameStatus('what-is-boss-mode'))}
          title="What is boss mode"
        />
        <Button
          onPress={() => dispatch(gameActions.setGameStatus('choose-image'))}
          title="Choose an image to play with"
        />
        <Button 
          onPress={() => dispatch(gameActions.setGameStatus('game-on'))}  
          title="Start with random image" 
        /> */}

      </View>
    </ScrollView>
    
  );
}

export default GameOver;
