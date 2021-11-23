import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import PlayAgainButton from '../../../buttons/PlayAgainButton';
import DeleteHighScoreButton from '../../../buttons/DeleteHighScoreButton';

const HighScoresDrawEntryButtons = props => {
  const {
    entryKey,
    isPhone,
    highScoreKey,
    image,
  } = { ...props };

  // console.log('entryKey:')
  // console.log(entryKey)

  return (
    <View
      id='buttonsColumn'
      style={{
        alignContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 96,
        width: isPhone ? 48 : 108,
      }}
    >
      <View
        id='button1'
        style={{
          alignItems: isPhone ? 'flex-end' : 'flex-start',
          alignSelf: 'flex-end',
          height: 48,
          width: isPhone ? 48 : 60,
        }}
        >
        <PlayAgainButton 
          height={isPhone ? 40 : 48} 
          highScoreKey={highScoreKey}
          width={isPhone ? 40 : 48}  
        />
      </View>
      <View
        id='button2'
        style={{
          alignItems: 'flex-end',
          height: 48,
          width: isPhone ? 48 : 48,
        }}
      >
        <DeleteHighScoreButton 
          entryKey={entryKey}
          height={isPhone ? 40 : 48} 
          highScoreKey={highScoreKey}
          width={isPhone ? 40 : 48}  
        />
      </View>
    </View>
  );
};

HighScoresDrawEntryButtons.propTypes = {
  isPhone: PropTypes.bool.isRequired,
  highScoreKey: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HighScoresDrawEntryButtons;
