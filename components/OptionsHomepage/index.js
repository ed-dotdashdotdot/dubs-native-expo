import React from 'react';
import {Platform, TouchableOpacity, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import DrawSelectedFlag from './components/DrawSelectedFlag';
import InfoButton from '../buttons/InfoButton';
import MoreButton from '../buttons/MoreButton';
import SettingsButton from '../buttons/SettingsButton';
import YourHighScoresButton from '../buttons/YourHighScoresButton';

import { getFlagFromLanguage } from '../../js/helpers/getFlagFromLanguage';

const isDeviceATablet = isPad => { // needs to be extended for android
  return isPad;
}

const OptionsHomepage = () => {
  const { duration, language } = useSelector(state => state);
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
        <TouchableOpacity
          onPress={() => {
            dispatch(gameActions.setGameStatus('language-select'));
          }}
        >
          <View style={{ 
            display: 'flex',
            flexDirection: 'row',
            width: 96, 
          }}>
            <View 
              style={{ 
                flex: 1,
                width: 48, 
              }}
            >
              <DrawSelectedFlag flag={getFlagFromLanguage(language.selected)} />
            </View>
            <View 
              style={{ 
                flex: 1,
                width: 48,
              }}
            >
              <MoreButton 
                width={36} 
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        
        {!!duration.highScores.length && (
          <View style={{ width: 48 }}>
            <YourHighScoresButton 
              width={36}
            />
          </View>
        )}
        {!isDeviceATablet(Platform.isPad) && (
          <View style={{ width: 48 }}>
            <SettingsButton
              width={36}
            />
          </View>
        )}
        {/* <View style={{ width: 48 }}>
          <InfoButton
            width={36}
          />
        </View> */}
      </View>
    </View>
  );
};

export default OptionsHomepage;
