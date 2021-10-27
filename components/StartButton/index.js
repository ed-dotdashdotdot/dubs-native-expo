import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // StyleSheet,
  Button,
  Text,
  View,
  // ScrollView,
  Image,
  // ImageBackground,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
// import { v4 as uuidv4 } from 'uuid';
// import styled from 'styled-components';
// import classnames from 'classnames';

import allActions from '../../actions';

// import Button from '../../../ui.components/button';
import Translate from '../Translate';

import Polyglot from 'node-polyglot';
import i18n from '../../i18n';

// const StartButtonStyled = styled.ul`
//     margin-top: 12px;
//     &.top {
//       margin-bottom: 12px;
//     }
// `;

const StartButton = props => {
  const {
    gameData,
    position,
    startTextKey,
  } = { ...props };
  const game = useSelector(state => state.game);
  const language = useSelector(state => state.language);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const polyglot = new Polyglot();
  polyglot.extend(i18n());
  const lang = language.selected || 'en';
  return (
    <>
      {/* <StartButtonStyled
        className={
          classnames(
            position,
          )
        }
      > */}
        {/* <li> */}
          <Button
            // className={classnames('green')}
            onPress={() => {
              dispatch(gameActions.setGameData(gameData));
              dispatch(gameActions.setGameId(uuidv4()));
              dispatch(gameActions.setGameStatus('game-on'));
            }}
            // type="button"
            // title={startTextKey}
            title={polyglot.t(`${startTextKey}.${lang.toUpperCase()}`)}
          />
            {/* <Translate textKey={startTextKey} /> */}
          {/* </Button> */}
        {/* </li> */}
      {/* </StartButtonStyled> */}
    </>
  );
};

export default StartButton;
