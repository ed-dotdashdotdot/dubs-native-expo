import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';

import Translate from '../Translate';

import globalStyles from '../../css/style.js';

const ChooseAnImageButton = () => {
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  return (
    <View
      style={[
        globalStyles.border,
        globalStyles.borderRadius8,
        {
          backgroundColor: 'black',
          marginBottom: 12,
        }
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(gameActions.setGameStatus('choose-image'));
        }}
        style={[
          {
            padding: 12,
          }
        ]}
        type="button"
      >
        <Text
          style={[
            {
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
            globalStyles.fontFamilyCourier,  
          ]}
        >
          <Translate textKey="chooseAnImageToPlayWith" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseAnImageButton;
