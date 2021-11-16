import PropTypes from 'prop-types';

import { drawGameDuration } from '../../js/helpers/drawGameDuration';
import { getDurationLanguage } from '../../js/helpers/getDurationLanguage';

const DrawGameDuration = props => {
  const { gameDuration, lang } = { ...props };
  const durationLanguage = getDurationLanguage(lang);
  return drawGameDuration(gameDuration, durationLanguage);
};

DrawGameDuration.propTypes = {
  gameDuration: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
};

export default DrawGameDuration;
