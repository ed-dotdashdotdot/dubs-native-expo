import React from 'react';
import { ScrollView } from 'react-native';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

const AppSettings = () => (
  <ScrollView>
    <InfoInner>
      <PageHeading 
        textKey='appSettings' 
      />
    </InfoInner>
  </ScrollView>
);

export default AppSettings;
