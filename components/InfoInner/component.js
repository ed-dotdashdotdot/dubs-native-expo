import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Component = ({ content, styles }) => (
  <View style={[styles]}>
    { content }
  </View>
);

Component.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.object.isRequired,
};

export default Component;
