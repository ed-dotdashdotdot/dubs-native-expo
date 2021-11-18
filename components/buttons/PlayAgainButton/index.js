import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import InfoButtonSvg from './components/InfoButtonSvg';

const PlayAgainButton = props => {
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
        <InfoButtonSvg />
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