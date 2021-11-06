import React from 'react';
import { View } from 'react-native';

import DrawLanguageButton from './components/DrawLanguageButton';
import LanguageSelectorSelected from './components/LanguageSelectorSelected';

const LanguageSelector = props => {
  const { selectedLanguage } = { ...props };
  return (
    <>
      <LanguageSelectorSelected selectedLanguage={selectedLanguage} />
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
        <DrawLanguageButton whichLanguage="de" />
        <DrawLanguageButton whichLanguage="en" />
        <DrawLanguageButton whichLanguage="es" />
        <DrawLanguageButton whichLanguage="fr" />
        <DrawLanguageButton whichLanguage="it" />
        <DrawLanguageButton whichLanguage="pt" />
      </View>
    </>
  );
}

export default LanguageSelector;
