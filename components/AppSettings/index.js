import React from 'react';
import { Button, ScrollView, Text } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

import { 
  colours 
} from '../../configuration/config.json';

const AppSettings = () => {
  const { device } = useSelector(state => state);
  const { deviceActions } = { ...allActions };
  const dispatch = useDispatch();
  // console.log(device);
  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey='appSettings' 
        />

        <Text
          style={{
            color: colours.white,
          }}
        >
          Vibration on phone: 
        </Text>

        <Button
        onPress={() => {
          dispatch(deviceActions.setDeviceVibration(!device.vibration));
        }}
          title={device.vibration ? "Turn off" : "Turn on"}
        >
        </Button>

      </InfoInner>
    </ScrollView>
  );
};

export default AppSettings;
