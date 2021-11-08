import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import LanguageSelectorSelectedSvg from '../LanguageSelectorSelectedSvg';

import { supportedLanguages } from '../../../../configuration/config.json';

const LanguageSelectorSelected = props => {
  const { selectedLanguage } = { ...props };
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
      {
        supportedLanguages.map(value => (
          <View style={{ flex: 1 }} key={value.countryCode}>
            <LanguageSelectorSelectedSvg show={selectedLanguage === value.countryCode} />
          </View>
        ))
      }
    </View>
  );
};

LanguageSelectorSelected.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
};

export default LanguageSelectorSelected;
