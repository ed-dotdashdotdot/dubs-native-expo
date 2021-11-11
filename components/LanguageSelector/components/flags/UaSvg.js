import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const UaSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#ffd600" 
      r={24} 
    />
    <Path
      d="M24 0C10.7 0 0 10.7 0 24h48C48 10.7 37.3 0 24 0z"
      fill="#005bbc"
    />
  </Svg>
);

export default UaSvg;
