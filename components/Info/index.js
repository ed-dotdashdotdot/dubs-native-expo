import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import ChooseImage from '../ChooseImage';
import GameHome from '../GameHome';
import GameOn from '../GameOn';
import GameOver from '../GameOver';
import GamePaused from '../GamePaused';
import GameReady from '../GameReady';
import ImageDetail from '../ImageDetail';
import LoadingImage from '../LoadingImage';
import WhatIsBossMode from '../WhatIsBossMode';

// import isPortrait from '../../js/helpers/isPortrait';

import globalStyles from '../../css/style.js';

const Info = () => {
  const game = useSelector(state => state.game);
  const images = useSelector(state => state.images);
  const { 
    height, 
    width,
  } = useWindowDimensions();
  // const isDevicePortrait = isPortrait(height, width);

  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => {
        const infoHeight = height - 48 - 72 - insets.top - insets.bottom;
        const infoWidth = width - (12 * 2);
        return (
          <View 
            id='infoContainer'
            style={{
              backgroundColor: 'rgba(0,0,0, 0.5)',
              borderRadius: 10,
              flex: 1,
              position: 'absolute',
              top: 48,
              width: '100%',
            }}
          >
            <View 
              id='info'
              style={[
                {
                  borderRadius: 12,
                  height: infoHeight,
                  width: infoWidth,
                },
                globalStyles.border,
                {
                  borderColor: game.lastMove === 'incorrect' ? 'red' : 'white',
                }
              ]}
            >
              {(() => {
                switch (game.status) {
                  case 'image-detail':
                    return (
                      <ImageDetail 
                        dimensions={{
                          height: infoHeight,
                          width: infoWidth,
                        }}
                        image={images.detail} 
                        level={game.level} 
                      />
                    );
                  case 'choose-image':
                    return (
                      <ChooseImage 
                        dimensions={{
                          height: infoHeight,
                          width: infoWidth,
                        }}
                      />
                    );
                  case 'game-over':
                    return <GameOver />;
                  case 'game-paused':
                    return <GamePaused />;
                  case 'game-ready':
                    return (
                      <GameReady
                        // bossMode={bossMode}
                        // lang={lang}
                        level={game.level}
                        // gameImage={gameImage}
                      />
                    );
                  case 'what-is-boss-mode':
                    return (
                      <WhatIsBossMode
                        bossMode={game.bossMode}
                      />
                    );
                  case 'game-loading':
                    return (
                      <LoadingImage 
                        imageToUse={images.selected} 
                      />
                    )
                  case 'game-on':
                    return (
                      <GameOn
                        dimensions={{
                          height: infoHeight,
                          width: infoWidth,
                        }}
                        // bossMode={bossMode}
                        // gameImage={gameImage}
                        // invert={invert}
                        // lang="en"
                        // level="easy"
                        // percentComplete={percentComplete}
                        // status="game-on"
                        level={game.level}
                      />
                    );
                  default:
                    return <GameHome />;
                }
              })()}
            </View>
          </View>
        )
      }}
    </SafeAreaInsetsContext.Consumer>
  );
}

export default Info;
