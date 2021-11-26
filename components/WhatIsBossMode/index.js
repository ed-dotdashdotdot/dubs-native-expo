import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';
import TurnOnBossModeButton from '../buttons/TurnOnBossModeButton';
import WhatIsBossModeCard from './components/WhatIsBossModeCard';

const WhatIsBossMode = ({ bossMode }) => (
  <ScrollView>
    <InfoInner>
      <PageHeading
        textKey='whatIsBossMode'
      />
      <WhatIsBossModeCard
        display='normal'
      />
      <WhatIsBossModeCard
        display='boss'
      />
      <TurnOnBossModeButton
        bossMode={bossMode}
      />
    </InfoInner>
  </ScrollView>
);

WhatIsBossMode.propTypes = {
  bossMode: PropTypes.bool.isRequired,
};

export default WhatIsBossMode;
