import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import DeleteHighScoreButtonSvg from './components/DeleteHighScoreButtonSvg';

const DeleteHighScoreButton = props => {
  const { width } = { ...props };
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        // dispatch(gameActions.setGameStatus('app-info'));
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width,
        }}
      >
        <DeleteHighScoreButtonSvg />
      </View>
    </TouchableOpacity>
  );
};

DeleteHighScoreButton.defaultProps = {
  width: 48,
};

DeleteHighScoreButton.propTypes = {
  width: PropTypes.number.isRequired,
};

export default DeleteHighScoreButton;
