import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../actions';
// import styles from '../../Container/styles';

// import { useDispatch } from 'react-redux';
// import classnames from 'classnames';
// import allActions from '../../../../../actions';

// import Button from '../../../../ui.components/button';
// import ContinueGameButton from '../../ContinueGameButton';
import PlayThisGameAgainButton from '../../PlayThisGameAgainButton';
import Translate from '../../Translate';

// import NewGameButtonsStyled from './styles';
// import './css/index.scss';

import Polyglot from 'node-polyglot';
import i18n from '../../../i18n';

import globalStyles from '../../../css/style.js';
// import styles from './styles.js';

const NewGameButtons = props => {
  const {
    section
  } = { ...props };
  const game = useSelector(state => state.game);
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
    dispatch(imagesActions.setImagesSelected(''));
    dispatch(timerActions.setTimerStart('1635548563000'));
    dispatch(timerActions.setTimerEnd('1635548593550'));
    dispatch(timerActions.setTimerSaved(0));
    dispatch(timerActions.setTimerPaused(0));
    dispatch(timerActions.setTimerStatus(''));
  };
  return (
    <View
      style={[
        {
          alignSelf: 'center',
          display: 'flex',
          maxWidth: 400,
          minWidth: 300,
          width: '50%',
        },
      ]}
    >
      {section === 'game-over' && <PlayThisGameAgainButton />}
      {/* {section === 'game-paused' && <ContinueGameButton />} */}
      <View
        style={[
          {
            backgroundColor: 'green',
            marginBottom: 12,
          },
          globalStyles.border,
          globalStyles.borderRadius8,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            // dispatch(gameActions.setGameLevel('easy'));
            // dispatch(gameActions.setGameStatus('game-ready'));
            newGameDispatches('easy');
          }}
          style={[
            {
              padding: 12,
            }
          ]}
          title={polyglot.t(`startEasyGame.${lang.toUpperCase()}`)}
          type="button"
        >
          <Text
            style={[
              {
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              },
              globalStyles.fontFamilyCourier,  
            ]}
          >
            <Translate textKey="startEasyGame" />
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            backgroundColor: 'orange',
            marginBottom: 12,
          },
          globalStyles.border,
          globalStyles.borderRadius8,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            // dispatch(gameActions.setGameLevel('normal'));
            // dispatch(gameActions.setGameStatus('game-ready'));
            newGameDispatches('normal');
          }}
          style={[
            {
              padding: 12,
            }
          ]}
          title={polyglot.t(`startNormalGame.${lang.toUpperCase()}`)}
          type="button"
        >
          <Text
            style={[
              {
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              },
              globalStyles.fontFamilyCourier,  
            ]}
          >
            <Translate textKey="startNormalGame" />
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            backgroundColor: 'red',
            marginBottom: 12,
          },
          globalStyles.border,
          globalStyles.borderRadius8,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            // dispatch(gameActions.setGameLevel('hard'));
            // dispatch(gameActions.setGameStatus('game-ready'));
            newGameDispatches('hard');
          }}
          style={[
            {
              padding: 12,
            }
          ]}
          title={polyglot.t(`startHardGame.${lang.toUpperCase()}`)}
          type="button"
        >
          <Text
            style={[
              {
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              },
              globalStyles.fontFamilyCourier,  
            ]}
          >
            <Translate textKey="startHardGame" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewGameButtons;
