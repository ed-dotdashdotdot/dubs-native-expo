import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

import { 
  colours 
} from '../../../../../configuration/config.json';

const SettingsButtonSvg = ({ colour, ...props }) => (
  <Svg
    viewBox="0 0 480 480"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M260.2 20c4.8 0 8.8 3.4 9.6 8.1l5.6 33.3 2.1 12.3 11.9 3.6c10.3 3.1 20.5 7.3 30.3 12.4l10.9 5.8 10-7.2 27.9-19.9c1.6-1.1 3.4-1.7 5.4-1.7 2.7 0 5 1 6.9 2.8l29.9 29.9c3.3 3.3 3.7 8.5 1 12.4l-19.9 27.8-7.2 10.1 5.8 10.9c4.8 9.1 8.9 19 12.1 29.3l3.6 11.8 12.1 2.1 33.7 5.7c4.6.8 8 4.7 7.9 9.3V261.2c0 4.8-3.4 8.8-8.1 9.6l-33.7 5.6-12.3 2-3.6 11.9c-3 9.7-7 19.6-12.1 29.2l-5.7 10.9 7.1 10 19.9 27.9c2.7 3.8 2.3 9.2-1 12.5l-29.8 29.8c-2 1.9-4.3 2.9-6.9 2.9-2 0-3.9-.6-5.5-1.7l-27.8-19.9-10.1-7.2-10.9 5.8c-9.1 4.8-19 8.9-29.3 12.1l-11.8 3.6-2.1 12.1-5.7 33.7c-.8 4.7-4.8 8.1-9.6 8.1h-42.3c-4.8 0-8.8-3.4-9.6-8.1l-5.6-33.7-2-12.1-11.8-3.7c-10.2-3.2-19.7-7.1-28.4-11.6l-10.9-5.7-10 7.1-28.2 20.1c-1.6 1.1-3.4 1.7-5.4 1.7-2.7 0-5-1-6.9-2.8l-29.9-29.9c-3.3-3.3-3.7-8.5-1-12.4l19.8-27.4 7.3-10.2-5.9-11c-5-9.2-9.1-19-12.2-29.1l-3.7-11.7-12.1-2.1-34.1-5.8c-4.7-.8-8.1-4.8-8.1-9.6v-42.2c0-4.8 3.4-8.8 8.1-9.6l33.3-5.6 12.3-2.1 3.6-11.9c3.1-10.3 7.1-20.2 11.9-29.3l5.7-10.9-7.1-10-20.1-28.2c-2.7-3.8-2.3-9.2 1-12.4l30-29.9c1.8-1.8 4.3-2.8 6.9-2.8 2 0 3.9.6 5.5 1.7l27.6 19.9 10.2 7.3 11-5.9c9.2-5 19-9.1 29.1-12.2l11.7-3.7 2.1-12.1 5.8-34.1c.8-4.7 4.8-8.1 9.6-8.1h42.2m0-20H218c-14.5 0-26.9 10.4-29.3 24.8l-5.8 34.1c-11.2 3.5-22.2 8.1-32.6 13.7l-27.6-19.9c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-21 8.7l-30 29.9C44.3 96 42.9 112.2 51.3 124l20.1 28.2c-5.5 10.5-9.9 21.5-13.3 32.8l-33.3 5.6C10.4 193 0 205.4 0 219.9v42.2c0 14.5 10.4 26.9 24.8 29.3l34.1 5.8c3.5 11.2 8.1 22.2 13.7 32.6l-19.8 27.5c-8.4 11.8-7.1 28 3.2 38.2l29.9 29.9c5.6 5.6 13 8.7 21 8.7 6.2 0 12.1-1.9 17.1-5.5l28.2-20.1c10.1 5.3 20.8 9.6 31.7 13l5.6 33.7c2.4 14.3 14.7 24.8 29.3 24.8h42.3c14.5 0 26.9-10.4 29.3-24.8l5.7-33.7c11.3-3.5 22.3-8 32.7-13.5l27.8 19.9c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 21-8.7l29.9-29.9c10.2-10.2 11.6-26.4 3.2-38.2L408 328.7c5.5-10.5 10.1-21.5 13.5-32.7l33.7-5.6c14.3-2.4 24.8-14.7 24.8-29.3v-42.2c.2-14.5-10.2-26.9-24.6-29.3l-33.7-5.7c-3.5-11.3-8-22.3-13.5-32.7l19.9-27.8c8.4-11.8 7.1-28-3.2-38.2L395 55.3c-5.6-5.6-13-8.7-21-8.7-6.2 0-12.1 1.9-17.1 5.5L329 72c-10.8-5.7-22.2-10.4-33.9-13.9l-5.6-33.3C287.1 10.4 274.7 0 260.2 0z"
      fill={colour}
    />
    <Path
      d="M240 156.4c46.1 0 83.6 37.5 83.6 83.5 0 46.1-37.5 83.6-83.6 83.6S156.4 286 156.4 240c0-46.1 37.5-83.6 83.6-83.6m0-20c-57.2 0-103.6 46.4-103.6 103.6S182.9 343.5 240 343.5s103.6-46.4 103.6-103.6S297.2 136.4 240 136.4z"
      fill={colour}
    />
  </Svg>
);

SettingsButtonSvg.defaultProps = {
  colour: colours.white,
};

SettingsButtonSvg.propTypes = {
  colour: PropTypes.string.isRequired,
};

export default SettingsButtonSvg;
