import { combineReducers } from 'redux';

import device from './device';
import game from './game';
import images from './images';
import language from './language';
import timer from './timer';

const rootReducer = combineReducers({
  device,
  game,
  images,
  language,
  timer,
});

export default rootReducer;
