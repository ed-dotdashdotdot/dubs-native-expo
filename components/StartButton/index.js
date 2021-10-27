import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import classnames from 'classnames';

import allActions from '../../../../actions';

import Button from '../../../ui.components/button';
import Translate from '../../../Translate';

const StartButtonStyled = styled.ul`
    margin-top: 12px;
    &.top {
      margin-bottom: 12px;
    }
`;

const StartButton = props => {
  const {
    gameData,
    position,
    startTextKey,
  } = { ...props };
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  return (
    <StartButtonStyled
      className={
        classnames(
          position,
        )
      }
    >
      <li>
        <Button
          className={classnames('green')}
          onClick={() => {
            dispatch(gameActions.setGameData(gameData));
            dispatch(gameActions.setGameId(uuidv4()));
            dispatch(gameActions.setGameStatus('game-on'));
          }}
          type="button"
        >
          <Translate textKey={startTextKey} />
        </Button>
      </li>
    </StartButtonStyled>
  );
};

export default StartButton;
