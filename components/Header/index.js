import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const Header = () => {
  return (
    <View style={[
      globalStyles.border,
      globalStyles.borderRadius12,
      styles.header,
    ]}>
      <Text style={[
        globalStyles.colorWhite,
        globalStyles.fontFamilyCourier,
        styles.headerD
      ]}>D</Text>
      <Text style={[
        globalStyles.colorWhite,
        globalStyles.fontFamilyCourier,
        styles.headerU
      ]}>U</Text>
      <Text style={[
        globalStyles.colorWhite,
        globalStyles.fontFamilyCourier,
        styles.headerB
      ]}>B</Text>
      <Text style={[
        globalStyles.colorWhite,
        globalStyles.fontFamilyCourier,
        styles.headerS
      ]}>S</Text>
    </View>
  );
}

export default Header;
