import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import ChooseImageDrawSection from './components/ChooseImageDrawSection';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

const ChooseImage = ({ dimensions }) => {
  const { images } = useSelector(state => state);
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey={'chooseAnImageToPlayWith'}
        />
        {images.sections.map(val => (
          <ChooseImageDrawSection
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
