import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Polyglot from 'node-polyglot';
import i18n from '../../../i18n';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../actions';

import DeleteHighScoreButtonSvg from './components/DeleteHighScoreButtonSvg';

const DeleteHighScoreButton = ({ entryKey, width }) => {
  const { duration, language } = useSelector(state => state);
  const { durationActions } = { ...allActions };
  const dispatch = useDispatch();
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en-GB';
  const highScoresFiltered = duration.highScores.filter(val => {
    return val.indexOf(entryKey) === -1;
  });

  const createTwoButtonAlert = () => {
    Alert.alert(
      polyglot.t(`deleteThisHighScore.${lang}`),
      null, [
        {
          text: polyglot.t(`cancel.${lang}`),
          style: 'cancel'
        },
        { 
          text: polyglot.t(`okay.${lang}`), 
          onPress: () => {
            dispatch(durationActions.setDurationHighScores(highScoresFiltered));
          }
        }
      ]
    );
  };

  return (
    <TouchableOpacity
      // onPress={() => {
      //   dispatch(durationActions.setDurationHighScores(highScoresFiltered));
      // }}
      onPress={createTwoButtonAlert}
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
