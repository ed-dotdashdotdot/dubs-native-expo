import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

// import { useSelector } from 'react-redux';

// import { highScoresSections } from '../../js/helpers/getHighScoresSections';
import { highScoresSections } from '../../configuration/config.json';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import YourHighScoresDrawSection from './components/YourHighScoresDrawSection';
import YourHighScoresNoResults from './components/YourHighScoresNoResults';

const HighScores = props => {
  const { dimensions } = { ...props };
  const duration = useSelector(state => state.duration);
  // console.log(duration.highScores)
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
