import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

// import { useSelector } from 'react-redux';

// import { highScoresSections } from '../../js/helpers/getHighScoresSections';
import { highScoresSections } from '../../configuration/config.json';

import HighScoresDrawSection from './components/HighScoresDrawSection';
import InfoInner from '../InfoInner';
import NoHighScores from './components/NoHighScores';
import PageHeading from '../PageHeading';

const HighScores = props => {
  const { dimensions } = { ...props };
  const duration = useSelector(state => state.duration);
  // console.log(duration.highScores)
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey={'highScores'}
        />
        {
          !duration.highScores.length ? (
            <NoHighScores />
          ) : 
        highScoresSections.map(val => { 
          return (
            <HighScoresDrawSection
              dimensions={dimensions}
              key={val} 
              section={val} 
            />
          )
        })}
      </InfoInner>
    </ScrollView>
  );
};

HighScores.propTypes = {
  dimensions: PropTypes.object.isRequired,
};

export default HighScores;
