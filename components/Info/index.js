import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import { useSelector } from 'react-redux';

import AppInfo from '../AppInfo';
import AppSettings from '../AppSettings';
import ChooseImage from '../ChooseImage';
import GameHome from '../GameHome';
import GameOn from '../GameOn';
import GameOver from '../GameOver';
import GamePaused from '../GamePaused';
import GameReady from '../GameReady';
import YourHighScores from '../YourHighScores';
import ImageDetail from '../ImageDetail';
import LanguageSelect from '../LanguageSelect';
import LoadingImage from '../LoadingImage';
import WhatIsBossMode from '../WhatIsBossMode';

import { 
  colours 
} from '../../configuration/config.json';

import globalStyles from '../../css/style.js';

const Info = () => {
  const { game, images } = useSelector(state => state);
  const { 
    height, 
    width,
  } = useWindowDimensions();

  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => {
        const infoHeight = height - 48 - 72 - insets.top - insets.bottom;
        const infoWidth = width - (12 * 2);
        return (
          <View
            style={{
              backgroundColor: colours.black050,
              borderRadius: 10,
              flex: 1,
              position: 'absolute',
              top: 48,
              width: '100%',
            }}
          >
            <View
              style={[
                {
                  borderRadius: 12,
                },
                globalStyles.border,
                {
                  // borderColor: game.lastMove === 'incorrect' ? colours.red : colours.white,
                  borderColor: colours.white,
                  height: infoHeight,
                  width: infoWidth,
                }
              ]}
            >
              {(() => {
                switch (game.status) {
                  case 'image-detail':
                    return (
                      <ImageDetail 
                        bossMode={game.bossMode}
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
                        level={game.level}
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
                        level={game.level}
                      />
                    );
                    case 'app-info': return <AppInfo />;
                    case 'app-settings': return <AppSettings />;
                    case 'language-select': return (
                      <LanguageSelect 
                        dimensions={{
                          height: infoHeight,
                          width: infoWidth,
                        }}
                      />
                    );
                    case 'your-high-scores': return (
                      <YourHighScores
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
};

export default Info;
