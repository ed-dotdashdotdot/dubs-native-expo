import React from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';
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
  const dispatch = useDispatch();

  const { height, width } = useWindowDimensions();
  // const isDevicePortrait = isPortrait(height, width);

  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View 
          id='infoContainer'
          style={{
            backgroundColor: 'purple',
            flex: 1,
            position: 'absolute',
            top: 72,
          }}
        >
          <View 
            id='info'
            style={[
              globalStyles.border,
              globalStyles.borderRadius12,
              {
                height: height - 72 - 72 - insets.top - insets.bottom,
                width: width - (12 * 2),
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
                    />
                  );
                default:
                  return <GameHome />;
              }
            })()}
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
}

export default Info;
