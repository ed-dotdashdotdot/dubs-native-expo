import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

import { useDispatch } from 'react-redux';
import allActions from '../../actions';

import EnSvg from '../LanguageSelector/components/flags/EnSvg';
import InfoButton from '../buttons/InfoButton';
import MoreButton from '../buttons/MoreButton';
import SettingsButton from '../buttons/SettingsButton';

import { colours, fontFamily } from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const OptionsHomepage = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (  
    <View
      style={[
        {
          bottom: 12,
          height: 48,
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
        }
      ]}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: 48,
          marginLeft: 12,
          marginRight: 12,
        }}
      >
        <View style={{ width: 48 }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(gameActions.setGameStatus('language-select'));
            }}
            style={{ 
              height: 48, 
              width: 48, 
            }}
          >
            <View
              style={{
                borderColor: 'white',
                borderStyle: 'solid',
                borderRadius: 24,
                borderWidth: 2,
                height: 48,
                width: 48,
                zIndex: 1000,
              }}
            >
              <EnSvg height={44} width={44} />
            </View>
            
          </TouchableOpacity>
        </View>

        <View style={{ width: 48 }} >
          <MoreButton width={36} />
        </View>

        <View style={{ flex: 1 }}/>
        
        <View style={{ width: 48 }} >
          <SettingsButton width={36} />
        </View>

        <View style={{ width: 48 }} >
          <InfoButton width={36} />
        </View>

      </View>
    </View>
  );
};

export default OptionsHomepage;
