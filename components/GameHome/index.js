import React, { useEffect } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';
// import { useWindowDimensions } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import { getDeviceLocale, getDeviceCountry, getManufacturer } from 'react-native-device-info';
// import { getManufacturer } from 'react-native-device-info';
// import {
//   getManufacturer,
//   getManufacturerSync,
//   syncUniqueId,
//   useBatteryLevel,
//   useBatteryLevelIsLow,
//   usePowerState,
//   useFirstInstallTime,
//   useDeviceName,
//   useManufacturer,
//   useHasSystemFeature,
//   useIsEmulator,
//   useIsHeadphonesConnected,
// } from 'react-native-device-info';

// DeviceInfo.getApiLevel().then((apiLevel) => {
//   // iOS: ?
//   // Android: 25
//   // Windows: ?
// });

import PageHeading from '../PageHeading';
import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

// import { setGameStatus } from '../../actions';
// import gameGridPositions from '../../js/helpers/gameGridPositions';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const GameHome = () => {
  // const getUniqueId = DeviceInfo.then(s => {
    // alert(DeviceInfo.getManufacturer());
  // })
  // alert(DeviceInfo?.getUniqueId());

  // let appName = DeviceInfo.getApplicationName();
  // alert(appName);

  // let brand = '123';
  // alert(brand);

  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  // const language = useSelector(state => state.language);
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';

  const bgImage = { uri: "../../assets/game-images/2-small.jpg" };

  // const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height;
  // const window = useWindowDimensions();
  const { height, width } = useWindowDimensions();
  const isPortrait = () => {
    return height >= width;
  };
  // save this info in redux

  // const level = 'easy';

  // const gameSpecs = {
  //   width: isPortrait() ? 700 : 950,
  //   height: isPortrait() ? 800 : 550,
  //   total: level === 'hard' ? 96 : level === 'normal' ? 48 : 24,
  //   cols: level === 'hard' 
  //     ? isPortrait() ? 12 : 8 
  //     : level === 'normal' 
  //       ? isPortrait() ? 6 : 8
  //       : isPortrait() ? 4 : 6,
  //   rows123: 6,
  //   rows: level === 'hard' 
  //     ? isPortrait() ? 8 : 12 
  //     : level === 'normal' 
  //       ? isPortrait() ? 8 : 6
  //       : isPortrait() ? 6 : 4,
  // };
  // let gameArray = [];
  // for (let i=0; i < gameSpecs.total; i++) {
  //   gameArray.push(i);
  // }

  return (
    <ScrollView>
      <View style={globalStyles.infoInner}>
        {/* <PageHeading text='Game ready' />
        <Text style={[
          globalStyles.fontFamilyCourier,
          styles.bodyText,
        ]}>
          Game home content
        </Text> */}

          <PageHeading text={polyglot.t(`howToPlay.${lang.toUpperCase()}`)} />

          {/* <Text>
            {'windowWidth:'}
            {windowWidth}
          </Text>
          <Text>
            {'windowHeight:'}
            {windowHeight}
          </Text> */}
          {/* <View style={{marginBottom: 24}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            {`height: ${height},width: ${width}, isPortrait: ${isPortrait()}`}
            </Text>
          </View> */}
          
          {/* <View style={{marginBottom: 24}}> */}
            {/* <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              {`DeviceInfo.getDeviceCountry(): ${DeviceInfo.getDeviceCountry()}`}
            </Text>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              {`DeviceInfo.getDeviceLocale() : ${DeviceInfo.getDeviceLocale()}`}
            </Text> */}
            {/* <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              {`DeviceInfo.getManufacturer() : ${DeviceInfo.getManufacturer()}`}
            </Text> */}
          {/* </View> */}

          <NewGameButtons />
          
          {/* <View 
            style={{
              display: 'flex',
              flexDirection: "row",
              flexWrap: 'wrap',
              width: gameSpecs.width,
              height: gameSpecs.height,
              borderColor: 'red',
              borderStyle: 'solid',
              borderWidth: 0,
            }}
          >
            {
              gameArray.map(val => {
                return (
                  <View 
                    style={{
                      borderColor: 'red',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      height: gameSpecs.height / gameSpecs.rows,
                      overflow: 'hidden',
                      width: gameSpecs.width / gameSpecs.cols,
                    }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.5}
                    >
                      <Image
                        resizeMode='stretch'
                        source={require('../../assets/game-images/2.jpg')}
                        style={{
                          width: gameSpecs.width,
                          height: gameSpecs.height,
                          position: 'absolute',
                          left: (
                            gameGridPositions(
                              val, 
                              'easy', 
                              isPortrait(), 
                              gameSpecs.width, 
                              gameSpecs.height,
                              gameSpecs.rows,
                              gameSpecs.cols
                            ).x
                          ),
                          top: (
                            gameGridPositions(
                              val, 
                              'easy', 
                              isPortrait(), 
                              gameSpecs.width, 
                              gameSpecs.height,
                              gameSpecs.rows,
                              gameSpecs.cols
                            ).y
                          ),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </View> */}



          {/* {!!game.level && <Text>{game.level}</Text>}
          {!!game.status && <Text>{game.status}</Text>} */}
          {/* {!!game.status && !!game.level && <Text>BOTH</Text>} */}
          {/* <Text><Translate textKey='easy' /> (Translated)</Text>
          <Text>{language.selected}</Text> */}

          {/* <View>
            <Image
              source={require('../../assets/game-images/2-small.jpg')}
            />
          </View> */}

          {/* <View style={{ 
            width: 72, 
            height: 72, 
            overflow: 'hidden',
            borderWidth: 0,
            borderStyle: 'solid',
            borderColor: 'red',
            marginTop: 24,
            marginBottom: 12,
          }}>
            <Image
              source={require('../../assets/game-images/2-grid.jpg')}
              style={{
                top: -36,
                left: -36,
              }}
            />
          </View>
          <View style={{ 
            width: 72, 
            height: 72, 
            overflow: 'hidden',
            borderWidth: 0,
            borderStyle: 'solid',
            borderColor: 'red',
            marginTop: 0,
            marginBottom: 48,
          }}>
            <Image
              source={require('../../assets/game-images/2-grid.jpg')}
              style={{
                top: -0,
                left: -72,
              }}
            />
          </View>
          <View style={{ 
            position: 'relative',
            top: 0,
            left: 0,
            width: 240, 
            height: 360, 
            overflow: 'hidden',
            borderWidth: 8,
            borderStyle: 'solid',
            borderColor: 'red',
            marginTop: 0,
            marginBottom: 48,
            // transform: [{ scale: 0.5 }]
          }}>
            <Image
              source={require('../../assets/game-images/grid-numbered-easy-portrait.png')}
              style={{
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                // aspectRatio: 1,
              }}
              resizeMode='cover'
            />
          </View> */}

          {/* <View style={styles.container}>
            <ImageBackground
              resizeMode="cover"
              // source={bgImage}
              source={require('../../assets/game-images/2-small.jpg')}
              style={styles.image}
            >
              <Text style={styles.text}>Inside</Text>
            </ImageBackground>  
          </View> */}

          {/* <Text style={[
            globalStyles.fontFamilyCourier,
            styles.bodyText,
          ]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui lectus, tristique eget euismod in, sagittis eu magna. Aenean lobortis arcu ac elit aliquet, dapibus scelerisque eros blandit. Praesent tincidunt, turpis non facilisis mattis, nulla ligula tincidunt ex, ac accumsan tellus magna sed risus. Fusce eget consequat mi, quis vehicula elit. Mauris volutpat mi augue, nec cursus mauris scelerisque eu. Cras tristique at nisi bibendum vulputate. Fusce id efficitur neque. Vivamus ullamcorper tortor a porta viverra.
          </Text>
          <Text style={[
            globalStyles.fontFamilyCourier,
            styles.bodyText,
          ]}>
            Integer dapibus eros purus, ac commodo arcu finibus nec. Morbi dui metus, sagittis a magna et, vulputate consequat ligula. Duis et tortor ut dui dapibus egestas. Phasellus hendrerit eros at laoreet dapibus. Vivamus dignissim imperdiet eros vel finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce lobortis facilisis ipsum, et lacinia leo laoreet eget. Maecenas ultricies hendrerit magna sit amet pellentesque.
          </Text>
          <Text style={[
            globalStyles.fontFamilyCourier,
            styles.bodyText,
          ]}>
            Duis magna nulla, sodales nec rutrum at, convallis non justo. Donec aliquam dictum ante, feugiat porta nibh feugiat in. Integer id tortor eleifend, convallis felis eu, hendrerit ipsum. Fusce sed aliquam erat. Duis sodales, purus ut facilisis rhoncus, massa mauris laoreet quam, eget dapibus enim tortor sit amet orci. Nunc in luctus tortor, sit amet imperdiet velit. Vestibulum dapibus eget ipsum in dapibus. Nullam lacinia diam eget quam varius, lobortis gravida ipsum accumsan. Pellentesque massa sem, dignissim eu bibendum non, sagittis sed eros. Vestibulum sed egestas ante. Curabitur vitae sagittis neque. Duis eu turpis arcu. Vestibulum nisl leo, rhoncus quis cursus at, eleifend vel libero. Cras hendrerit ipsum et felis sagittis eleifend. Donec mollis arcu porttitor, interdum eros et, cursus libero. Mauris nec libero hendrerit, mollis libero in, facilisis eros.
          </Text>
          <Text style={[
            globalStyles.fontFamilyCourier,
            styles.bodyText,
          ]}>
            Pellentesque tristique eleifend dapibus. Aenean semper nisi quis nulla mattis, eget imperdiet lorem euismod. In et tellus nibh. Vivamus ac quam at diam ornare hendrerit. Curabitur semper ultricies sapien ac venenatis. Curabitur posuere maximus mattis. Vivamus vehicula finibus porttitor. Morbi et nibh non odio scelerisque condimentum. Donec nec nibh eget mauris tristique faucibus ultrices eu diam. Sed quam justo, suscipit quis ultrices vitae, tincidunt vitae elit. Nulla facilisi.
          </Text> */}

      </View>
    </ScrollView>
    
  );
}

export default GameHome;
