import React from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';

import DrawFlag from './components/DrawFlag';
import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

import { isPortrait } from '../../js/helpers/isPortrait';

const LanguageSelect = props => {
  const { dimensions } = { ...props };

  const { height, width } = useWindowDimensions();
  const isDevicePortrait = isPortrait(height, width);

  // console.log(`height: ${height}`);
  // console.log(`dimensions.height: ${dimensions.height}`);
  // console.log(`width: ${width}`);
  // console.log(`dimensions.width: ${dimensions.width}`);
  // console.log(`isDevicePortrait: ${isDevicePortrait}`);
  
  const flagsPerRow = dimensions.width > 999 ? 6 : dimensions.width > 600 ? 4 : 2;
  // console.log(`flagsPerRow: ${flagsPerRow}`);

  return (
    <ScrollView>
      <InfoInner>
        <PageHeading 
          textKey='selectLanguage' 
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 48
          }}
        >
          <DrawFlag dimensions={dimensions} flag="Cn" />
          <DrawFlag dimensions={dimensions} flag="De" />
          <DrawFlag dimensions={dimensions} flag="En" />
          <DrawFlag dimensions={dimensions} flag="Es" />
          <DrawFlag dimensions={dimensions} flag="Fr" />
          <DrawFlag dimensions={dimensions} flag="It" />
          <DrawFlag dimensions={dimensions} flag="Jp" />
          <DrawFlag dimensions={dimensions} flag="Pt" />
          <DrawFlag dimensions={dimensions} flag="Ru" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 48
          }}
        >
          <DrawFlag dimensions={dimensions} flag="Ar" />
          <DrawFlag dimensions={dimensions} flag="At" />
          <DrawFlag dimensions={dimensions} flag="Au" />
          <DrawFlag dimensions={dimensions} flag="Be" />
          <DrawFlag dimensions={dimensions} flag="Br" />
          <DrawFlag dimensions={dimensions} flag="Ca" />
          <DrawFlag dimensions={dimensions} flag="Ch" />
          <DrawFlag dimensions={dimensions} flag="Cl" />
          <DrawFlag dimensions={dimensions} flag="Co" />
          <DrawFlag dimensions={dimensions} flag="Cy" />
          <DrawFlag dimensions={dimensions} flag="Cz" />
          <DrawFlag dimensions={dimensions} flag="Dk" />
          <DrawFlag dimensions={dimensions} flag="Fi" />
          <DrawFlag dimensions={dimensions} flag="Gr" />
          <DrawFlag dimensions={dimensions} flag="Hk" />
          <DrawFlag dimensions={dimensions} flag="Hu" />
          <DrawFlag dimensions={dimensions} flag="Id" />
          <DrawFlag dimensions={dimensions} flag="Ie" />
          <DrawFlag dimensions={dimensions} flag="Il" />
          <DrawFlag dimensions={dimensions} flag="Is" />
          <DrawFlag dimensions={dimensions} flag="Kr" />
          <DrawFlag dimensions={dimensions} flag="Mc" />
          <DrawFlag dimensions={dimensions} flag="Nl" />
          <DrawFlag dimensions={dimensions} flag="No" />
          <DrawFlag dimensions={dimensions} flag="Nz" />
          <DrawFlag dimensions={dimensions} flag="Ma" />
          <DrawFlag dimensions={dimensions} flag="My" />
          <DrawFlag dimensions={dimensions} flag="Pl" />
          <DrawFlag dimensions={dimensions} flag="Ro" />
          <DrawFlag dimensions={dimensions} flag="Se" />
          <DrawFlag dimensions={dimensions} flag="Sg" />
          <DrawFlag dimensions={dimensions} flag="Tr" />
          <DrawFlag dimensions={dimensions} flag="Ua" />
          <DrawFlag dimensions={dimensions} flag="Us" />
          <DrawFlag dimensions={dimensions} flag="Vn" />
          <DrawFlag dimensions={dimensions} flag="Za" />
        </View>
      </InfoInner>
    </ScrollView>
  );
};

export default LanguageSelect;
