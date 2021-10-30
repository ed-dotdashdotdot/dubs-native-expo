import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

import languageSelectorStyles from './styles.js';

const LanguageSelector = () => {
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <View style={languageSelectorStyles.languageSelectorContainer}>
      <View style={languageSelectorStyles.languageSelector}>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to German"
              activeOpacity={0.5}
              color={'white'}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('de'));
              }}
              title="German"
            >
              <Image
                style={languageSelectorStyles.flagImage}
                source={require('../../assets/flags/de.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to English"
              activeOpacity={0.5}
              color={'white'}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('en'));
              }}
              title="English"
            >
              <Image
                style={languageSelectorStyles.flagImage}
                source={require('../../assets/flags/en.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to Spanish"
              activeOpacity={0.5}
              color={'white'}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('es'));
              }}
              title="Spanish"
            >
              <Image
                style={languageSelectorStyles.flagImage}
                source={require('../../assets/flags/es.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to Italian"
              activeOpacity={0.5}
              color={'white'}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('it'));
              }}
              title="Italian"
            >
              <Image
                source={require('../../assets/flags/it.png')}
                style={languageSelectorStyles.flagImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to Portuguese"
              activeOpacity={0.5}
              color={'white'}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('pt'));
              }}
              title="Portuguese"
            >
              <Image
                style={languageSelectorStyles.flagImage}
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
