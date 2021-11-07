import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
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
import NewGameButtons from '../shared/NewGameButtons';

// import isPortrait from '../../js/helpers/isPortrait';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const GameHome = () => {
  const language = useSelector(state => state.language);

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <InfoInner>
        <PageHeading text={polyglot.t(`howToPlay.${lang.toUpperCase()}`)} />
        <NewGameButtons section="game-home" />
      </InfoInner>
    </ScrollView>
  );
}

export default GameHome;
