import React from 'react';
import { View } from 'react-native';

import LanguageSelectorSelectedSvg from '../LanguageSelectorSelectedSvg';

const LanguageSelectorSelected = props => {
  const { language } = { ...props };
  return (
    <View 
      style={[
        {
          bottom: 60,
          display: 'flex',
          flexDirection: 'row',
          height: 12,
          position: 'absolute',
          width: '100%',
        }
      ]}
    >
      <View style={{ flex: 1 }}>
        {language === 'de' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {language === 'en' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {language === 'es' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {language === 'it' && <LanguageSelectorSelectedSvg />}
      </View>
      <View style={{ flex: 1 }}>
        {language === 'pt' && <LanguageSelectorSelectedSvg />}
      </View>
    </View>
  );
}

export default LanguageSelectorSelected;
