import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

const AppStateManager = props => {
  const { status, children  } = { ...props };
  const game = useSelector(state => state.game);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const handleAppStateChange = (state, gameStatus=game.status) => {
    // console.log`gameStatus: ${gameStatus}`);
    console.log(`status: ${status}`);
    // console.log(game);
    // console.log('- - -');
    if(game.status === 'game-on' || status === 'game-on' || gameStatus === 'game-on') {
      console.log("GAME ON");
      if (state !== 'active') {
        dispatch(gameActions.setGameStatus('game-paused'));
      }
    }
  };
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return (() => {
      AppState.removeEventListener('change', handleAppStateChange);
    });
  }, [status]);
  return children;
}

export default AppStateManager;
