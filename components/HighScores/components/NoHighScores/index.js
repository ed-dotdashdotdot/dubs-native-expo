import React from 'react';
import { ScrollView, Text } from 'react-native';

import InfoInner from '../../../InfoInner';

const NoHighScores = () => (
  <ScrollView>
    <InfoInner>
      <Text style={{ color: 'white', fontSize: 24 }}>
        • No high scores
      </Text>
      <Text style={{ color: 'white', fontSize: 24 }}>
        • Draw new game buttons
      </Text>
    </InfoInner>
  </ScrollView>
);

export default NoHighScores;
