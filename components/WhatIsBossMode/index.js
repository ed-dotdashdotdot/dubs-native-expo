import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import PageHeading from '../PageHeading';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const WhatIsBossMode = props => {
  const { level } = { ...props };
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading text={polyglot.t(`whatIsBossMode.${lang.toUpperCase()}`)} />
        <Text style={[
          globalStyles.fontFamilyCourier,
        ]}>
          What is boss mode content
        </Text>
      </View>
    </ScrollView>    
  );
}

export default WhatIsBossMode;
