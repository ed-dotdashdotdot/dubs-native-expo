import React from 'react';
import { View, } from 'react-native';

import globalStyles from '../../css/style.js';

const InfoInner = props => {
  const { children } = { ...props };
  return (
      <View 
        style={[
          globalStyles.infoInner,
        ]}
      >
        { children }
      </View>
  );
};

export default InfoInner;
