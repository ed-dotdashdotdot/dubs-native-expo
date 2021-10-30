import React from 'react';
import { Text, ScrollView, View, } from 'react-native';
import { useSelector } from 'react-redux';
// import classnames from 'classnames';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import DrawSection from './components/DrawSection';
// import Heading from '../../../ui.components/Heading';
// import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

// import ChooseImageStyled from './styles';
// import './css/index.scss';

import globalStyles from '../../css/style.js';

const ChooseImage = () => {
  const images = useSelector(state => state.images);
  const language = useSelector(state => state.language);

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading 
          text={polyglot.t(`chooseAnImageToPlayWith.${lang.toUpperCase()}`)} 
        />
        <View id="choose-image">
          {
            images.sections.map(val => (
              <DrawSection 
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
