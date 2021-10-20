import React from 'react';
import { Button, View, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import styles from './styles.js';

const LanguageSelector = () => {
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <View style={styles.languageSelectorContainer}>
      <View style={styles.languageSelector}>
        <View style={styles.buttonContainer}>
          <View style={styles.de}>
            <TouchableOpacity
              accessibilityLabel="Switch language to German"
              activeOpacity={0.5}
              color={'white'}
              title="German"
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('de'));
              }}
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
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('en'));
              }}
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
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('es'));
              }}
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
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('it'));
              }}
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
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('pt'));
              }}
            >
              <Image
                style={styles.flag}
                source={require('../../assets/flags/pt.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LanguageSelector;
