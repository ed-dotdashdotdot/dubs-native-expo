import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import allActions from '../../../../actions';

import DeSvg from '../flags/DeSvg';
import EnSvg from '../flags/EnSvg';
import EsSvg from '../flags/EsSvg';
import FrSvg from '../flags/FrSvg';
import ItSvg from '../flags/ItSvg';
import PtSvg from '../flags/PtSvg';
import RuSvg from '../flags/RuSvg';

import { languageSelector } from '../../../../configuration/config.json';

import globalStyles from '../../../../css/style';

const DrawLanguageButton = props => {
  const { whichLanguage } = { ...props };
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();
  const buttonSize = languageSelector.flagButtonSize;
  const flagSize = languageSelector.flagSize;
  const flagBorderWidth = languageSelector.flagBorderWidth;
  const svgSize = flagSize - (flagBorderWidth * 2);
  return (
    <View 
      style={{
        alignItems: 'center',
        flex: 1,
      }}
    >
      <View>
        <TouchableOpacity
          // accessibilityLabel="Switch language to German"
          onPress={() => {
            dispatch(languageActions.setChangeLanguage(whichLanguage));
          }}
          style={[
            {
              display: 'flex',
              textAlign: 'center',
            }, {
              height: buttonSize,
              width: buttonSize,
            }
          ]}
        >
          <View
            style={[
              {
                alignSelf: 'center',
              }, {
                borderRadius: flagSize / 2,
                height: flagSize,
                marginTop: (buttonSize - flagSize) / 2,
                width: flagSize,
              },
              globalStyles.border,
            ]}
          >
            {(() => {
              switch (whichLanguage) {
                case 'de': return <DeSvg width={svgSize} height={svgSize} />;
                case 'es': return <EsSvg width={svgSize} height={svgSize} />;
                case 'fr': return <FrSvg width={svgSize} height={svgSize} />
                case 'it': return <ItSvg width={svgSize} height={svgSize} />;
                case 'pt': return <PtSvg width={svgSize} height={svgSize} />;
                case 'ru': return <RuSvg width={svgSize} height={svgSize} />;
                default: return <EnSvg width={svgSize} height={svgSize} />;
              }
            })()}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

DrawLanguageButton.propTypes = {
  whichLanguage: PropTypes.string.isRequired,
};

export default DrawLanguageButton;
