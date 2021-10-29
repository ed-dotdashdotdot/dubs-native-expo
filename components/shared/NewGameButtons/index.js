import React from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../actions';
// import styles from '../../Container/styles';

// import { useDispatch } from 'react-redux';
// import classnames from 'classnames';
// import allActions from '../../../../../actions';

// import Button from '../../../../ui.components/button';
// import ContinueGameButton from '../../ContinueGameButton';
// import PlayThisGameAgainButton from '../../PlayThisGameAgainButton';
// import Translate from '../../../../Translate';

// import NewGameButtonsStyled from './styles';
// import './css/index.scss';

import Polyglot from 'node-polyglot';
import i18n from '../../../i18n';

import globalStyles from '../../../css/style.js';
import styles from './styles.js';

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
    dispatch(timerActions.setTimerStart(''));
    dispatch(timerActions.setTimerEnd(''));
    dispatch(timerActions.setTimerSaved(0));
    dispatch(timerActions.setTimerPaused(0));
    dispatch(timerActions.setTimerStatus(''));
  };
  return (
    <View
      style={styles.newGameButtons}
    >
      {/* {section === 'game-over' && <PlayThisGameAgainButton />} */}
      {/* {section === 'game-paused' && <ContinueGameButton />} */}
      <View
        style={[
          globalStyles.border,
          globalStyles.borderRadius8,
          styles.newGameButtonsButton, 
          styles.greenButton,
        ]}
      >
        <Button
          color='white'
          onPress={() => {
            // dispatch(gameActions.setGameLevel('easy'));
            // dispatch(gameActions.setGameStatus('game-ready'));
            newGameDispatches('easy');
          }}
          title={polyglot.t(`startEasyGame.${lang.toUpperCase()}`)}
          type="button"
        >
          {/* {polyglot.t(`${textKey}.${lang.toUpperCase()}`)} */}
          {/* <Translate textKey="startEasyGame" /> */}
        </Button>
      </View>
      <View
        style={[
          globalStyles.border,
          globalStyles.borderRadius8,
          styles.newGameButtonsButton, 
          styles.amberButton,
        ]}
      >
        <Button
          color='white'
          onPress={() => {
            // dispatch(gameActions.setGameLevel('normal'));
            // dispatch(gameActions.setGameStatus('game-ready'));
            newGameDispatches('normal');
          }}
          title={polyglot.t(`startNormalGame.${lang.toUpperCase()}`)}
          type="button"
        >
          {/* <Translate textKey="startNormalGame" /> */}
        </Button>
      </View>
      <View
        style={[
          globalStyles.border,
          globalStyles.borderRadius8,
          styles.newGameButtonsButton, 
          styles.redButton,
        ]}
      >
        <Button
          color='white'
          onPress={() => {
            // dispatch(gameActions.setGameLevel('hard'));
            // dispatch(gameActions.setGameStatus('game-ready'));
            newGameDispatches('hard');
          }}
          title={polyglot.t(`startHardGame.${lang.toUpperCase()}`)}
          type="button"
        >
          {/* <Translate textKey="startHardGame" /> */}
        </Button>
      </View>
    </View>
  );
};

export default NewGameButtons;
