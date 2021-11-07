import React from 'react';
import { ScrollView, View, } from 'react-native';
import { useSelector } from 'react-redux';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import DrawSection from './components/DrawSection';
import PageHeading from '../PageHeading';

import globalStyles from '../../css/style.js';

const ChooseImage = props => {
  const { dimensions } = { ...props };
  const images = useSelector(state => state.images);
  const language = useSelector(state => state.language);

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View 
        style={[
          globalStyles.infoInner,
        ]}
      >
        <PageHeading 
          text={polyglot.t(`chooseAnImageToPlayWith.${lang.toUpperCase()}`)} 
        />
        <View id="choose-image">
          {
            images.sections.map(val => (
              <DrawSection
                dimensions={dimensions}
                key={val.name} 
                section={val.name} 
              />
            ))
          }
        </View>
      </View>
    </ScrollView>
  );
};

export default ChooseImage;
