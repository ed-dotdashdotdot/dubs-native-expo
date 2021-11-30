import React from 'react';
import { ScrollView, Text } from 'react-native';

import InfoInner from '../InfoInner';
import PageHeading from '../PageHeading';

import { 
  colours, 
  fontFamily 
} from '../../configuration/config.json';

// import globalStyles from '../../css/globalStyles.js';

const HowToPlay = () => (
  <ScrollView>
    <InfoInner>
      <PageHeading 
        textKey='howToPlay' 
      />
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 20,
          marginBottom: 12,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus accumsan hendrerit. Vivamus consequat sodales aliquam. Sed erat sem, molestie tincidunt scelerisque ut, porttitor varius nunc. Donec interdum nisi nec consectetur hendrerit. Praesent lorem mi, dictum et nunc eget, posuere maximus urna. Quisque laoreet libero nec tempor mattis. Vestibulum mattis arcu tempus ligula dignissim consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sagittis ultricies aliquam. Fusce eros felis, lobortis eu eleifend id, cursus ac nunc.
      </Text>
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 20,
          marginBottom: 12,
        }}
      >
        Nam in diam ut ipsum sagittis consectetur. Nulla sit amet hendrerit lorem, id sagittis leo. Aliquam scelerisque ut sapien sed efficitur. Nulla eu rutrum dui. Vivamus ac aliquam turpis, eu pretium massa. 
      </Text>
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 20,
          marginBottom: 12,
        }}
      >  
        Nullam tortor turpis, pellentesque at accumsan fermentum, feugiat sit amet nibh. Pellentesque elementum neque non ante porta, et congue enim posuere. Suspendisse hendrerit sollicitudin turpis ac suscipit.
      </Text>
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 20,
          marginBottom: 12,
        }}
      >
        Aenean accumsan rutrum magna, eu scelerisque dolor. Quisque tristique orci a pulvinar eleifend. Vestibulum finibus tortor ut tincidunt egestas. Mauris at magna elementum, rutrum velit at, euismod erat. Praesent non feugiat ante. Integer nisi libero, eleifend sit amet leo sit amet, iaculis facilisis mi. Aliquam dictum enim in feugiat porta. Ut luctus efficitur sapien ut elementum.
      </Text>
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 20,
          marginBottom: 12,
        }}
      >
        Curabitur sed sem quis justo maximus efficitur in vel tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ornare elit id eros pulvinar iaculis in sit amet mi. Vestibulum lacinia velit leo, lobortis fringilla arcu ullamcorper ut. Donec mauris eros, imperdiet et bibendum non, faucibus vel tellus. Aliquam eget libero at velit facilisis accumsan ut sit amet mauris. Donec rhoncus ipsum vitae feugiat commodo. Donec sit amet nisi iaculis, lacinia massa id, gravida urna. Curabitur venenatis pharetra ultrices. Nulla auctor magna nunc, at euismod odio vulputate quis. Sed finibus felis at eros convallis, non auctor neque imperdiet. Integer ut consequat eros. Nullam auctor viverra imperdiet. Vivamus ac iaculis velit.
      </Text>
      <Text
        style={{
          color: colours.white,
          fontFamily: fontFamily,
          fontSize: 20,
          marginBottom: 12,
        }}
      >
        In hac habitasse platea dictumst. Nulla dignissim sapien mauris, nec posuere lorem egestas vitae. Phasellus convallis varius ante, vel ullamcorper nunc aliquet et. Aliquam erat volutpat. Vestibulum tincidunt arcu sed tellus rhoncus vestibulum. Proin porta urna tortor, ac ultricies nulla dapibus nec. Maecenas gravida, odio sit amet hendrerit placerat, velit tellus rutrum nibh, eu tristique dolor nulla sit amet ante. Proin quis sodales enim, sit amet tincidunt leo. Nam gravida, sapien quis gravida ultrices, est eros malesuada nisi, in mattis velit sapien non orci. Maecenas commodo elit non mollis facilisis. Phasellus ac lacus laoreet, consequat mauris et, placerat risus.
      </Text>
    </InfoInner>
  </ScrollView>
);

export default HowToPlay;
