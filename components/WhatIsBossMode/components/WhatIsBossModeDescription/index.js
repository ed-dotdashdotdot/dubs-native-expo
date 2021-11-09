import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Translate from '../../../Translate';

import { colours, fontFamily } from '../../../../configuration/config.json';

const WhatIsBossModeDescription = props => {
  const { textKey } = { ...props };
  return (
    <Text
      style={{
        color: colours.white,
        fontFamily: fontFamily,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 12,
        textAlign: 'center',
      }}
    >
      <Translate textKey={textKey} />
    </Text>
  );
};

WhatIsBossModeDescription.propTypes = {
  textKey: PropTypes.string.isRequired,
};

export default WhatIsBossModeDescription;
