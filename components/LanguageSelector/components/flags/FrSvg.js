import React from "react";
import Svg, { Path } from "react-native-svg";

const FrSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Path
      d="M0 24c0 10.4 6.7 19.3 16 22.6V1.4C6.7 4.7 0 13.6 0 24z"
      fill="#EF4135"
    />
    <Path
      d="M24 0c-2.8 0-5.5.5-8 1.4v45.2c2.5.9 5.2 1.4 8 1.4s5.5-.5 8-1.4V1.4C29.5.5 26.8 0 24 0z"
      fill="#f4f5f0"
    />
    <Path
      d="M32 1.4v45.2c9.3-3.3 16-12.2 16-22.6S41.3 4.7 32 1.4z"
      fill="#0055A4"
    />
  </Svg>
);

export default FrSvg;
