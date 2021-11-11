import React from "react";
import Svg, { Path } from "react-native-svg";

const IdSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Path 
      d="M24 0C10.7 0 0 10.7 0 24h48C48 10.7 37.3 0 24 0z" 
      fill="#ff0000" 
    />
    <Path
      d="M24 48c13.3 0 24-10.7 24-24H0c0 13.3 10.7 24 24 24z"
      fill="#ffffff"
    />
  </Svg>
);

export default IdSvg;
