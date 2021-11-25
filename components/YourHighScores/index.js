import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import InfoInner from '../InfoInner';
import NewGameButtons from '../buttons/NewGameButtons';
import PageHeading from '../PageHeading';
import YourHighScoresDrawSection from './components/YourHighScoresDrawSection';

import { highScoresSections } from '../../configuration/config.json';

const HighScores = ({ dimensions }) => {
  const duration = useSelector(state => state.duration);
  const pageTitleKey = duration.highScores.length ? 'yourHighScores' : 'youHaveNoHighScoresSaved'
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey={pageTitleKey}
        />
        {!duration.highScores.length ? (
          <NewGameButtons 
            section='your-high-scores'
          />
         ) : 
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
