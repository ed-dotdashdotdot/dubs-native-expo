import React from 'react';
import { Button, View, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import languageSelectorStyles from './styles.js';

const LanguageSelector = () => {
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <View style={languageSelectorStyles.languageSelectorContainer}>
      <View style={languageSelectorStyles.languageSelector}>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.de}>
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
                style={languageSelectorStyles.flag}
                source={require('../../assets/flags/de.png')}
                />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.en}>
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
                style={languageSelectorStyles.flag}
                source={require('../../assets/flags/en.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.es}>
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
                style={languageSelectorStyles.flag}
                source={require('../../assets/flags/es.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.it}>
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
                style={languageSelectorStyles.flag}
                source={require('../../assets/flags/it.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.pt}>
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
                style={languageSelectorStyles.flag}
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
