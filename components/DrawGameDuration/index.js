import PropTypes from 'prop-types';

import drawGameDuration from '../../js/helpers/drawGameDuration';
import drawStopwatch from '../../js/helpers/drawStopwatch';

const DrawGameDuration = props => {
  const { duration, lang, section } = { ...props };
  if (section === 'timer') {
    return drawStopwatch(duration);
  }
  return drawGameDuration(duration, lang);
};

DrawGameDuration.propTypes = {
  duration: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
  section: PropTypes.string,
};

export default DrawGameDuration;
