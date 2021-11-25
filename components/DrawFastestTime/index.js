import React from 'react';
import PropTypes from 'prop-types';

import Translate from '../Translate';

const DrawFastestTime = ({ lang, time }) => (
  <>
    {time}
    {lang === 'de-DE' && " "}
    <Translate textKey='secondsShort' />
  </>
);

DrawFastestTime.propTypes = {
  lang: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default DrawFastestTime;
