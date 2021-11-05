import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import ChooseAnImageButton from '../ChooseAnImageButton';
import PageHeading from '../PageHeading';
import StartButton from '../StartButton';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import getGameData from '../../js/helpers/getGameData';
import whichLevelColour from '../../js/helpers/whichLevelColour';

import globalStyles from '../../css/style.js';

const GameReady = props => {
  const { level } = { ...props };
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';
  // const startTextKey = gameImage ? 'start' : 'startWithRandomImage';
  const startTextKey = 'startWithRandomImage';

  const gameData = getGameData(level);

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading 
          colour={whichLevelColour(level)}
          text={polyglot.t(`${level}Level.${lang.toUpperCase()}`)} 
        />
        
        <View 
          id='boss-mode-buttons'
          style={{
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 12,
          }}
        >
          <View
            style={{
              borderColor: 'white',
              borderStyle: 'solid',
              borderWidth: 2,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              borderRightWidth: 0,
              flex: 1,
              padding: 12,
            }}
          >
            <TouchableOpacity
              onPress={() => dispatch(gameActions.setGameBossMode(!game.bossMode))}
            >
              <Text
                style={[
                  {
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '100%',
                  },
                  globalStyles.fontFamilyCourier,  
                ]}
              >
                <Translate textKey={game.bossMode ? 'turnBossModeOn' : 'turnBossModeOff'} />
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderColor: 'white',
              borderStyle: 'solid',
              borderWidth: 2,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              justifyContent: 'center',
              width: 48,
            }}
          >
            <TouchableOpacity
              onPress={() => dispatch(gameActions.setGameStatus('what-is-boss-mode'))}
            >
              <Text
                style={[
                  {
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '100%',
                  },
                  globalStyles.fontFamilyCourier,  
                ]}
              >
                ?
              </Text>
            </TouchableOpacity>
          </View>

        </View>


        <ChooseAnImageButton />
        <StartButton
          gameData={gameData}
          startTextKey={startTextKey}
        />
      </View>
    </ScrollView>
  );
}

export default GameReady;
