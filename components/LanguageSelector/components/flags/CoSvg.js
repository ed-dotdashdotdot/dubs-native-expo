import React from "react";
import Svg, { Path } from "react-native-svg";

const CoSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Path
      d="M24 0C10.7 0 0 10.7 0 24h48C48 10.7 37.3 0 24 0z"
      fill="#fcd116"
    />
    <Path
      d="M3.2 36h41.6c2-3.5 3.2-7.6 3.2-12H0c0 4.4 1.2 8.5 3.2 12z"
      fill="#003893"
    />
    <Path
      d="M24 48c8.9 0 16.6-4.8 20.8-12H3.2C7.4 43.2 15.1 48 24 48z"
      fill="#ce1126"
    />
  </Svg>
);

export default CoSvg;
