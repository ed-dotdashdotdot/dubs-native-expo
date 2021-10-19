import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const Header = () => {
  const sharedCss = [
    globalStyles.colorWhite,
    globalStyles.fontFamilyCourier,
  ];
  return (
    <View style={[
      globalStyles.border,
      globalStyles.borderRadius12,
      styles.header,
    ]}>
      <Text style={[
        sharedCss,
        styles.headerD
      ]}>D</Text>
      <Text style={[
        sharedCss,
        styles.headerU
      ]}>U</Text>
      <Text style={[
        sharedCss,
        styles.headerB
      ]}>B</Text>
      <Text style={[
        sharedCss,
        styles.headerS
      ]}>S</Text>
    </View>
  );
}

export default Header;
