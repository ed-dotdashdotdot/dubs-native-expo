import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import allActions from '../../../../actions';

import ExpoFastImage from 'expo-fast-image';
import DrawThumb from '../DrawThumb';
import PlayAgainButton from '../../../buttons/PlayAgainButton';

import { colours, fontFamily, ipAddress } from '../../../../configuration/config.json';

import globalStyles from '../../../../css/style';

const DrawEntry = props => {
  const { 
    dimensions, 
    duration, 
    imageRef 
  } = { ...props };
  // console.log(`HERE: ${imageRef}`);
  // console.log(duration);

  // const maxHeight = dimensions.height - 24 - 24 - 8;
  // const maxWidth = dimensions.width - 24 - 24 - 8;
  // const imagesPerRow = dimensions.width > 999 ? 6 : dimensions.width > 600 ? 4 : 2;

  const { imagesActions, gameActions } = { ...allActions };
  const dispatch = useDispatch();
  // const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${imageRef}.jpg&size=small`;

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
      <View
        style={{
          backgroundColor: '#0000ff',
          width: 96,
        }}
      >
        <DrawThumb 
          dimensions={dimensions}
          imageRef={imageRef} 
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontFamily: fontFamily,
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          {duration}
          {" seconds"}
        </Text>
      </View>
      <View
        style={{
          width: 48,
        }}
      />
      <View
        style={{
          // backgroundColor: '#00ffff',
          width: 48,
        }}
      >
        <PlayAgainButton />
      </View>
    </View>
  );
};

DrawEntry.propTypes = {
  dimensions: PropTypes.object.isRequired,
  imageRef: PropTypes.string.isRequired,
};

export default DrawEntry;
