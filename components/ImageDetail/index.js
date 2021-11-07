import React from 'react';
import { Text, ScrollView, TouchableOpacity, View, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import ExpoFastImage from 'expo-fast-image';
import Translate from '../Translate';

import getGameData from '../../js/helpers/getGameData';
import { colours, fontFamily, ipAddress } from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const ImageDetail = props => {
  const { dimensions, image, level } = { ...props };

  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);

  const { gameActions, imagesActions } = { ...allActions };
  const dispatch = useDispatch();
  const gameData = getGameData(game.level);
  const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${images.detail}.jpg&size=medium`;

  const imageWidth = dimensions.width > 999 ? 512 : dimensions.width > 600 ? 512 : 256

  return (
    <ScrollView>
      <View 
        style={[
          globalStyles.infoInner
        ]}
      >
        <View 
          id="image-detail-img"
          style={[
            {
              alignSelf: 'center',
              height: imageWidth,
              overflow: 'hidden',
              width: imageWidth,
            },
            globalStyles.border,
            globalStyles.borderRadius8,
          ]}
        >
          <ExpoFastImage 
            uri={imageSrc}
            cacheKey={`image-${images.detail}-medium`}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <View 
          id="use-this-image"
          style={[
            {
              alignSelf: 'center',
              backgroundColor: colours.green,
              marginTop: 12,
              width: imageWidth,
            },
            globalStyles.border,
            globalStyles.borderRadius8,
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(imagesActions.setImagesSelected(image));
              dispatch(gameActions.setGameData(gameData));
              dispatch(gameActions.setGameStatus('game-loading'));
            }}
            style={{
              padding: 12,
            }}
          >
            <Text
              style={{
                color: colours.white,
                fontFamily: fontFamily,
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              <Translate textKey="start" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ImageDetail;
