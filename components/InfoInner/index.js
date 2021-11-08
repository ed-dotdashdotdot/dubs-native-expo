import React from 'react';
import { View, } from 'react-native';
import PropTypes from 'prop-types';

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

InfoInner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default InfoInner;
