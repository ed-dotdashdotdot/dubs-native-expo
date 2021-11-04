/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useRef, useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// import styled from 'styled-components';

import DrawGameDuration from '../DrawGameDuration';

import timeDifference from '../../js/helpers/timeDifference';

// import {
//   oneDayMs as oneHourMs
// } from '../../configuration/config.json';

// const TimerStyled = styled.div`
//   color: white;
//   font-size: 24px;
//   font-weight: bold;
// `;

const Timer = props => {
  const {
    lang,
    start,
  } = { ...props };

  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    // if (timerIdRef.current) {
    //   return;
    // }
    timerIdRef.current = setInterval(() => setCount(c => {
      // console.log(c);
      // console.log(start);
      // console.log(new Date().getTime());
      // console.log('Difference:');
      // console.log(timeDifference(start, new Date().getTime()));
      // console.log('---\n');
      return c + 100;
    }), 100);
  };

  // const stopHandler = () => {
  //   clearInterval(timerIdRef.current);
  //   timerIdRef.current = 0;
  // };

  useEffect(() => {
    // console.log('HERE');
    // clearInterval(timerIdRef.current);
    startHandler();
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, []);

  return (
    // <View>
    //   <Text
    //     style={{
    //       color: 'white',
    //       fontSize: 16,
    //       fontWeight: 'bold',
    //     }}
    //   >
    //     {" - "}
        <DrawGameDuration
          duration={timeDifference(start, new Date().getTime())}
          lang={lang}
          section="timer"
        />
    //   </Text>
    // </View>
  );
};

export default Timer;
