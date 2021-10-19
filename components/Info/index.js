import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

import GameHome from '../GameHome';
import GameReady from '../GameReady';

// import { setGameStatus } from '../../actions';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const Info = () => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  // alert(game.status);
  // const state = useSelector(state => state);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(timerActions.setTimerStart(new Date().getTime()));
  //   // dispatch(timerActions.setTimerStart(timerStartDate(timer.paused)));
  //   // dispatch(timerActions.setTimerEnd(''));
  //   // dispatch(timerActions.setTimerPaused(0));
  //   // dispatch(timerActions.setTimerSaved(0));
  //   // dispatch(timerActions.setTimerStatus(''));
  //   // dispatch(gameActions.setGameStatus('game-over'));
  //   // dispatch(gameActions.setGameLevel('hard'));
  // }, []);
  return (
    <View style={[
      globalStyles.border,
      globalStyles.borderRadius12,
      styles.info,
    ]}>
      {/* <ScrollView>
        <View style={styles.infoInner}> */}
          {/* <Text style={[
            globalStyles.fontFamilyCourier,
            styles.infoHeading
          ]}>Open up App.js to start working on your app!</Text> */}

          {(() => {
            switch (game.status) {
              // case 'image-detail':
              //   return <ImageDetail image={imageDetail} level={level} />;
              // case 'choose-image':
              //   return <ChooseImage />;
              // case 'game-over':
              //   return <GameOver />;
              // case 'game-paused':
              //   return <GamePaused />;
              case 'game-ready':
                return (
                  <GameReady
                    // bossMode={bossMode}
                    // lang={lang}
                    // level={level}
                    // gameImage={gameImage}
                  />
                );
              // case 'what-is-boss-mode':
              //   return (
              //     <WhatIsBossMode
              //       bossMode={bossMode}
              //     />
              //   );
              // case 'game-on':
              //   return (
              //     <Game
              //       bossMode={bossMode}
              //       gameImage={gameImage}
              //       invert={invert}
              //       lang="en"
              //       level="easy"
              //       percentComplete={percentComplete}
              //       status="game-on"
              //     />
              //   );
              default:
                return <GameHome />;
            }
          })()}

        {/* </View>
      </ScrollView> */}
    </View>
  );
}

export default Info;
