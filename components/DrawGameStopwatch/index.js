import PropTypes from 'prop-types';

import { drawStopwatch } from '../../js/helpers/drawStopwatch';

const DrawGameStopwatch = ({ duration }) => drawStopwatch(duration);

DrawGameStopwatch.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default DrawGameStopwatch;
