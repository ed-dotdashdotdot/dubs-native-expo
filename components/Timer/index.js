import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DrawGameDuration from '../DrawGameDuration';

import timeDifference from '../../js/helpers/timeDifference';

const Timer = props => {
  const {
    lang,
    start,
  } = { ...props };

  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    timerIdRef.current = setInterval(() => setCount(c => {
      return c + 100;
    }), 100);
  };

  useEffect(() => {
    startHandler();
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, []);

  return (
    <DrawGameDuration
      duration={timeDifference(start, new Date().getTime())}
      lang={lang}
      section="timer"
    />
  );
};

Timer.propTypes = {
  lang: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
};

export default Timer;
