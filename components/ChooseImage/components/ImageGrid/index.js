import React from 'react';
import { View } from 'react-native';

import { colours } from '../../../../configuration/config.json';

import DrawThumb from '../DrawThumb';

const ImageGrid = props => {
  const {
    dimensions,
    imageList,
    title,
  } = { ...props };

  return (
    <View
      style={[
        {
          borderColor: colours.white,
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 2,
          borderTopWidth: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          padding: 12,
          paddingTop: 0,
          marginTop: 0,
        }
      ]}
    >
      {imageList.map(val => (
        <DrawThumb 
          dimensions={dimensions}
          imageRef={`${val}`} key={val} 
        />
      ))}
    </View>
  );
};

export default ImageGrid;
