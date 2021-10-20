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

const WhatIsBossMode = props => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  const { level } = { ...props };

  return (
    <ScrollView>
      <View style={styles.infoInner}>
        {/* <PageHeading text='Game ready' /> */}
        <PageHeading text={polyglot.t(`whatIsBossMode.${lang.toUpperCase()}`)} />
        <Text style={[
          globalStyles.fontFamilyCourier,
          styles.bodyText,
        ]}>
          What is boss mode content
          {/* { level }
          { level.toUpperCase() } */}
        </Text>

        {/* <Button
          onPress={() => dispatch(gameActions.setGameBossMode(!game.bossMode))}
          title={`Turn boss mode ${game.bossMode ? 'off' : 'on'}`}
        />
        <Button
          onPress={() => dispatch(gameActions.setGameStatus('what-is-boss-mode'))}
          title="What is boss mode"
        />
        <Button title="Choose an image to play with" />
        <Button title="Start with random image" /> */}
        

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

export default WhatIsBossMode;
