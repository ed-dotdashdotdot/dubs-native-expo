import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DrawLanguageButton from './components/DrawLanguageButton';
import LanguageSelectorSelected from './components/LanguageSelectorSelected';

import { supportedLanguages } from '../../configuration/config.json';

const LanguageSelector = props => {
  const { selectedLanguage, width } = { ...props };
  return (
    <>
      <LanguageSelectorSelected 
        selectedLanguage={selectedLanguage} 
        width={width}
      />
      <View 
        style={{
          bottom: 12,
          display: 'flex',
          flexDirection: 'row',
          height: 48,
          position: 'absolute',
          width: '100%',
        }}
      >
        {supportedLanguages.map(value => (
          <DrawLanguageButton 
            key={value.countryCode}
            whichLanguage={value.countryCode} 
            width={width} 
          />
        ))}
      </View>
    </>
  );
};

LanguageSelector.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default LanguageSelector;
