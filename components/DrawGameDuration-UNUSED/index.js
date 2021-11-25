import PropTypes from 'prop-types';

import { drawGameDuration } from '../../js/helpers/drawGameDuration';
import { getDurationLanguage } from '../../js/helpers/getDurationLanguage';

const DrawGameDuration = ({ gameDuration, lang }) => {
  const durationLanguage = getDurationLanguage(lang);
  return drawGameDuration(gameDuration, durationLanguage);
};

DrawGameDuration.propTypes = {
  gameDuration: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default DrawGameDuration;
