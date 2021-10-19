import React, { useEffect } from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

import NewGameButtons from '../shared/NewGameButtons';
import Translate from '../Translate';

// import { setGameStatus } from '../../actions';

import globalStyles from '../../css/style.js';
import styles from './styles.js';

const Info = () => {
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  // alert(game.status);
  // const state = useSelector(state => state);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(timerActions.setTimerStart(new Date().getTime()));
  //   // dispatch(timerActions.setTimerStart(timerStartDate(timer.paused)));
  //   // dispatch(timerActions.setTimerEnd(''));
  //   // dispatch(timerActions.setTimerPaused(0));
  //   // dispatch(timerActions.setTimerSaved(0));
  //   // dispatch(timerActions.setTimerStatus(''));
  //   // dispatch(gameActions.setGameStatus('game-over'));
  //   // dispatch(gameActions.setGameLevel('hard'));
  // }, []);
  return (
    <View style={[
      globalStyles.border,
      globalStyles.borderRadius12,
      styles.info,
    ]}>
      <ScrollView>
        <View style={styles.infoInner}>
          <Text style={[
            globalStyles.fontFamilyCourier,
            styles.infoHeading
          ]}>Open up App.js to start working on your app!</Text>
          <NewGameButtons />
          {!!game.level && <Text>{game.level}</Text>}
          {!!game.status && <Text>{game.status}</Text>}
          {/* {!!game.status && !!game.level && <Text>BOTH</Text>} */}
          <Text><Translate textKey='easy' /> (Translated)</Text>
          <Text>{language.selected}</Text>
          <Text style={[
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
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Info;
