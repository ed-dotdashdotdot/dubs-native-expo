import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import HighScoresDrawSection from './components/HighScoresDrawSection';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

const HighScores = props => {
  const { dimensions } = { ...props };
  const images = useSelector(state => state.images);
  const highScoresSections = [
    "easy",
    "normal",
    "hard",
    "easyBossMode",
    "normalBossMode",
    "hardBossMode",
  ];
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey={'highScores'}
        />
        {highScoresSections.map(val => (
          <HighScoresDrawSection
            dimensions={dimensions}
            key={val} 
            section={val} 
          />
        ))}
      </InfoInner>
    </ScrollView>
  );
};

HighScores.propTypes = {
  dimensions: PropTypes.object.isRequired,
};

export default HighScores;
