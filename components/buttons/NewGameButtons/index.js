import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import ContinueGameButton from '../../buttons/ContinueGameButton';
import PlayThisGameAgainButton from '../../buttons/PlayThisGameAgainButton';
import Translate from '../../Translate';

import { 
  colours, 
  fontFamily 
} from '../../../configuration/config.json';

import globalStyles from '../../../css/style.js';

const NewGameButtons = ({ section }) => {
  const { gameActions, imagesActions, durationActions } = { ...allActions };
  const dispatch = useDispatch();
  const newGameDispatches = level => {
    dispatch(gameActions.injectGameFound([]));
    dispatch(gameActions.setGameBossMode(false));
    dispatch(gameActions.setGameClicks(0));
    dispatch(gameActions.setGameData([]));
    dispatch(gameActions.setGameLevel(level));
    dispatch(gameActions.setGameSelected(''));
    dispatch(gameActions.setGameStatus('game-ready'));;
    dispatch(imagesActions.setImagesLoaded(false));
    dispatch(imagesActions.setImagesSelected(''));
    dispatch(durationActions.setDurationEnd(''));
    dispatch(durationActions.setDurationPaused(0));
    dispatch(durationActions.setDurationSaved(0));
    dispatch(durationActions.setDurationStart(''));
    dispatch(durationActions.setDurationStatus(''));
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
          accessible={true}
          accessibilityRole='button'
          onPress={() => {
            newGameDispatches('easy');
          }}
          style={[
            globalStyles.padding12,
          ]}
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
          accessible={true}
          accessibilityRole='button'
          onPress={() => {
            newGameDispatches('normal');
          }}
          style={[
            globalStyles.padding12,
          ]}
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
          accessible={true}
          accessibilityRole='button'
          onPress={() => {
            newGameDispatches('hard');
          }}
          style={[
            globalStyles.padding12,
          ]}
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

NewGameButtons.propTypes = {
  section: PropTypes.string.isRequired,
};

export default NewGameButtons;
