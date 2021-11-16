import { combineReducers } from 'redux';

import device from './device';
import game from './game';
import images from './images';
import language from './language';
import duration from './duration';

const rootReducer = combineReducers({
  device,
  duration,
  game,
  images,
  language,
});

export default rootReducer;
