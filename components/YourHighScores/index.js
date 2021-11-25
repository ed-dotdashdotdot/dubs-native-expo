import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import YourHighScoresDrawSection from './components/YourHighScoresDrawSection';
import YourHighScoresNoResults from './components/YourHighScoresNoResults';

import { highScoresSections } from '../../configuration/config.json';

const HighScores = ({ dimensions }) => {
  const duration = useSelector(state => state.duration);
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey={'yourHighScores'}
        />
        {!duration.highScores.length ? 
          <YourHighScoresNoResults /> : 
          highScoresSections.map(val => (
            <YourHighScoresDrawSection
              dimensions={dimensions}
              key={val} 
              section={val} 
            />
          ))
        }
      </InfoInner>
    </ScrollView>
  );
};

HighScores.propTypes = {
  dimensions: PropTypes.object.isRequired,
};

export default HighScores;
