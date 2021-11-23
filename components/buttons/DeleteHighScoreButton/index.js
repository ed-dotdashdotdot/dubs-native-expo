import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../actions';

import DeleteHighScoreButtonSvg from './components/DeleteHighScoreButtonSvg';

const DeleteHighScoreButton = props => {
  const { entryKey, width } = { ...props };
  const duration = useSelector(state => state.duration);
  console.log('ENTRYKEY');
  console.log(entryKey);
  const { durationActions } = { ...allActions };
  const dispatch = useDispatch();
  const highScoresFiltered = duration.highScores.filter(val => {
    return val.indexOf(entryKey) === -1;
  });
  console.log(highScoresFiltered)
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(durationActions.setDurationHighScores(highScoresFiltered));
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
