import React from 'react';
import {Platform, Text, TouchableOpacity, View } from 'react-native';
import { languages } from 'humanize-duration';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

// import CnSvg from '../LanguageSelector/components/flags/CnSvg';
// import DeSvg from '../LanguageSelector/components/flags/DeSvg';
// import EnSvg from '../LanguageSelector/components/flags/EnSvg';
// import EsSvg from '../LanguageSelector/components/flags/EsSvg';
// import FrSvg from '../LanguageSelector/components/flags/FrSvg';
// import ItSvg from '../LanguageSelector/components/flags/ItSvg';
// import JpSvg from '../LanguageSelector/components/flags/JpSvg';
// import PtSvg from '../LanguageSelector/components/flags/PtSvg';
// import RuSvg from '../LanguageSelector/components/flags/RuSvg';

import DrawSelectedFlag from './components/DrawSelectedFlag';
import InfoButton from '../buttons/InfoButton';
import MoreButton from '../buttons/MoreButton';
import SettingsButton from '../buttons/SettingsButton';

// import { colours, fontFamily } from '../../configuration/config.json';
import { drawFlagComponent } from '../../js/helpers/drawFlagComponent';
import { getFlagFromLanguage } from '../../js/helpers/getFlagFromLanguage';

// import globalStyles from '../../css/style.js';

const isDeviceATablet = isPad => { // needs to be extended for android
  return isPad;
}

const OptionsHomepage = () => {
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (  
    <View
      style={[
        {
          bottom: 12,
          height: 48,
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
        }
      ]}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 48,
          marginLeft: 12,
          marginRight: 12,
        }}
      >
        <View style={{ width: 48 }}>
          <DrawSelectedFlag flag={getFlagFromLanguage(language.selected)} />
          {/* <TouchableOpacity
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
              {(() => drawFlagComponent(getFlagFromLanguage(language.selected), 44,  44))()}
            </View>
          </TouchableOpacity> */}
        </View>

        <View style={{ width: 48 }} >
          <MoreButton width={36} />
        </View>

        <View style={{ flex: 1 }}/>
        
        {
          !isDeviceATablet(Platform.isPad) && (
            <View style={{ width: 48 }} >
              <SettingsButton width={36} />
            </View>
          )
        }

        <View style={{ width: 48 }} >
          <InfoButton width={36} />
        </View>

      </View>
    </View>
  );
};

export default OptionsHomepage;
