import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import styles from './styles.js';

const Container = props => {
  const { children } = { ...props };
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

export default Container;
