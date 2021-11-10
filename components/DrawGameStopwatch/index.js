import PropTypes from 'prop-types';

// import { drawGameDuration } from '../../js/helpers/drawGameDuration';
import { drawStopwatch } from '../../js/helpers/drawStopwatch';

const DrawGameStopwatch = props => {
  const { duration } = { ...props };
  // if (section === 'stopwatch') {
    return drawStopwatch(duration);
  // }
  // return drawGameDuration(duration, lang);
};

DrawGameStopwatch.propTypes = {
  duration: PropTypes.number.isRequired,
  // lang: PropTypes.string.isRequired,
  // section: PropTypes.string,
};

export default DrawGameStopwatch;
