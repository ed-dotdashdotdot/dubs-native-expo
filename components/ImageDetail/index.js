import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import allActions from '../../actions';
import ExpoFastImage from 'expo-fast-image';

import InfoInner from '../InfoInner';
import TurnOnBossModeButton from '../buttons/TurnOnBossModeButton';
import Translate from '../Translate';

import { getGameData } from '../../js/helpers/getGameData';

import { colours, fontFamily, ipAddress } from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const ImageDetail = props => {
  const { dimensions, image, } = { ...props };

  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);

  const { gameActions, imagesActions } = { ...allActions };
  const dispatch = useDispatch();
  const gameData = getGameData(game.level);
  const imageSrc = `http://${ipAddress.server}/dubs-cdn/image/?image=${images.detail}.jpg&size=medium`;

  const imageWidth = dimensions.width > 999 ? 440 : dimensions.width > 600 ? 512 : '100%'

  return (
    <ScrollView>
      <InfoInner>
        <View 
          style={[
            {
              alignSelf: 'center',
              overflow: 'hidden',
            }, {
              height: imageWidth,
              width: imageWidth,
            },
            globalStyles.border,
            globalStyles.borderRadius8,
          ]}
        >
          <ExpoFastImage 
            cacheKey={`image-${images.detail}-medium`}
            style={{
              height: '100%',
              width: '100%',
            }}
            uri={imageSrc}
          />
        </View>
        <View
          style={[
            {
              alignSelf: 'center',
              marginTop: 12,
            }, {
              width: imageWidth,
            },
            globalStyles.borderRadius8,
          ]}
        >
          <TurnOnBossModeButton
            bossMode={game.bossMode}
          />
        </View>
        <View 
          style={[
            {
              alignSelf: 'center',
              backgroundColor: colours.green,
              marginBottom: 12,
            }, {
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
            style={[
              globalStyles.padding12,
            ]}
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
      </InfoInner>
    </ScrollView>
  );
};

ImageDetail.propTypes = {
  dimensions: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageDetail;
