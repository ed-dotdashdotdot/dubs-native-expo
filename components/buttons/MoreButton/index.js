import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import MoreButtonSvg from './components/MoreButtonSvg';

const MoreButton = props => {
  const { width } = { ...props };
  return (
    <View
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        width,
      }}
    >
      <MoreButtonSvg />
    </View>
  );
};

MoreButton.defaultProps = {
  width: 36,
};

MoreButton.propTypes = {
  width: PropTypes.number.isRequired,
};

export default MoreButton;
