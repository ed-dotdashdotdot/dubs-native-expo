import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import { useDispatch } from 'react-redux';
import allActions from '../../../../actions';

import CnSvg from '../../../LanguageSelector/components/flags/CnSvg';
import DeSvg from '../../../LanguageSelector/components/flags/DeSvg';
import EnSvg from '../../../LanguageSelector/components/flags/EnSvg';
import EsSvg from '../../../LanguageSelector/components/flags/EsSvg';
import FrSvg from '../../../LanguageSelector/components/flags/FrSvg';
import ItSvg from '../../../LanguageSelector/components/flags/ItSvg';
import JpSvg from '../../../LanguageSelector/components/flags/JpSvg';
import PtSvg from '../../../LanguageSelector/components/flags/PtSvg';
import RuSvg from '../../../LanguageSelector/components/flags/RuSvg';

// import MaSvg from '../../../LanguageSelector/components/flags/MaSvg';
// import CzSvg from '../../../LanguageSelector/components/flags/CzSvg';
// import CySvg from '../../../LanguageSelector/components/flags/CySvg';
// import DkSvg from '../../../LanguageSelector/components/flags/DkSvg';
// import IdSvg from '../../../LanguageSelector/components/flags/IdSvg';
// import MySvg from '../../../LanguageSelector/components/flags/MySvg';
// import UaSvg from '../../../LanguageSelector/components/flags/UaSvg';
// import VnSvg from '../../../LanguageSelector/components/flags/VnSvg';
// import ArSvg from '../../../LanguageSelector/components/flags/ArSvg';
// import HuSvg from '../../../LanguageSelector/components/flags/HuSvg';
// import KrSvg from '../../../LanguageSelector/components/flags/KrSvg';
// import SgSvg from '../../../LanguageSelector/components/flags/SgSvg';
// import IsSvg from '../../../LanguageSelector/components/flags/IsSvg';
// import IlSvg from '../../../LanguageSelector/components/flags/IlSvg';
// import HkSvg from '../../../LanguageSelector/components/flags/HkSvg';
// import ClSvg from '../../../LanguageSelector/components/flags/ClSvg';
// import GrSvg from '../../../LanguageSelector/components/flags/GrSvg';
// import TrSvg from '../../../LanguageSelector/components/flags/TrSvg';
// import ZaSvg from '../../../LanguageSelector/components/flags/ZaSvg';
// import ChSvg from '../../../LanguageSelector/components/flags/ChSvg';
// import BrSvg from '../../../LanguageSelector/components/flags/BrSvg';
// import FiSvg from '../../../LanguageSelector/components/flags/FiSvg';
// import NoSvg from '../../../LanguageSelector/components/flags/NoSvg';
// import SeSvg from '../../../LanguageSelector/components/flags/SeSvg';
// import CoSvg from '../../../LanguageSelector/components/flags/CoSvg';
// import NzSvg from '../../../LanguageSelector/components/flags/NzSvg';
// import AuSvg from '../../../LanguageSelector/components/flags/AuSvg';
// import McSvg from '../../../LanguageSelector/components/flags/McSvg';
// import PlSvg from '../../../LanguageSelector/components/flags/PlSvg';
// import RoSvg from '../../../LanguageSelector/components/flags/RoSvg';
// import IeSvg from '../../../LanguageSelector/components/flags/IeSvg';
// import AtSvg from '../../../LanguageSelector/components/flags/AtSvg';
// import BeSvg from '../../../LanguageSelector/components/flags/BeSvg';
// import CaSvg from '../../../LanguageSelector/components/flags/CaSvg';
// import NlSvg from '../../../LanguageSelector/components/flags/NlSvg';
// import UsSvg from '../../../LanguageSelector/components/flags/UsSvg';

import { isPortrait } from '../../../../js/helpers/isPortrait';

import globalStyles from '../../../../css/style.js';

const DrawFlag = props => {
  const { dimensions, flag } = { ...props };
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();

  const { height, width } = useWindowDimensions();
  // const isDevicePortrait = isPortrait(height, width);

  const maxHeight = dimensions.height - 12 - 12 - 8;
  const maxWidth = dimensions.width - 12 - 12 - 8;
  const flagsPerRow = dimensions.width > 999 ? 6 : dimensions.width > 600 ? 4 : 3;

  // const FlagComponent = flag;

  const whichFlag = (flag, height, width) => {
    switch (flag) {
      case 'Cn' : return <CnSvg height={height} width={width} />;
      case 'De' : return <DeSvg height={height} width={width} />;
      case 'Es' : return <EsSvg height={height} width={width} />;
      case 'Fr' : return <FrSvg height={height} width={width} />;
      case 'It' : return <ItSvg height={height} width={width} />;
      case 'Jp' : return <JpSvg height={height} width={width} />;
      case 'Pt' : return <PtSvg height={height} width={width} />;
      case 'Ru' : return <RuSvg height={height} width={width} />;
      default : return <EnSvg height={height} width={width} />;
    };
  };

  const flagToLanguage = flag => {
    switch (flag) {
      case 'Cn' : return 'zh-CN';
      case 'De' : return 'de-DE';
      case 'Es' : return 'es-ES';
      case 'Fr' : return 'fr-FR';
      case 'It' : return 'it-IT';
      case 'Jp' : return 'ja-JP';
      case 'Pt' : return 'pt-PT';
      case 'Ru' : return 'ru-RU';
      default : return 'en-GB';
    };
  }

  return (
    <View
      style={[
        {
          padding: 12,
        }, {
          width: (maxWidth / flagsPerRow),
        }
      ]}
    >
      <View
        style={[
          {
            backgroundColor: 'white',
          }, {
            borderRadius: (maxWidth / flagsPerRow) / 2,
          },
          globalStyles.border,
        ]}
      >
        <TouchableOpacity
          // accessible={true}
          // accessibilityRole='imagebutton'
          onPress={() => {
            dispatch(languageActions.setChangeLanguage(flagToLanguage(flag)));
          }}
        >
          {(() => whichFlag(
            flag, 
            (maxWidth / flagsPerRow) - 12 - 12 - 4, 
            (maxWidth / flagsPerRow) - 12 - 12 - 4,
          ))()}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawFlag;
