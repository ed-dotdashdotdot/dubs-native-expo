import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import WhatIsBossModeDescription from '../WhatIsBossModeDescription';
import WhatIsBossModeExample from '../WhatIsBossModeExample';
import WhatIsBossModeTitle from '../WhatIsBossModeTitle';
import { colours } from '../../../../configuration/config.json';

import globalStyles from '../../../../css/style.js';

const WhatIsBossModeCard = props => {
  const { display } = { ...props };
  return (
    <View
      style={[
        {
          backgroundColor: colours.black,
          marginBottom: 12,
        },
        globalStyles.border,
        globalStyles.borderRadius8,
        globalStyles.padding12,
      ]}
    >
      <WhatIsBossModeTitle 
        textKey={`whatIsBossMode_title_${display}_mode`} 
      />
      <WhatIsBossModeExample 
        display={display} 
      />
      <WhatIsBossModeDescription 
        textKey={`whatIsBossMode_description_${display}_mode`} 
      />
    </View>
  );
};

WhatIsBossModeCard.propTypes = {
  display: PropTypes.string.isRequired,
};

export default WhatIsBossModeCard;
