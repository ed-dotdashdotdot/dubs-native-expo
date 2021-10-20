import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

import ChooseImage from '../ChooseImage';
import GameHome from '../GameHome';
import GameOn from '../GameOn';
import GameReady from '../GameReady';
import WhatIsBossMode from '../WhatIsBossMode';

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

  const { height, width } = useWindowDimensions();
  const isPortrait = () => {
    return height >= width;
  };

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
      styles.infoContainer,
    ]}>
      <View style={[
        // globalStyles.border,
        // globalStyles.borderRadius12,
        // styles.info,
      ],{
        // left: 200,
        // position: 'absolute',
        backgroundColor: 'rgba(255,0,255, 0.33)',
        width: width - (12 * 2),
        height: height - 176,
        // position: 'absolute',
        // top:0,
        // left: '50%',
        // transform: 'translateX(-50%)',
        // transform: [{ translateX: '-350%' }],
        paddingBottom: 0,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 12,
      }}>
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
                case 'choose-image':
                  return <ChooseImage />;
                // case 'game-over':
                //   return <GameOver />;
                // case 'game-paused':
                //   return <GamePaused />;
                case 'game-ready':
                  return (
                    <GameReady
                      // bossMode={bossMode}
                      // lang={lang}
                      level={game.level}
                      // gameImage={gameImage}
                    />
                  );
                case 'what-is-boss-mode':
                  return (
                    <WhatIsBossMode
                      bossMode={game.bossMode}
                    />
                  );
                case 'game-on':
                  return (
                    <GameOn
                      // bossMode={bossMode}
                      // gameImage={gameImage}
                      // invert={invert}
                      // lang="en"
                      // level="easy"
                      // percentComplete={percentComplete}
                      // status="game-on"
                    />
                  );
                default:
                  return <GameHome />;
              }
            })()}

          {/* </View>
        </ScrollView> */}
      </View>
    </View>
  );
}

export default Info;
