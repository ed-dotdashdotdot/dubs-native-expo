import React, { useEffect } from 'react';
import { Text, ScrollView, View, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import DrawGameDuration from '../DrawGameDuration';
import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

import whichLevelColour from '../../js/helpers/whichLevelColour';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const GamePaused = () => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const timer = useSelector(state => state.timer);

  const { gameActions, imagesActions, timerActions } = { ...allActions };
  const dispatch = useDispatch();

  // const duration = ((timer.end - timer.start) / 1000).toFixed(2) * 1000;

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  useEffect(() => {
    // gameImage('');
    if (timer.saved === 0) {
      const endTime = new Date().getTime();
      const timeDifference = (endTime - timer.start);
      const timeInMilliseconds = timeDifference;
      dispatch(timerActions.setTimerPaused(timeInMilliseconds));
      dispatch(timerActions.setTimerStatus('game-paused'));
      // setTimeout(() => { 
      //   console.log(timer);
      // }, 3000);
    }
  }, []);

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading 
          colour={whichLevelColour(game.level)}
          text={polyglot.t(`gamePaused.${lang.toUpperCase()}`)} 
        />
        {/* <View
          style={[
            {
              alignContent: 'flex-end',
              backgroundColor: 'black',
              borderColor: 'white',
              borderStyle: 'solid',
              borderRadius: 8,
              borderWidth: 2,
              flex: 1,
              padding: 24,
              marginBottom: 24,
            }
          ]}
        >
          <Text style={[
            {
              alignSelf: 'center',
              color: 'white',
              fontSize: 28,
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
        </View> */}
        <NewGameButtons section="game-paused" />
      </View>
    </ScrollView>
  );
}

export default GamePaused;
