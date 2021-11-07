import React from 'react';
import { View } from 'react-native';

import { colours } from '../../../../configuration/config.json';

import LanguageSelectorSelectedSvg from '../LanguageSelectorSelectedSvg';

const LanguageSelectorSelected = props => {
  const { selectedLanguage } = { ...props };
  const highlightColour = colours.white;
  return (
    <View 
      style={{
        bottom: 60,
        display: 'flex',
        flexDirection: 'row',
        height: 12,
        position: 'absolute',
        width: '100%',
      }}
    >
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'de' && <LanguageSelectorSelectedSvg colour={highlightColour} />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'en' && <LanguageSelectorSelectedSvg colour={highlightColour} />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'es' && <LanguageSelectorSelectedSvg colour={highlightColour} />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'fr' && <LanguageSelectorSelectedSvg colour={highlightColour} />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'it' && <LanguageSelectorSelectedSvg colour={highlightColour} />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'pt' && <LanguageSelectorSelectedSvg colour={highlightColour} />}
      </View>
    </View>
  );
}

export default LanguageSelectorSelected;
