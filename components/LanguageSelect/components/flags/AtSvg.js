import React from "react";
import Svg, { Path } from "react-native-svg";

const AtSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    { ...props }
  >
    <Path
      d="M1.4 16h45.2C43.3 6.7 34.4 0 24 0 13.6 0 4.7 6.7 1.4 16z"
      fill="#ed2939"
    />
    <Path
      d="M0 24c0 2.8.5 5.5 1.4 8h45.2c.9-2.5 1.4-5.2 1.4-8s-.5-5.5-1.4-8H1.4C.5 18.5 0 21.2 0 24z"
      fill="#ffffff"
    />
    <Path
      d="M24 48c10.4 0 19.3-6.7 22.6-16H1.4C4.7 41.3 13.6 48 24 48z"
      fill="#ed2939"
    />
  </Svg>
);

export default AtSvg;
