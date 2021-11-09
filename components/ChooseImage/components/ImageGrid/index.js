import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DrawThumb from '../DrawThumb';

import globalStyles from '../../../../css/style';

const ImageGrid = props => {
  const {
    dimensions,
    imageList,
  } = { ...props };

  return (
    <View
      style={[
        {
          borderTopWidth: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          paddingTop: 0,
          marginTop: 0,
        },
        globalStyles.border,
        globalStyles.borderRadius8,
        globalStyles.padding12,
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

ImageGrid.propTypes = {
  dimensions: PropTypes.object.isRequired,
  imageList: PropTypes.array.isRequired,
};

export default ImageGrid;
