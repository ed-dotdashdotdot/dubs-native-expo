import React from 'react';
import { View } from 'react-native';
import { colours } from '../../configuration/config.json';

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
      <LogoSvg 
        lineColour={colours.white} 
        textColour={colours.white} 
      />
    </View>
  );
}

export default Header;
