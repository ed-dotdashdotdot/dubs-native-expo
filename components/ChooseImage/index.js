import React from 'react';
import { ScrollView, View, } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import DrawSection from './components/DrawSection';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

const ChooseImage = props => {
  const { dimensions } = { ...props };
  const images = useSelector(state => state.images);
  const language = useSelector(state => state.language);

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          text={polyglot.t(`chooseAnImageToPlayWith.${lang.toUpperCase()}`)} 
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
