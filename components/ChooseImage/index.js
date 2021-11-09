import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

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
        {images.sections.map(val => (
          <DrawSection
            dimensions={dimensions}
            key={val.name} 
            section={val.name} 
          />
        ))}
      </InfoInner>
    </ScrollView>
  );
};

ChooseImage.propTypes = {
  dimensions: PropTypes.object.isRequired,
};

export default ChooseImage;
