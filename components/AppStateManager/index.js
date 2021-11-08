import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import allActions from '../../actions';

const AppStateManager = props => {
  const { status, children  } = { ...props };
  const { gameActions } = { ...allActions };
  const dispatch = useDispatch();
  const handleAppStateChange = state => {
    if (status === 'game-on') {
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
};

AppStateManager.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default AppStateManager;
