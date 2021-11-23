import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../../actions';

// import ExpoFastImage from 'expo-fast-image';
import DrawFastestTime from '../../../DrawFastestTime';
import DrawThumb from '../DrawThumb';
import HighScoresDrawEntryButtons from '../HighScoresDrawEntryButtons';
import PlayAgainButton from '../../../buttons/PlayAgainButton';
import DeleteHighScoreButton from '../../../buttons/DeleteHighScoreButton';
import Translate from '../../../Translate';

import { getHighScoreKey } from '../../../../js/helpers/getHighScoreKey';

import { 
  // colours, 
  fontFamily, 
  // ipAddress 
} from '../../../../configuration/config.json';

// import globalStyles from '../../../../css/style';

const DrawEntry = props => {
  const { 
    dimensions,
    duration,
    entryKey,
    imageRef,
    section,
  } = { ...props };

  // console.log('\n--');
  // console.log('entryKey');
  // console.log(entryKey);
  // console.log('--\n');

  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);

  // console.log('game:');
  // console.log(game);

  // const maxHeight = dimensions.height - 24 - 24 - 8;
  // const maxWidth = dimensions.width - 24 - 24 - 8;
  // const imagesPerRow = dimensions.width > 999 ? 6 : dimensions.width > 600 ? 4 : 2;

  const { imagesActions, gameActions } = { ...allActions };
  const dispatch = useDispatch();
  // const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageRef}.jpg&size=small`;

  // console.log(dimensions)

  return (
    <View 
      style={[
        { 
          // backgroundColor: '#00ff0080',
          // padding: 6,
          marginBottom: 12,
          flexDirection: 'row'
        }, {
          // height: (maxWidth / imagesPerRow),
          // width: (maxWidth / imagesPerRow),
          height: 96,
          width: '100%',
        }
      ]}
    >
      <View style={{ width: 96 }}>
        <DrawThumb 
          dimensions={dimensions}
          imageRef={imageRef} 
        />
      </View>

      {/* {dimensions.width > 600 && ( */}
        <View 
          style={{ 
            // backgroundColor: 'red',
            width: 12,
          }} 
        />
      {/* )} */}

      {/* <View style={{width: 60}} /> */}
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
          {/* {duration}
          {" "}
          <Translate textKey='secondsShort' /> */}
          <DrawFastestTime
            lang={language.selected}
            time={duration}
          />
        </Text>
      </View>
      {/* <View style={{width: 48, backgroundColor: 'blue'}} /> */}
      {/* <View style={{width: 48}}>
        <DeleteHighScoreButton />
      </View>
      <View style={{width: 12}} />
      <View style={{width: 48}} >
        <PlayAgainButton />
      </View> */}
      {/* <View style={{width: 48}} /> */}
      {/* <View
        id='buttonsColumn'
        style={{
          backgroundColor: 'blue',
          width: dimensions.width > 600 ? 96 : 48,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          height: 96,
          alignItems: 'flex-end',
        }}
      >
        <View
          id='button1'
          style={{
            backgroundColor: 'purple',
            height: 48,
            // width: 48,
            alignSelf: 'center',
            // flex: 1,
          }}
          >
          <PlayAgainButton height={48} width={48} />
        </View>
        <View
          id='button2'
          style={{
            backgroundColor: 'magenta',
            // flex: 1,
            height: 48,
            // width: 48,
          }}
        >
          <DeleteHighScoreButton height={48} width={48} />
        </View>
      </View> */}

      <HighScoresDrawEntryButtons 
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

DrawEntry.propTypes = {
  dimensions: PropTypes.object.isRequired,
  imageRef: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};

export default DrawEntry;
