import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import PageHeading from '../PageHeading';
// import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import whichLevelColour from '../../js/helpers/whichLevelColour';

// import { setGameStatus } from '../../actions';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const GameReady = props => {
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
          colour={whichLevelColour(level)}
          text={polyglot.t(`${level}Level.${lang.toUpperCase()}`)} 
        />
        {/* <Text>{level}</Text> */}
        <Text style={[
          globalStyles.fontFamilyCourier,
          styles.bodyText,
        ]}>
          Game ready content
          {/* { level }
          { level.toUpperCase() } */}
        </Text>

        <Button
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
        />
        

        {/* <Text style={[
          globalStyles.fontFamilyCourier,
          styles.bodyText,
        ]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui lectus, tristique eget euismod in, sagittis eu magna. Aenean lobortis arcu ac elit aliquet, dapibus scelerisque eros blandit. Praesent tincidunt, turpis non facilisis mattis, nulla ligula tincidunt ex, ac accumsan tellus magna sed risus. Fusce eget consequat mi, quis vehicula elit. Mauris volutpat mi augue, nec cursus mauris scelerisque eu. Cras tristique at nisi bibendum vulputate. Fusce id efficitur neque. Vivamus ullamcorper tortor a porta viverra.
        </Text>
        <Text style={[
          globalStyles.fontFamilyCourier,
          styles.bodyText,
        ]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui lectus, tristique eget euismod in, sagittis eu magna. Aenean lobortis arcu ac elit aliquet, dapibus scelerisque eros blandit. Praesent tincidunt, turpis non facilisis mattis, nulla ligula tincidunt ex, ac accumsan tellus magna sed risus. Fusce eget consequat mi, quis vehicula elit. Mauris volutpat mi augue, nec cursus mauris scelerisque eu. Cras tristique at nisi bibendum vulputate. Fusce id efficitur neque. Vivamus ullamcorper tortor a porta viverra.
        </Text>
        <Text style={[
          globalStyles.fontFamilyCourier,
          styles.bodyText,
        ]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui lectus, tristique eget euismod in, sagittis eu magna. Aenean lobortis arcu ac elit aliquet, dapibus scelerisque eros blandit. Praesent tincidunt, turpis non facilisis mattis, nulla ligula tincidunt ex, ac accumsan tellus magna sed risus. Fusce eget consequat mi, quis vehicula elit. Mauris volutpat mi augue, nec cursus mauris scelerisque eu. Cras tristique at nisi bibendum vulputate. Fusce id efficitur neque. Vivamus ullamcorper tortor a porta viverra.
        </Text>
        <Text style={[
          globalStyles.fontFamilyCourier,
          styles.bodyText,
        ]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui lectus, tristique eget euismod in, sagittis eu magna. Aenean lobortis arcu ac elit aliquet, dapibus scelerisque eros blandit. Praesent tincidunt, turpis non facilisis mattis, nulla ligula tincidunt ex, ac accumsan tellus magna sed risus. Fusce eget consequat mi, quis vehicula elit. Mauris volutpat mi augue, nec cursus mauris scelerisque eu. Cras tristique at nisi bibendum vulputate. Fusce id efficitur neque. Vivamus ullamcorper tortor a porta viverra.
        </Text> */}

      </View>
    </ScrollView>
    
  );
}

export default GameReady;
