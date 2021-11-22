import React from 'react';
import PropTypes from 'prop-types';

import Translate from '../Translate';

const DrawFastestTime = props => {
  const { 
    lang,
    time,
  } = { ...props };

  return (
    <>
      {time}
      {lang === 'de-DE' && " "}
      <Translate textKey='secondsShort' />
    </>
  );
};

DrawFastestTime.propTypes = {
  lang: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default DrawFastestTime;
