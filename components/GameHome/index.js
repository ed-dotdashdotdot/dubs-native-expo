import React, { useEffect } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';
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

import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';

import isPortrait from '../../js/helpers/isPortrait';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const GameHome = () => {
  const language = useSelector(state => state.language);

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  // const { height, width } = useWindowDimensions();
  // const isDevicePortrait = isPortrait(height, width);

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading text={polyglot.t(`howToPlay.${lang.toUpperCase()}`)} />
        <NewGameButtons section="game-home" />
      </View>
    </ScrollView>
  );
}

export default GameHome;
