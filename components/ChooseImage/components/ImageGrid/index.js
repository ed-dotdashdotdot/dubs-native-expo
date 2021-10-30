import React from 'react';
import { Text, ScrollView, View, } from 'react-native';
// import classnames from 'classnames';

import DrawThumb from '../DrawThumb';

// import ImageGridStyled from './styles';
// import './css/index.scss';

const ImageGrid = props => {
  const {
    imageList,
    title,
  } = { ...props };

  return (
    <View
      // className={classnames(
      //   'choose-image-grid',
      //   title
      // )}
      style={[
        {
          borderColor: 'white',
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 2,
          padding: 12,
          borderTopWidth: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }
      ]}
    >
      {
        imageList.map(val => (
          <DrawThumb 
            imageRef={`${val}`} key={val} 
          />
        ))
      }
    </View>
  );
};

export default ImageGrid;
