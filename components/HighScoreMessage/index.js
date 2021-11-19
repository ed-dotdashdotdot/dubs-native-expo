import React from 'react';
import { Text } from 'react-native';

import Translate from '../Translate';

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
      {isHighScore ? 
        <Translate textKey='newHighScore' /> : 
        (
          <>
            <Translate textKey='highScore' /> 
            {": "}
            {currentHighScore}
          </>
        )
      }
    </Text>
  );
};

export default HighScoreMessage;
