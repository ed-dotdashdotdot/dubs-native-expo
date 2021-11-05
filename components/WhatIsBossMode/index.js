import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import PageHeading from '../PageHeading';
import Translate from '../Translate';
import TurnOnBossModeButton from '../TurnOnBossModeButton';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

import globalStyles from '../../css/style.js';

const WhatIsBossMode = props => {
  const { level } = { ...props };
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        <PageHeading text={polyglot.t(`whatIsBossMode.${lang.toUpperCase()}`)} />
        <View>
          <View 
            id="what-is-boss-mode-content"
            style={{
              backgroundColor: 'black',
              borderColor: 'white',
              borderStyle: 'solid',
              borderWidth: 2,
              borderRadius: 8,
              marginBottom: 12,
              padding: 12,
            }}
          >
            <View 
              id="what-is-boss-mode-description"
            >
              <Text
                style={[
                  {
                    color: 'white',
                    fontSize: 28,
                    fontWeight: 'bold',
                    marginBottom: 12,
                    textAlign: 'center',
                  },
                  globalStyles.fontFamilyCourier,
                ]}
              >
                <Translate textKey="whatIsBossMode_title_normal_mode" />
              </Text>
              <View 
                id="what-is-boss-mode-example"
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <View 
                  id="example-a" 
                  style={{
                    alignItems: 'flex-end',
                    flex: 2,
                  }}
                >
                  <Image
                    source={require('./img/boss-mode-example.jpg')}
                    style={{
                      borderColor: 'white',
                      borderRadius: 4,
                      borderWidth: 2,
                      height: 64,
                      width: 64,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 72,
                  }}
                >
                  <Text 
                    id="equals"
                    style={[
                      {
                        color: 'white',
                        fontSize: 48,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      },
                      globalStyles.fontFamilyCourier,
                    ]}
                  >
                    =
                  </Text>
                </View>
                <View 
                  id="example-b" 
                  style={{
                    alignItems: 'flex-start',
                    flex: 2,
                  }}
                >
                  <Image
                    source={require('./img/boss-mode-example.jpg')}
                    style={{
                      borderColor: 'white',
                      borderRadius: 4,
                      borderWidth: 2,
                      height: 64,
                      width: 64,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: 12,
                }}
              >
                <Text
                  style={[
                    {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 12,
                    },
                    globalStyles.fontFamilyCourier,
                  ]}
                >
                  <Translate textKey="whatIsBossMode_description_normal_mode" />
                </Text>
              </View>
            </View>           
          </View>
          <View 
            id="what-is-boss-mode-content"
            style={{
              backgroundColor: 'black',
              borderColor: 'white',
              borderStyle: 'solid',
              borderWidth: 2,
              borderRadius: 8,
              marginBottom: 12,
              padding: 12,
            }}
          >
            <View 
              id="what-is-boss-mode-description"
            >
              <Text
                style={[
                  {
                    color: 'white',
                    fontSize: 28,
                    fontWeight: 'bold',
                    marginBottom: 12,
                    textAlign: 'center',
                  },
                  globalStyles.fontFamilyCourier,
                ]}
              >
                <Translate textKey="whatIsBossMode_title_boss_mode" />
              </Text>
              <View 
                id="what-is-boss-mode-example"
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <View 
                  id="example-a" 
                  style={{
                    alignItems: 'flex-end',
                    flex: 2,
                  }}
                >
                  <Image
                    source={require('./img/boss-mode-example.jpg')}
                    style={{
                      borderColor: 'white',
                      borderRadius: 4,
                      borderWidth: 2,
                      height: 64,
                      width: 64,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 72,
                  }}
                >
                  <Text 
                    id="equals"
                    style={[
                      {
                        color: 'white',
                        fontSize: 48,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      },
                      globalStyles.fontFamilyCourier,
                    ]}
                  >
                    =
                  </Text>
                </View>
                <View 
                  id="example-b" 
                  style={{
                    alignItems: 'flex-end',
                    flex: 2,
                    transform: [{ scale: -1 }],
                  }}
                >
                  <Image
                    source={require('./img/boss-mode-example.jpg')}
                    style={{
                      borderColor: 'white',
                      borderRadius: 4,
                      borderWidth: 2,
                      height: 64,
                      width: 64,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: 12,
                }}
              >
                <Text
                  style={[
                    {
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 12,
                    },
                    globalStyles.fontFamilyCourier,
                  ]}
                >
                  <Translate textKey="whatIsBossMode_description_boss_mode" />
                </Text>
              </View>
            </View>           
          </View>
          <TurnOnBossModeButton 
            bossMode={game.bossMode} 
          />
        </View>
      </View>
    </ScrollView>    
  );
}

export default WhatIsBossMode;
