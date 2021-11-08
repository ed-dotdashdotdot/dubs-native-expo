import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

import { colours } from '../../../../configuration/config.json';

const PauseButtonSvg = props => {
  const { 
    colour
  } = { ...props };
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 480 480"
      xmlSpace="preserve"
    >
      <Path
        d="M240.5 20.5c29.71 0 58.52 5.81 85.63 17.28 26.2 11.08 49.72 26.95 69.94 47.16 20.21 20.21 36.08 43.74 47.16 69.94 11.47 27.11 17.28 55.92 17.28 85.63s-5.81 58.52-17.28 85.63c-11.08 26.2-26.95 49.72-47.16 69.94-20.21 20.21-43.74 36.08-69.94 47.16-27.11 11.47-55.92 17.28-85.63 17.28s-58.52-5.81-85.63-17.28c-26.2-11.08-49.72-26.95-69.94-47.16-20.21-20.21-36.08-43.74-47.16-69.94-11.46-27.12-17.27-55.93-17.27-85.64s5.81-58.52 17.28-85.63c11.08-26.2 26.95-49.72 47.16-69.94 20.21-20.21 43.74-36.08 69.94-47.16 27.1-11.46 55.91-17.27 85.62-17.27m0-20C107.95.5.5 107.95.5 240.5s107.45 240 240 240 240-107.45 240-240S373.05.5 240.5.5z"
        fill={colour}
      />
      <Path
        d="M168 144h48v192h-48zM264 144h48v192h-48z"
        fill={colour}
      />
    </Svg>
  );
};

PauseButtonSvg.defaultProps = {
  colour: colours.white,
};

PauseButtonSvg.propTypes = {
  colour: PropTypes.string.isRequired,
};
  

export default PauseButtonSvg;
