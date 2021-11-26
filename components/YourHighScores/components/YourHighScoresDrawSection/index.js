import React from 'react';
import { View } from 'react-native';

import { useSelector } from 'react-redux';

import YourHighScoresSectionHeading from '../YourHighScoresSectionHeading';
import YourHighScoresGrid from '../YourHighScoresGrid';

const YourHighScoresDrawSection = ({ dimensions, section }) => {
  const duration = useSelector(state => state.duration);
  const highScoresFilter = duration.highScores.filter(val => val.indexOf(`${section}--`) !== -1);

  let highScoresList;

  if (highScoresFilter.length !== 0) {

    // natural sort
    var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    highScoresFilter.sort(collator.compare);

    // build object
    highScoresList = highScoresFilter.map(val => {
      return {
        duration: val.split('--')[0],
        image: val.split('--')[2],
      };
    });
  }

  return highScoresFilter.length !== 0 ? (
    <View
      style={{
        marginBottom: 12,
        backgroundColor: '#00000080',
      }}
    >
      <YourHighScoresSectionHeading 
        textKey={section} 
      />
      <YourHighScoresGrid 
        dimensions={dimensions}
        highScoresList={highScoresList} 
        section={section}
      />
    </View>
  ) : null;
};

export default YourHighScoresDrawSection;
