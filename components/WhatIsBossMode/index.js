import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import PageHeading from '../PageHeading';
import Translate from '../Translate';
import SmileyFaceSvg from './components/SmileyFaceSvg';
import TurnOnBossModeButton from '../TurnOnBossModeButton';
import { colours, fontFamily } from '../../configuration/config.json';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const WhatIsBossMode = props => {
  const { bossMode } = { ...props };
  const language = useSelector(state => state.language);

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading text={polyglot.t(`whatIsBossMode.${lang.toUpperCase()}`)} />
        <View>
          <View
            style={[
              {
                backgroundColor: colours.black,
                marginBottom: 12,
              },
              globalStyles.border,
              globalStyles.borderRadius8,
              globalStyles.padding12,
            ]}
          >
            <View>
              <Text
                style={{
                  color: colours.white,
                  fontFamily: fontFamily,
                  fontSize: 28,
                  fontWeight: 'bold',
                  marginBottom: 12,
                  textAlign: 'center',
                }}
              >
                <Translate textKey="whatIsBossMode_title_normal_mode" />
              </Text>
              <View 
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <View 
                  style={{
                    alignItems: 'flex-end',
                    flex: 2,
                  }}
                >
                  <SmileyFaceSvg height={48} width={48} />
                </View>
                <View
                  style={{
                    width: 72,
                  }}
                >
                  <Text 
                    style={{
                      color: colours.white,
                      fontFamily: fontFamily,
                      fontSize: 48,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    =
                  </Text>
                </View>
                <View 
                  style={{
                    alignItems: 'flex-start',
                    flex: 2,
                  }}
                >
                  <SmileyFaceSvg height={48} width={48} />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: colours.white,
                    fontFamily: fontFamily,
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 12,
                    textAlign: 'center',
                  }}
                >
                  <Translate textKey="whatIsBossMode_description_normal_mode" />
                </Text>
              </View>
            </View>           
          </View>
          <View 
            style={[
              {
                backgroundColor: colours.black,
                marginBottom: 12,
              },
              globalStyles.border,
              globalStyles.borderRadius8,
              globalStyles.padding12,
            ]}
          >
            <View>
              <Text
                style={{
                  color: colours.white,
                  fontFamily: fontFamily,
                  fontSize: 28,
                  fontWeight: 'bold',
                  marginBottom: 12,
                  textAlign: 'center',
                }}
              >
                <Translate textKey="whatIsBossMode_title_boss_mode" />
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    alignItems: 'flex-end',
                    flex: 2,
                  }}
                >
                  <SmileyFaceSvg height={48} width={48} />
                </View>
                <View
                  style={{
                    width: 72,
                  }}
                >
                  <Text
                    style={{
                      color: colours.white,
                      fontFamily: fontFamily,
                      fontSize: 48,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    =
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    flex: 2,
                    transform: [{ scale: -1 }],
                  }}
                >
                  <SmileyFaceSvg height={48} width={48} />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    color: colours.white,
                    fontFamily: fontFamily,
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 12,
                    textAlign: 'center',
                  }}
                >
                  <Translate textKey="whatIsBossMode_description_boss_mode" />
                </Text>
              </View>
            </View>           
          </View>
          <TurnOnBossModeButton 
            bossMode={bossMode} 
          />
        </View>
      </View>
    </ScrollView>    
  );
}

export default WhatIsBossMode;
