import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import MoreButtonSvg from './components/MoreButtonSvg';

const MoreButton = props => {
  const { width } = { ...props };
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('language-select'));
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width,
        }}
      >
        <MoreButtonSvg />
      </View>
    </TouchableOpacity>
  );
};

MoreButton.defaultProps = {
  width: 36,
};

MoreButton.propTypes = {
  width: PropTypes.number.isRequired,
};

export default MoreButton;
