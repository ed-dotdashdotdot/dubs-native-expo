import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import PlayAgainButtonSvg from './components/PlayAgainButtonSvg';

import { getGameData } from '../../../js/helpers/getGameData';
import { getGameDataFromEntryKey } from '../../../js/helpers/getGameDataFromEntryKey';

const PlayAgainButton = ({ height, entryKey, width }) => {
  
  const gameDetails = getGameDataFromEntryKey(entryKey);
  const gameData = getGameData(gameDetails.level);

  const { gameActions, imagesActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.injectGameFound([]));
        dispatch(gameActions.setGameBossMode(gameDetails.bossMode));
        dispatch(gameActions.setGameData(gameData));
        dispatch(gameActions.setGameLevel(gameDetails.level));
        dispatch(gameActions.setGameSelected(''));
        dispatch(gameActions.setGameStatus('game-loading'));
        dispatch(imagesActions.setImagesSelected(gameDetails.image));
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width,
        }}
      >
        <PlayAgainButtonSvg />
      </View>
    </TouchableOpacity>
  );
};

PlayAgainButton.defaultProps = {
  width: 48,
};

PlayAgainButton.propTypes = {
  width: PropTypes.number.isRequired,
};

export default PlayAgainButton;
