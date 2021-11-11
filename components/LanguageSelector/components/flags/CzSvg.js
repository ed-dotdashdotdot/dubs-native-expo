import React from "react";
import Svg, { Path } from "react-native-svg";

const CzSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Path
      d="M24 0C16.5 0 9.8 3.4 5.4 8.8L28.1 24H48C48 10.7 37.3 0 24 0z"
      fill="#ffffff"
    />
    <Path
      d="M5.4 39.2C9.8 44.6 16.5 48 24 48c13.3 0 24-10.7 24-24H28.1L5.4 39.2z"
      fill="#d7141a"
    />
    <Path
      d="M5.4 8.8C2 13 0 18.3 0 24s2 11 5.4 15.2L28.1 24 5.4 8.8z"
      fill="#11457e"
    />
  </Svg>
);

export default CzSvg;
