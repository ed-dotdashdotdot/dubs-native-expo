import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import SmileyFaceSvg from '../../components/SmileyFaceSvg';
import WhatIsBossModeCardEquals from '../WhatIsBossModeEquals';

const WhatIsBossModeExample = ({ display }) => (
  <View
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <View
      style={{
        alignItems: 'flex-end',
        flex: 2,
      }}
    >
      <SmileyFaceSvg />
    </View>
    <WhatIsBossModeCardEquals />
    <View
      style={{
        alignItems: display === 'normal' ? 'flex-start' : 'flex-end',
        flex: 2,
        transform: [{
          scale: display === 'normal' ? 1 : -1,
        }]
      }}
    >
      <SmileyFaceSvg />
    </View>
  </View>
);

WhatIsBossModeExample.propTypes = {
  display: PropTypes.string.isRequired,
};

export default WhatIsBossModeExample;
