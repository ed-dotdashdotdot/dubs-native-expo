import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import DrawFastestTime from '../../../DrawFastestTime';
import YourHighScoresDrawEntryButtons from '../YourHighScoresDrawEntryButtons';
import YourHighScoresDrawThumb from '../YourHighScoresDrawThumb';

import { getHighScoreKey } from '../../../../js/helpers/getHighScoreKey';

import { 
  fontFamily, 
} from '../../../../configuration/config.json';

const YourHighScoresDrawEntry = ({ dimensions, duration, entryKey, imageRef, section }) => {
  const { game, language } = useSelector(state => state);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 96,
        marginBottom: 12,
        width: '100%',
      }}
    >
      <View style={{ width: 96 }}>
        <YourHighScoresDrawThumb 
          imageRef={imageRef} 
        />
      </View>
      <View
        style={{ 
          width: 12,
        }} 
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            alignSelf: dimensions.width > 600 ? 'center' : 'flex-start',
            color: 'white',
            fontFamily: fontFamily,
            fontSize: dimensions.width > 600 ? 20 : 20,
            fontWeight: 'bold',
          }}
        >
          <DrawFastestTime
            lang={language.selected}
            time={duration}
          />
        </Text>
      </View>
      <YourHighScoresDrawEntryButtons 
        entryKey={entryKey}
        isPhone={dimensions.width < 600 ? true : false}
        highScoreKey={getHighScoreKey(
          game.level,
          section,
          imageRef
        )}
        image={imageRef}
      />
    </View>
  );
};

YourHighScoresDrawEntry.propTypes = {
  dimensions: PropTypes.object.isRequired,
  imageRef: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};

export default YourHighScoresDrawEntry;
