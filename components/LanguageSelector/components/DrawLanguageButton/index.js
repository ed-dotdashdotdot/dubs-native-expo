import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../../../actions';

import DeSvg from '../../../flags/DeSvg';
import EnSvg from '../../../flags/EnSvg';
import EsSvg from '../../../flags/EsSvg';
import FrSvg from '../../../flags/FrSvg';
import ItSvg from '../../../flags/ItSvg';
import PtSvg from '../../../flags/PtSvg';

const DrawLanguageButton = props => {
  const { whichLanguage } = { ...props };
  const { languageActions } = { ...allActions };
  const dispatch = useDispatch();
  const buttonSize = 48;
  const flagSize = 44;
  const flagBorderWidth = 2;
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
          // activeOpacity={0.5}
          onPress={() => {
            dispatch(languageActions.setChangeLanguage(whichLanguage));
          }}
          style={{
            display: 'flex',
            height: buttonSize,
            textAlign: 'center',
            width: buttonSize,
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              borderColor: 'white',
              borderRadius: flagSize / 2,
              borderStyle: 'solid',
              borderWidth: flagBorderWidth,
              height: flagSize,
              marginTop: (buttonSize - flagSize) / 2,
              width: flagSize,
            }}
          >
            {(() => {
              switch (whichLanguage) {
                case 'de': return <DeSvg width={svgSize} height={svgSize} />;
                case 'es': return <EsSvg width={svgSize} height={svgSize} />;
                case 'fr': return <FrSvg width={svgSize} height={svgSize} />
                case 'it': return <ItSvg width={svgSize} height={svgSize} />;
                case 'pt': return <PtSvg width={svgSize} height={svgSize} />;
                default: return <EnSvg width={svgSize} height={svgSize} />;
              }
            })()}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DrawLanguageButton;
