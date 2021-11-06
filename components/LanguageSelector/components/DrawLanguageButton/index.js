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
          activeOpacity={0.5}
          onPress={() => {
            dispatch(languageActions.setChangeLanguage(whichLanguage));
          }}
          style={{
            display: 'flex',
            height: 48,
            textAlign: 'center',
            width: 48,
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              borderColor: 'white',
              borderRadius: 20,
              borderStyle: 'solid',
              borderWidth: 1,
              height: 40,
              marginTop: 4,
              width: 40,
            }}
          >
            {(() => {
              switch (whichLanguage) {
                case 'de': return <DeSvg width="38" height="38" />;
                case 'es': return <EsSvg width="38" height="38" />;
                case 'fr': return <FrSvg width="38" height="38" />
                case 'it': return <ItSvg width="38" height="38" />;
                case 'pt': return <PtSvg width="38" height="38" />;
                default: return <EnSvg width="38" height="38" />;
              }
            })()}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DrawLanguageButton;
