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
  // const language = useSelector(state => state.language);

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
      </InfoInner>
    </ScrollView>
  );
};

export default GameHome;
