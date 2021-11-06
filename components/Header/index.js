import React from 'react';
import { View } from 'react-native';

import LogoSvg from './components/LogoSvg';

const Header = () => {
  return (
    <View
      style={{
        height: 48,
        position: 'absolute',
        top: 12,
        width: 48 * 4,
        zIndex: 100,
      }}
    >
      <LogoSvg />
    </View>
  );
}

export default Header;
