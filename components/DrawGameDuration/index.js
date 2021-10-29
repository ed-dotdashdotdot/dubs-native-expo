import drawGameDuration from '../../js/helpers/drawGameDuration';
import drawStopwatch from '../../js/helpers/drawStopwatch';

const DrawGameDuration = props => {
  const { duration, lang, section } = { ...props };
  if (section === 'timer') {
    return drawStopwatch(duration);
  }
  return drawGameDuration(duration, lang);
};

export default DrawGameDuration;
