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

import styles from './styles.js';

const NewGameButtons = props => {
  const {
    section
  } = { ...props };
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  // const { gameActions, imagesActions, timerActions } = { ...allActions };
  // const dispatch = useDispatch();

  // const newGameDispatches = level => {
  //   dispatch(gameActions.setGameClicks(0));
  //   dispatch(gameActions.setGameStatus('game-ready'));
  //   dispatch(gameActions.setGameLevel(level));
  //   dispatch(gameActions.setGameBossMode(false));
  //   dispatch(gameActions.injectGameFound([]));
  //   dispatch(gameActions.setGameData([]));
  //   dispatch(gameActions.setGameSelected(''));
  //   dispatch(gameActions.setGameId(''));
  //   // dispatch(gameActions.setGameInvert(false));
  //   dispatch(imagesActions.setImagesSelected(''));
  //   dispatch(timerActions.setTimerStart(''));
  //   dispatch(timerActions.setTimerEnd(''));
  //   dispatch(timerActions.setTimerSaved(0));
  //   dispatch(timerActions.setTimerPaused(0));
  //   dispatch(timerActions.setTimerStatus(''));
  // };
  return (
    <View
      style={styles.newGameButtons}
      // className={
      //   classnames(
      //     'new-game-buttons',
      //     section,
      //   )
      // }
    >
      {/* {section === 'game-over' && <PlayThisGameAgainButton />} */}
      {/* {section === 'game-paused' && <ContinueGameButton />} */}
      <View
        style={[styles.newGameButtonsButton, styles.greenButton]}
      >
        <Button
          color='white'
          onPress={() => {
            dispatch(gameActions.setGameLevel('easy'));
            dispatch(gameActions.setGameStatus('game-ready'));
          }}
          title="Start easy game"
          type="button"
        >
          {/* <Translate textKey="startEasyGame" /> */}
        </Button>
      </View>
      <View
        style={[styles.newGameButtonsButton, styles.amberButton]}
      >
        <Button
          color='white'
          onPress={() => {
            dispatch(gameActions.setGameLevel('normal'));
            dispatch(gameActions.setGameStatus('game-ready'));
          }}
          title='Start normal game'
          type="button"
        >
          {/* <Translate textKey="startNormalGame" /> */}
        </Button>
      </View>
      <View
        style={[styles.newGameButtonsButton, styles.redButton]}
      >
        <Button
          color='white'
          onPress={() => {
            dispatch(gameActions.setGameLevel('hard'));
            dispatch(gameActions.setGameStatus('game-ready'));
          }}
          title='Start hard game'
          type="button"
        >
          {/* <Translate textKey="startHardGame" /> */}
        </Button>
      </View>
    </View>
  );
};

export default NewGameButtons;
