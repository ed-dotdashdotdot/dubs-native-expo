// import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { 
  ImageBackground, 
  useWindowDimensions, 
  View 
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import AppStateManager from '../AppStateManager';
import Header from '../Header';
import GameOnHeader from '../GameOnHeader';
import GameOptions from '../GameOptions';
import Info from '../Info';
import LanguageSelector from '../LanguageSelector';
import Options from '../Options';
import Mesh from '../Mesh';
import { colours } from '../../configuration/config.json';

import isGameOver from '../../js/helpers/isGameOver';

const Container = () => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const { 
    height , 
    width,
  } = useWindowDimensions();

  useEffect(() => {
    if (isGameOver(game.status, game.data.length, game.found.length)) {
      dispatch(gameActions.setGameStatus('game-over'));
    }
  }, [game.found.length]);

  return (
    <AppStateManager
      status={game.status}
    >
      <View 
        style={{
          alignItems: 'center',
          backgroundColor: colours.black050,
          flex: 1,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <ImageBackground 
          style={[
            {
              height: height,
              width: width,
            },
          ]}
        >
          <Mesh 
            colour={colours.white025} 
            height={height}
            width={width}
          />
        </ImageBackground>
        {game.status === 'game-on' ? (
          <GameOnHeader 
            bossMode={game.bossMode} 
            level={game.level} 
          />
        ) : 
          <Header />
        }
        <Info />
        {game.status === 'game-home' && <LanguageSelector />}
        {
          game.status === 'game-home'
            ? <LanguageSelector selectedLanguage={language.selected} />
            : game.status === 'game-on' 
              ? <GameOptions />
              : game.status === 'game-loading'
                ? null
                : <Options />
        }
      </View>
    </AppStateManager>
  );
}

export default Container;
