import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import ChooseAnImageButton from '../buttons/ChooseAnImageButton';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import StartButton from '../buttons/StartButton';
import Translate from '../Translate';

import { getGameData } from '../../js/helpers/getGameData';
import { whichLevelColour } from '../../js/helpers/whichLevelColour';

import { colours, fontFamily } from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const GameReady = props => {
  const { level } = { ...props };
  const game = useSelector(state => state.game);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const startTextKey = 'startWithRandomImage';
  const gameData = getGameData(level);
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          colour={whichLevelColour(level)}
          textKey={`${level}Level`} 
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
