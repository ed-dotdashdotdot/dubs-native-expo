import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../../../actions';

import Polyglot from 'node-polyglot';
import i18n from '../../../../i18n';

import CnSvg from '../flags/CnSvg';
import DeSvg from '../flags/DeSvg';
import EnSvg from '../flags/EnSvg';
import EsSvg from '../flags/EsSvg';
import FrSvg from '../flags/FrSvg';
import ItSvg from '../flags/ItSvg';
import JpSvg from '../flags/JpSvg';
import PtSvg from '../flags/PtSvg';
import RuSvg from '../flags/RuSvg';
import Translate from '../../../Translate';

import { languageSelector, supportedLanguages } from '../../../../configuration/config.json';

import globalStyles from '../../../../css/style';

const DrawLanguageButton = props => {
  const { whichLanguage, width } = { ...props };
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();

  const language = useSelector(state => state.language);
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'EN';

  const buttonSize = (width - 24) / supportedLanguages.length;
  let flagSize = ((width - 24) / supportedLanguages.length) - 4;
  if (flagSize > 48) {
    flagSize = 48;
  }

  const flagBorderWidth = languageSelector.flagBorderWidth;
  const svgSize = flagSize - (flagBorderWidth * 2);
  return (
    <View 
      style={{
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={polyglot.t(`languageButton.${whichLanguage.toUpperCase()}`)}
        accessibilityRole="button"
        onPress={() => {
          dispatch(languageActions.setChangeLanguage(whichLanguage));
        }}
        style={[
          {
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center'
          }, {
            width: buttonSize,
            height: 48,
          }
        ]}
      >
        {/* <Text
          accessible={true}
          accessibilityLabel='Gook'
        >
          <Translate textKey={`languageButton`} />
        </Text> */}
        <View
          style={[
            {
              alignSelf: 'center',
            }, {
              borderRadius: flagSize / 2,
              height: flagSize,
              width: flagSize,
            },
            globalStyles.border,
          ]}
        >
          {(() => {
            switch (whichLanguage) {
              case 'cn': return <CnSvg width={svgSize} height={svgSize} />;
              case 'de': return <DeSvg width={svgSize} height={svgSize} />;
              case 'es': return <EsSvg width={svgSize} height={svgSize} />;
              case 'fr': return <FrSvg width={svgSize} height={svgSize} />
              case 'it': return <ItSvg width={svgSize} height={svgSize} />;
              case 'jp': return <JpSvg width={svgSize} height={svgSize} />;
              case 'pt': return <PtSvg width={svgSize} height={svgSize} />;
              case 'ru': return <RuSvg width={svgSize} height={svgSize} />;
              default: return <EnSvg width={svgSize} height={svgSize} />;
            }
          })()}
        </View>
      </TouchableOpacity>
    </View>
  );
};

DrawLanguageButton.propTypes = {
  whichLanguage: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default DrawLanguageButton;
