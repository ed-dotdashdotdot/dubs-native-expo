import React from 'react';
import { Button, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles.js';

const LanguageSelector = () => {
  return (  
    <View style={styles.languageSelector}>
      <View style={styles.buttonContainer}>
        <View style={styles.de}>
          <TouchableOpacity
            accessibilityLabel="Switch language to German"
            activeOpacity={0.5}
            color={'white'}
            title="German"
            >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/de.png')}
              />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.en}>
          <TouchableOpacity
            accessibilityLabel="Switch language to English"
            activeOpacity={0.5}
            color={'white'}
            title="English"
            >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/en.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.es}>
          <TouchableOpacity
            accessibilityLabel="Switch language to Spanish"
            activeOpacity={0.5}
            color={'white'}
            title="Spanish"
          >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/es.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.it}>
          <TouchableOpacity
            accessibilityLabel="Switch language to Italian"
            activeOpacity={0.5}
            color={'white'}
            title="Italian"
          >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/it.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.pt}>
          <TouchableOpacity
            accessibilityLabel="Switch language to Portuguese"
            activeOpacity={0.5}
            color={'white'}
            title="Portuguese"
          >
            <Image
              style={styles.flag}
              source={require('../../assets/flags/pt.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LanguageSelector;
