import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import allActions from '../../actions';

import ChooseAnImageButton from '../ChooseAnImageButton';
import PageHeading from '../PageHeading';
import StartButton from '../StartButton';
import Translate from '../Translate';
import { colours, fontFamily } from '../../configuration/config.json';

import InfoInner from '../InfoInner';

import getGameData from '../../js/helpers/getGameData';
import whichLevelColour from '../../js/helpers/whichLevelColour';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

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
      <InfoInner>
        <PageHeading 
          colour={whichLevelColour(level)}
          text={polyglot.t(`${level}Level.${lang.toUpperCase()}`)} 
        />
        
        <View 
          style={[
            {
              backgroundColor: colours.black,
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 12,
            },
            globalStyles.borderRadius8,
          ]}
        >
          <View
            style={[
              {
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                borderRightWidth: 0,
                flex: 1,
              },
              globalStyles.border,
              globalStyles.padding12,
            ]}
          >
            <TouchableOpacity
              onPress={() => dispatch(gameActions.setGameBossMode(!game.bossMode))}
            >
              <Text
                style={{
                  color: colours.white,
                  fontFamily: fontFamily,
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <Translate textKey={game.bossMode ? 'turnBossModeOff' : 'turnBossModeOn'} />
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              {
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                justifyContent: 'center',
                width: 48,
              },
              globalStyles.border
            ]}
          >
            <TouchableOpacity
              onPress={() => dispatch(gameActions.setGameStatus('what-is-boss-mode'))}
            >
              <Text
                style={{
                  color: colours.white,
                  fontFamily: fontFamily,
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  width: '100%',
                }}
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
      </InfoInner>
    </ScrollView>
  );
};

GameReady.propTypes = {
  level: PropTypes.string.isRequired,
};

export default GameReady;
