import React from 'react';
import { Text } from 'react-native';

import Translate from '../Translate';

import { localiseDurationSeconds } from '../../js/helpers/localiseDurationSeconds';

import { 
  colours 
} from '../../configuration/config.json';

const HighScoreMessage = ({ currentHighScore, isHighScore, lang }) => (
  <Text
    style={{
      color: colours.white,
      fontSize: 20,
    }}
  >
    {isHighScore ? 
      <Translate textKey='newHighScore' /> : 
      (
        <>
          <Translate textKey='highScore' /> 
          {": "}
          {localiseDurationSeconds(currentHighScore, lang)}
          {"\u00A0"}
          <Translate textKey='secondsLong' /> 
        </>
      )
    }
  </Text>
);

export default HighScoreMessage;
