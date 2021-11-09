import React from 'react';
import { View } from 'react-native';

import LogoSvg from './components/LogoSvg';

const Header = () => (
  <View
    accessible={true}
    accessibilityLabel="Dubs App"
    accessibilityRole='header'
    style={[
      {
        height: 48,
        position: 'absolute',
        top: 12,
        zIndex: 100,
      }, {
        width: 48 * 4,
      }
    ]}
  >
    <LogoSvg />
  </View>
);

export default Header;
