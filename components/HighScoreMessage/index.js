import React from 'react';
import { Text } from 'react-native';

// import Translate from '../Translate';

// import globalStyles from '../../css/style.js';

const HighScoreMessage = props => {

  const { isHighScore, currentHighScore } = { ...props };

  return (
    <Text
      style={{
        color: 'white',
        fontSize: 24,
        // fontWeight: 'bold',
      }}
    >
      {
        isHighScore ? 
          `New High score` :
          `High score: ${currentHighScore}`
      }
      
    </Text>
  );
};

export default HighScoreMessage;
