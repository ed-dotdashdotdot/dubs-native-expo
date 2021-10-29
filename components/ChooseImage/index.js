import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import PageHeading from '../PageHeading';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const ChooseImage = () => {
  const language = useSelector(state => state.language);

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading text={polyglot.t(`chooseAnImageToPlayWith.${lang.toUpperCase()}`)} />
        <Text style={[
          globalStyles.fontFamilyCourier,
        ]}>
          Choose image content
        </Text>
      </View>
    </ScrollView>
  );
}

export default ChooseImage;
