import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// import { colours } from '../../../../configuration/config.json';

import LanguageSelectorSelectedSvg from '../LanguageSelectorSelectedSvg';

const LanguageSelectorSelected = props => {
  const { selectedLanguage } = { ...props };
  // const highlightColour = colours.white;
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
        {selectedLanguage === 'de' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'en' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'es' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'fr' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'it' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {selectedLanguage === 'pt' && <LanguageSelectorSelectedSvg />}
      </View>
    </View>
  );
};

LanguageSelectorSelected.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};

export default LanguageSelectorSelected;
