import React from 'react';
import { useSelector } from 'react-redux';
import { Platform, ScrollView, Text } from 'react-native';
// import allActions from '../../actions';
// import { useWindowDimensions } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
import * as Device from 'expo-device';
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
    // isTablet,
// } from 'react-native-device-info';

// import {
//   isTablet,
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

const GameHome = () => {
  const language = useSelector(state => state.language);

  // console.log(sanitiseDeviceLocale(language.selected).language)
  // console.log(DeviceInfo?.isTablet());
  // const type = () => { await Device.getDeviceTypeAsync()}
  // console.log('Device:');
  // console.log(Device);
  // let asd = Device.getDeviceTypeAsync();
  // const isTablet = Device;
  // console.log(isTablet);
  // console.log(asd);
  // console.log(type);
  // console.log('Platform.isPad')
  // console.log(Platform.isPad)
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey='howToPlay' 
        />
        <NewGameButtons section="game-home" />

        {/* <Text style={{ color: 'white', fontSize: 48 }}>
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
        </Text> */}
        
         {/* <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 48
          }}
        >          
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <ArSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <AtSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <AuSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <BeSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <BrSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <CaSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <ChSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <ClSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <CoSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <CySvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <CzSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <DkSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <FiSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <GrSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <HkSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <HuSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <IdSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <IeSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <IlSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <IsSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <KrSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <McSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <NlSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <NoSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <NzSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <MaSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <MySvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <PlSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <RoSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <SeSvg width={48} height={48} />
            </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <SgSvg width={48} height={48} />
            </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <TrSvg width={48} height={48} />
            </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <UaSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <UsSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <VnSvg width={48} height={48} />
          </View>
          <View style={{ width:52, height:52, borderColor:'white', borderStyle:'solid', borderRadius:26, borderWidth:2, margin: 12 }}>
            <ZaSvg width={48} height={48} />
          </View>
        </View> */}
      </InfoInner>
    </ScrollView>
  );
};

export default GameHome;
