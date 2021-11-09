import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import DrawGameDuration from '../DrawGameDuration';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import NewGameButtons from '../buttons/NewGameButtons';
import Translate from '../Translate';
import { colours, fontFamily } from '../../configuration/config.json';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const GameOver = () => {
  const timer = useSelector(state => state.timer);
  const language = useSelector(state => state.language);
  const { timerActions } = { ...allActions };
  const dispatch = useDispatch();

  const duration = ((timer.end - timer.start) / 1000).toFixed(2) * 1000;

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  useEffect(() => {
    const endTime = new Date().getTime();
    const timeDifference = (endTime - timer.start) / 1000;
    const timeInSeconds = timeDifference;
    dispatch(timerActions.setTimerEnd(endTime));
    dispatch(timerActions.setTimerSaved(timeInSeconds));
  }, []);

  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          text={polyglot.t(`gameOver.${lang.toUpperCase()}`)} 
        />
        <View
          style={[
            {
              alignContent: 'flex-end',
              backgroundColor: colours.black,
              flex: 1,
              padding: 24,
              marginBottom: 24,
            },
            globalStyles.border,
            globalStyles.borderRadius8,
          ]}
        >
          <Text 
            style={{
              alignSelf: 'center',
              color: colours.white,
              fontFamily: fontFamily,
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
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
      </InfoInner>
    </ScrollView>
  );
};

export default GameOver;
