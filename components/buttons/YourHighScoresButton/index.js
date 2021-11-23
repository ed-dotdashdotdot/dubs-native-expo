import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../actions';

import YourHighScoresButtonSvg from './components/YourHighScoresButtonSvg';

const YourHighScoresButton = props => {
  const { width } = { ...props };
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('your-high-scores'));
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width,
        }}
      >
        <YourHighScoresButtonSvg />
      </View>
    </TouchableOpacity>
  );
};

YourHighScoresButton.defaultProps = {
  width: 36,
};

YourHighScoresButton.propTypes = {
  width: PropTypes.number.isRequired,
};

export default YourHighScoresButton;
