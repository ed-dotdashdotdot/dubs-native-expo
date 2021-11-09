import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import DrawSection from './components/DrawSection';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

const ChooseImage = props => {
  const { dimensions } = { ...props };
  const images = useSelector(state => state.images);
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey={'chooseAnImageToPlayWith'}
        />
        <View>
          {images.sections.map(val => (
            <DrawSection
              dimensions={dimensions}
              key={val.name} 
              section={val.name} 
            />
          ))}
        </View>
      </InfoInner>
    </ScrollView>
  );
};

ChooseImage.propTypes = {
  dimensions: PropTypes.object.isRequired,
};

export default ChooseImage;
