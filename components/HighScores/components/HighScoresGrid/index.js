import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DrawEntry from '../DrawEntry';

import globalStyles from '../../../../css/style';

const HighScoresGrid = props => {
  const {
    dimensions,
    highScoresList,
    section,
  } = { ...props };
  // console.log(section)
  // console.log('highScoresList.entryKey:');
  // console.log(highScoresList);
  // console.log(highScoresList[0].entryKey);
  // console.log('--');
  return (
    <View
      style={[
        {
          borderTopWidth: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          paddingTop: 0,
          marginTop: 0,
        },
        globalStyles.border,
        globalStyles.borderRadius8,
        globalStyles.padding12,
      ]}
    >
      {highScoresList.map(val => (
        <DrawEntry 
          dimensions={dimensions}
          duration={val.duration}
          entryKey={`--${section}--${val.image}--`} 
          imageRef={`${val.image}`} 
          key={`${section}-${val.image}`} 
          section={section}
        />
      ))}
    </View>
  );
};

HighScoresGrid.propTypes = {
  dimensions: PropTypes.object.isRequired,
  highScoresList: PropTypes.array.isRequired,
};

export default HighScoresGrid;
