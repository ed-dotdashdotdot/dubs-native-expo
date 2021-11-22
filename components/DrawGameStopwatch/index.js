import PropTypes from 'prop-types';

import { drawStopwatch } from '../../js/helpers/drawStopwatch';

const DrawGameStopwatch = props => {
  const { duration } = { ...props };
  return drawStopwatch(duration);
};

DrawGameStopwatch.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default DrawGameStopwatch;
