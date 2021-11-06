import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

const AppStateManager = props => {
  const { children } = { ...props };
  const game = useSelector(state => state.game);
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const handleAppStateChange = state => {
    if (state !== 'active') {
      if(game.status === 'game-on') {
        dispatch(gameActions.setGameStatus('game-paused'));
      }
    }
  };
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return (() => {
      AppState.removeEventListener('change', handleAppStateChange);
    });
  }, []);
  return children;
}

export default AppStateManager;
