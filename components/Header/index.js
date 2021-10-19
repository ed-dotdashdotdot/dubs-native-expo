import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import styles from './styles.js';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerD}>D</Text>
      <Text style={styles.headerU}>U</Text>
      <Text style={styles.headerB}>B</Text>
      <Text style={styles.headerS}>S</Text>
    </View>
  );
}

export default Header;
