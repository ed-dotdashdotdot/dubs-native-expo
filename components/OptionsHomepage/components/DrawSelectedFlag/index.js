import React from 'react';
import { TouchableOpacity, View } from 'react-native';
// import { languages } from 'humanize-duration';

import { useDispatch } from 'react-redux';
import allActions from '../../../../actions';

// import CnSvg from '../LanguageSelector/components/flags/CnSvg';
// import DeSvg from '../LanguageSelector/components/flags/DeSvg';
// import EnSvg from '../LanguageSelector/components/flags/EnSvg';
// import EsSvg from '../LanguageSelector/components/flags/EsSvg';
// import FrSvg from '../LanguageSelector/components/flags/FrSvg';
// import ItSvg from '../LanguageSelector/components/flags/ItSvg';
// import JpSvg from '../LanguageSelector/components/flags/JpSvg';
// import PtSvg from '../LanguageSelector/components/flags/PtSvg';
// import RuSvg from '../LanguageSelector/components/flags/RuSvg';

// import InfoButton from '../buttons/InfoButton';
// import MoreButton from '../buttons/MoreButton';
// import SettingsButton from '../buttons/SettingsButton';

// import { colours, fontFamily } from '../../configuration/config.json';
import { drawFlagComponent } from '../../../../js/helpers/drawFlagComponent';
// import { getFlagFromLanguage } from '../../js/helpers/getFlagFromLanguage';

// import globalStyles from '../../css/style.js';

// const isDeviceATablet = isPad => { // needs to be extended for android
//   return isPad;
// }

const DrawSelectedFlag = props => {
  const { flag } = { ...props };
  // const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (  
    <TouchableOpacity
      onPress={() => {
        dispatch(gameActions.setGameStatus('language-select'));
      }}
      style={{ 
        height: 48, 
        width: 48, 
      }}
    >
      <View
        style={{
          borderColor: 'white',
          borderStyle: 'solid',
          borderRadius: 24,
          borderWidth: 2,
          height: 48,
          width: 48,
          zIndex: 1000,
        }}
      >
        {(() => drawFlagComponent(
          flag,
          44, 
          44,
        ))()}
        {/* <Text style={{
          color: 'white',
          fontSize: 12,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingTop: 12,
        }}>
          {
            language.selected
          }
        </Text> */}
      </View>
      
    </TouchableOpacity>
  );
};

export default DrawSelectedFlag;
