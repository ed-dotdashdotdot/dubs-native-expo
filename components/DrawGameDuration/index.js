import PropTypes from 'prop-types';

import { drawGameDuration } from '../../js/helpers/drawGameDuration';
import { getDurationLanguage } from '../../js/helpers/getDurationLanguage';

const DrawGameDuration = props => {
  const { duration, lang } = { ...props };
  const durationLanguage = getDurationLanguage(lang);
  return drawGameDuration(duration, durationLanguage);
};

DrawGameDuration.propTypes = {
  duration: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
};

export default DrawGameDuration;
