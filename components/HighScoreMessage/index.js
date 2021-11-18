import React from 'react';
import { Text } from 'react-native';

import Translate from '../Translate';

// import globalStyles from '../../css/style.js';

import { colours } from '../../configuration/config.json';

const HighScoreMessage = props => {
  const { isHighScore, currentHighScore } = { ...props };
  return (
    <Text
      style={{
        color: colours.white,
        fontSize: 24,
      }}
    >
      {
        isHighScore ? 
          <Translate textKey='newHighScore' /> :
          `High score: ${currentHighScore}`
      }
      
    </Text>
  );
};

export default HighScoreMessage;
