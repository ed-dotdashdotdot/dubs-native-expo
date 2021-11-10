import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DrawGameStopwatch from '../DrawGameStopwatch';

import { timeDifference }  from '../../js/helpers/timeDifference';

const Stopwatch = props => {
  const {
    lang,
    start,
  } = { ...props };

  const stopwatchIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    stopwatchIdRef.current = setInterval(() => setCount(c => {
      return c + 100;
    }), 100);
  };

  useEffect(() => {
    startHandler();
    return () => {
      clearInterval(stopwatchIdRef.current);
    };
  }, []);

  return (
    <DrawGameStopwatch
      duration={timeDifference(start, new Date().getTime())}
      // lang={lang}
      // section="stopwatch"
    />
  );
};

Stopwatch.propTypes = {
  lang: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
};

export default Stopwatch;
