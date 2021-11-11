import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
// import allActions from '../../actions';
// import { useWindowDimensions } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import { getDeviceLocale, getDeviceCountry, getManufacturer } from 'react-native-device-info';
// import { getManufacturer } from 'react-native-device-info';
// import {
//   getManufacturer,
//   getManufacturerSync,
//   syncUniqueId,
//   useBatteryLevel,
//   useBatteryLevelIsLow,
//   usePowerState,
//   useFirstInstallTime,
//   useDeviceName,
//   useManufacturer,
//   useHasSystemFeature,
//   useIsEmulator,
//   useIsHeadphonesConnected,
// } from 'react-native-device-info';

// DeviceInfo.getApiLevel().then((apiLevel) => {
//   // iOS: ?
//   // Android: 25
//   // Windows: ?
// });

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import NewGameButtons from '../buttons/NewGameButtons';
import { sanitiseDeviceLocale } from '../../js/helpers/sanitiseDeviceLocale';

import ArSvg from '../LanguageSelector/components/flags/ArSvg';
import HuSvg from '../LanguageSelector/components/flags/HuSvg';
import KrSvg from '../LanguageSelector/components/flags/KrSvg';
import SgSvg from '../LanguageSelector/components/flags/SgSvg';
import IsSvg from '../LanguageSelector/components/flags/IsSvg';
import IlSvg from '../LanguageSelector/components/flags/IlSvg';
import HkSvg from '../LanguageSelector/components/flags/HkSvg';
import ClSvg from '../LanguageSelector/components/flags/ClSvg';
import GrSvg from '../LanguageSelector/components/flags/GrSvg';
import TrSvg from '../LanguageSelector/components/flags/TrSvg';
import ZaSvg from '../LanguageSelector/components/flags/ZaSvg';
import ChSvg from '../LanguageSelector/components/flags/ChSvg';
import BrSvg from '../LanguageSelector/components/flags/BrSvg';
import FiSvg from '../LanguageSelector/components/flags/FiSvg';
import NoSvg from '../LanguageSelector/components/flags/NoSvg';
import SeSvg from '../LanguageSelector/components/flags/SeSvg';
import CoSvg from '../LanguageSelector/components/flags/CoSvg';
import NzSvg from '../LanguageSelector/components/flags/NzSvg';
import AuSvg from '../LanguageSelector/components/flags/AuSvg';
import McSvg from '../LanguageSelector/components/flags/McSvg';
import PlSvg from '../LanguageSelector/components/flags/PlSvg';
import RoSvg from '../LanguageSelector/components/flags/RoSvg';
import IeSvg from '../LanguageSelector/components/flags/IeSvg';
import AtSvg from '../LanguageSelector/components/flags/AtSvg';
import BeSvg from '../LanguageSelector/components/flags/BeSvg';
import CaSvg from '../LanguageSelector/components/flags/CaSvg';
import NlSvg from '../LanguageSelector/components/flags/NlSvg';
import UsSvg from '../LanguageSelector/components/flags/UsSvg';

const GameHome = () => {
  const language = useSelector(state => state.language);

  console.log(sanitiseDeviceLocale(language.selected).language)

  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey='howToPlay' 
        />
        <NewGameButtons section="game-home" />

        <Text style={{ color: 'white', fontSize: 48 }}>
          Locale: {language.selected}
        </Text>
        <Text style={{ color: 'white', fontSize: 24 }}>
          Language: {sanitiseDeviceLocale(language.selected).language}
        </Text>
        <Text style={{ color: 'white', fontSize: 24 }}>
          Flag: {language.flag}
        </Text>
        <Text style={{ color: 'white', fontSize: 24 }}>
          Locale: {language.locale}
        </Text>
        
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <ArSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <AtSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <AuSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <BeSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <BrSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <CaSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <ChSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <ClSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <CoSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <FiSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <GrSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <HkSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <HuSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <IeSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <IlSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <IsSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <KrSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <McSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <NlSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <NoSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <NzSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <PlSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <RoSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <SeSvg width={48} height={48} />
            </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <SgSvg width={48} height={48} />
            </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <TrSvg width={48} height={48} />
            </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <UsSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:24, borderWidth:2 }}>
            <ZaSvg width={48} height={48} />
          </View>
        </View>

      </InfoInner>
    </ScrollView>
  );
};

export default GameHome;
