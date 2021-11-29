import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
  <View>
    <Text
     style={{
       fontSize: 24,
       color: 'white'
     }}
    >
      {`Hello, ${name}`}
    </Text>
  </View>
);

Hello.defaultProps = {
  name: 'World!',
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
