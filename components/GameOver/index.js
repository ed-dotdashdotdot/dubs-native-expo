import React from 'react';
import { Text, ScrollView, View, } from 'react-native';
import { useSelector } from 'react-redux';

import DrawGameDuration from '../DrawGameDuration';
import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const GameOver = () => {
  const timer = useSelector(state => state.timer);
  const language = useSelector(state => state.language);

  const duration = ((timer.end - timer.start) / 1000).toFixed(2) * 1000;

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading 
          text={polyglot.t(`gameOver.${lang.toUpperCase()}`)} 
        />
        <View
          style={[
            {
              alignContent: 'flex-end',
              borderColor: 'white',
              borderStyle: 'solid',
              borderRadius: 8,
              borderWidth: 2,
              flex: 1,
              marginBottom: 12,
              padding: 12,
              marginBottom: 24,
            }
          ]}
        >
          <Text style={[
            {
              alignSelf: 'center',
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
            },
            globalStyles.fontFamilyCourier,
          ]}>
            {
              duration < 1200000 ? (
                <DrawGameDuration
                  duration={duration}
                  lang={language.selected}
                />
              ) : (
                <Translate textKey="wowThatTookAReallyLongTime" />
              )
            }
          </Text>
        </View>
        <NewGameButtons section="game-over" />
      </View>
    </ScrollView>
  );
}

export default GameOver;
