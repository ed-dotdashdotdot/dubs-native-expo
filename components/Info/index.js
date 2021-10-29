import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import ChooseImage from '../ChooseImage';
import GameHome from '../GameHome';
import GameOn from '../GameOn';
import GameOver from '../GameOver';
import GameReady from '../GameReady';
import WhatIsBossMode from '../WhatIsBossMode';

// import isPortrait from '../../js/helpers/isPortrait';

import globalStyles from '../../css/style.js';

const Info = () => {
  const game = useSelector(state => state.game);

  const { height, width } = useWindowDimensions();
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
              backgroundColor: 'purple',
              flex: 1,
              position: 'absolute',
              top: 48,
            }}
          >
            <View 
              id='info'
              style={[
                globalStyles.border,
                globalStyles.borderRadius12,
                {
                  height: infoHeight,
                  width: infoWidth,
                }
              ]}
            >
              {(() => {
                switch (game.status) {
                  // case 'image-detail':
                  //   return <ImageDetail image={imageDetail} level={level} />;
                  case 'choose-image':
                    return <ChooseImage />;
                  case 'game-over':
                    return <GameOver />;
                  // case 'game-paused':
                  //   return <GamePaused />;
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
                  case 'game-on':
                    return (
                      <GameOn
                        // bossMode={bossMode}
                        // gameImage={gameImage}
                        // invert={invert}
                        // lang="en"
                        // level="easy"
                        // percentComplete={percentComplete}
                        // status="game-on"
                        level={game.level}
                        dimensions={{
                          height: infoHeight,
                          width: infoWidth,
                        }}
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
