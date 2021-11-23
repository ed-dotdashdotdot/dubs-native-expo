import React from 'react';
import { Text } from 'react-native';

import NewGameButtons from '../../../buttons/NewGameButtons';

const YourHighScoresNoResults = () => (
  <>
    <Text style={{ color: 'white', fontSize: 24 }}>
      • No high scores
    </Text>
    <Text style={{ color: 'white', fontSize: 24 }}>
      • Draw new game buttons
    </Text>
    <NewGameButtons 
      section='your-high-scores'
    />
  </>
);

export default YourHighScoresNoResults;
