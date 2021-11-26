import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import YourHighScoresDrawEntry from '../YourHighScoresDrawEntry';

import globalStyles from '../../../../css/globalStyles.js';

const YourHighScoresGrid = ({ dimensions, highScoresList, section }) => (
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
        marginTop: 0,
        paddingTop: 0,
      },
      globalStyles.border,
      globalStyles.borderRadius8,
      globalStyles.padding12,
    ]}
  >
    {highScoresList.map(val => (
      <YourHighScoresDrawEntry 
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

YourHighScoresGrid.propTypes = {
  dimensions: PropTypes.object.isRequired,
  highScoresList: PropTypes.array.isRequired,
  section: PropTypes.string,
};

export default YourHighScoresGrid;
