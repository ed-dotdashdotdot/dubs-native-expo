import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../actions';

import ContinueGameButton from '../../ContinueGameButton';
import PlayThisGameAgainButton from '../../PlayThisGameAgainButton';
import Translate from '../../Translate';
import { colours, fontFamily } from '../../../configuration/config.json';

import Polyglot from 'node-polyglot';
import i18n from '../../../i18n';

import globalStyles from '../../../css/style.js';

const NewGameButtons = props => {
  const {
    section
  } = { ...props };
  const language = useSelector(state => state.language);
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  const { gameActions, imagesActions, timerActions } = { ...allActions };
  const dispatch = useDispatch();

  const newGameDispatches = level => {
    dispatch(gameActions.setGameClicks(0));
    dispatch(gameActions.setGameStatus('game-ready'));
    dispatch(gameActions.setGameLevel(level));
    dispatch(gameActions.setGameBossMode(false));
    dispatch(gameActions.injectGameFound([]));
    dispatch(gameActions.setGameData([]));
    dispatch(gameActions.setGameSelected(''));
    dispatch(gameActions.setGameId(''));
    dispatch(imagesActions.setImagesLoaded(false));
    dispatch(imagesActions.setImagesSelected(''));
    dispatch(timerActions.setTimerStart(''));
    dispatch(timerActions.setTimerEnd(''));
    dispatch(timerActions.setTimerSaved(0));
    dispatch(timerActions.setTimerPaused(0));
    dispatch(timerActions.setTimerStatus(''));
  };
  return (
    <View
      style={{
        alignSelf: 'center',
        display: 'flex',
        width: '100%',
      }}
    >
      {section === 'game-over' && <PlayThisGameAgainButton />}
      {section === 'game-paused' && <ContinueGameButton />}
      <View
        style={[
          {
            backgroundColor: colours.green,
            marginBottom: 12,
          },
          globalStyles.border,
          globalStyles.borderRadius8,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            newGameDispatches('easy');
          }}
          style={[
            globalStyles.padding12,
          ]}
          title={polyglot.t(`startEasyGame.${lang.toUpperCase()}`)}
          type="button"
        >
          <Text
            style={{
              color: colours.white,
              fontFamily: fontFamily,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <Translate textKey="startEasyGame" />
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            backgroundColor: colours.amber,
            marginBottom: 12,
          },
          globalStyles.border,
          globalStyles.borderRadius8,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            newGameDispatches('normal');
          }}
          style={[
            globalStyles.padding12,
          ]}
          title={polyglot.t(`startNormalGame.${lang.toUpperCase()}`)}
          type="button"
        >
          <Text
            style={{
              color: colours.white,
              fontFamily: fontFamily,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <Translate textKey="startNormalGame" />
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            backgroundColor: colours.red,
            marginBottom: 12,
          },
          globalStyles.border,
          globalStyles.borderRadius8,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            newGameDispatches('hard');
          }}
          style={[
            globalStyles.padding12,
          ]}
          title={polyglot.t(`startHardGame.${lang.toUpperCase()}`)}
          type="button"
        >
          <Text
            style={{
              color: colours.white,
              fontFamily: fontFamily,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <Translate textKey="startHardGame" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewGameButtons;
