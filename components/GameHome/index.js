import React from 'react';
import { Platform, ScrollView } from 'react-native';

import Axios from '../Axios';
import Hello from '../Hello';

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

const GameHome = () => (
  <ScrollView>
    <InfoInner>
      <PageHeading 
        textKey='howToPlay' 
        subTextKeys='howToPlay|whatIsBossMode_description_normal_mode' 
      />
      <NewGameButtons section="game-home" />
      {/* <Axios 
        imageRef="5" 
      />
      <Axios 
        imageRef="12" 
      /> */}
      <Hello name='Ed' />
      <Hello />
    </InfoInner>
  </ScrollView>
);

export default GameHome;
