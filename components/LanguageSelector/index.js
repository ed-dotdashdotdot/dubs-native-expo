import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

import LanguageSelectorSelected from '../LanguageSelectorSelected';

import languageSelectorStyles from './styles.js';

const LanguageSelector = props => {
  const { language } = { ...props };
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <>
      <LanguageSelectorSelected language={language} />
      <View 
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 48,
          width: '100%',
          position: 'absolute',
          bottom: 12,
        }}
      >
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to German"
              activeOpacity={0.5}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('de'));
              }}
            >
              <Image
                source={require('../../assets/flags/de.png')}
                style={languageSelectorStyles.flagImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to English"
              activeOpacity={0.5}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('en'));
              }}
            >
              <Image
                source={require('../../assets/flags/en.png')}
                style={languageSelectorStyles.flagImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to Spanish"
              activeOpacity={0.5}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('es'));
              }}
            >
              <Image
                source={require('../../assets/flags/es.png')}
                style={languageSelectorStyles.flagImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={languageSelectorStyles.buttonContainer}>
          <View style={languageSelectorStyles.flag}>
            <TouchableOpacity
              accessibilityLabel="Switch language to Italian"
              activeOpacity={0.5}
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('it'));
              }}
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
              onPress={() => {
                dispatch(languageActions.setChangeLanguage('pt'));
              }}
            >
              <Image
                source={require('../../assets/flags/pt.png')}
                style={languageSelectorStyles.flagImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default LanguageSelector;
