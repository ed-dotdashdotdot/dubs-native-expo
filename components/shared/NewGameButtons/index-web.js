/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import allActions from '../../../../../actions';

import Button from '../../../../ui.components/button';
import ContinueGameButton from '../../ContinueGameButton';
import PlayThisGameAgainButton from '../../PlayThisGameAgainButton';
import Translate from '../../../../Translate';

import NewGameButtonsStyled from './styles';
import './css/index.scss';

const NewGameButtons = props => {
  const {
    section
  } = { ...props };
  const { gameActions, imagesActions, timerActions } = { ...allActions };
  const dispatch = useDispatch();

  const newGameDispatches = level => {
    dispatch(gameActions.setGameClicks(0));
    dispatch(gameActions.setGameStatus('game-ready'));
    dispatch(gameActions.setGameLevel(level));
    dispatch(gameActions.setGameBossMode(false));
    dispatch(gameActions.injectGameFound([]));
    dispatch(gameActions.setGameData([]));
    dispatch(gameActions.setGameSelected(''));
    dispatch(gameActions.setGameId(''));
    // dispatch(gameActions.setGameInvert(false));
    dispatch(imagesActions.setImagesSelected(''));
    dispatch(timerActions.setTimerStart(''));
    dispatch(timerActions.setTimerEnd(''));
    dispatch(timerActions.setTimerSaved(0));
    dispatch(timerActions.setTimerPaused(0));
    dispatch(timerActions.setTimerStatus(''));
  };
  return (
    <NewGameButtonsStyled
      className={
        classnames(
          'new-game-buttons',
          section,
        )
      }
    >
      {section === 'game-over' && <PlayThisGameAgainButton />}
      {section === 'game-paused' && <ContinueGameButton />}
      <li>
        <Button
          className={classnames('green')}
          onClick={() => newGameDispatches('easy')}
          type="button"
        >
          <Translate textKey="startEasyGame" />
        </Button>
      </li>
      <li>
        <Button
          className={classnames('amber')}
          onClick={() => newGameDispatches('normal')}
          type="button"
        >
          <Translate textKey="startNormalGame" />
        </Button>
      </li>
      <li>
        <Button
          className={classnames('red')}
          onClick={() => newGameDispatches('hard')}
          type="button"
        >
          <Translate textKey="startHardGame" />
        </Button>
      </li>
    </NewGameButtonsStyled>
  );
};

export default NewGameButtons;
