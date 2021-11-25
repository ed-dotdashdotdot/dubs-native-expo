import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { drawFlagComponent } from '../../../../js/helpers/drawFlagComponent';

import globalStyles from '../../../../css/style';

const DrawSelectedFlag = ({ flag }) => (
  <View
    style={[
      {
        borderRadius: 24,
        height: 48,
        width: 48,
      },
      globalStyles.border,
    ]}
  >
    {(() => drawFlagComponent(
      flag,
      44, 
      44,
    ))()}
  </View>
);

DrawSelectedFlag.defaultProps = {
  flag: 'En',
};

DrawSelectedFlag.propTypes = {
  flag: PropTypes.string.isRequired,
};

export default DrawSelectedFlag;
