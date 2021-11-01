import React from 'react';
import { Image, Text, ScrollView, TouchableOpacity, View, } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import classnames from 'classnames';
import allActions from '../../actions';

// import Button from '../../../ui.components/button';
// import InfoInner from '../InfoInner';
// import StartButton from '../StartButton';
import Translate from '../Translate';

import getGameData from '../../js/helpers/getGameData';
import { ipAddress } from '../../configuration/config.json';

// import ImageDetailStyled from './styles';
// import './css/index.scss';
import globalStyles from '../../css/style.js';

const ImageDetail = props => {
  const { dimensions, image, level } = { ...props };

  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);

  const { gameActions, imagesActions } = { ...allActions };
  const dispatch = useDispatch();
  const gameData = getGameData(game.level);
  const imageSrc = {uri: `http://${ipAddress.server}/dubs-cdn/image/?image=${images.detail}.jpg&size=medium`};

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
              borderColor: 'white',
              borderStyle: 'solid',
              borderWidth: 2,
              borderRadius: 8,
              overflow: 'hidden',
              height: imageWidth,
              width: imageWidth,
              alignSelf: 'center',
            },
          ]}
        >
          <Image 
            // source={`http://localhost/dubs-cdn/image/?image=${image}&size=medium`} 
            source={imageSrc}
            style={[
              {
                height: '100%',
                width: '100%',
                // borderColor: 'white',
                // borderStyle: 'solid',
                // borderWidth: 2,
                borderRadius: 8,
              },
            ]}
          />
          {/* <img src={`../../../../../../img/game-board/large/${image}.jpg`} alt="" /> */}
        </View>
        <View 
          id="use-this-image"
          style={[
            {
              backgroundColor: '#00aa00',
              marginTop: 12,
              width: imageWidth,
              alignSelf: 'center',
            },
            globalStyles.border,
            globalStyles.borderRadius8,
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(imagesActions.setImagesSelected(image));
              // dispatch(gameActions.setGameStatus('game-ready'));
              dispatch(gameActions.setGameData(gameData));
              // dispatch(gameActions.setGameId(uuidv4()));
              dispatch(gameActions.setGameStatus('game-on'));
            }}
            style={[
              {
                padding: 12,
              }
            ]}
          >
            <Text
              style={[
                {
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
                globalStyles.fontFamilyCourier,  
              ]}
            >
              <Translate textKey="start" />
            </Text>
          </TouchableOpacity>
        </View>
        {/* <StartButton
          gameData={gameData}
          startTextKey="start"
          onClick={() => {
            dispatch(imagesActions.setImagesSelected(image));
            dispatch(gameActions.setGameStatus('game-ready'));
          }}
        /> */}
      </View>
    </ScrollView>
  );
};

export default ImageDetail;
