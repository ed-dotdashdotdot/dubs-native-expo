import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const ChSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#ff0000" 
      r={24} 
    />
    <Path
      d="M39 19.5H28.5V9h-9v10.5H9v9h10.5V39h9V28.5H39z"
      fill="#ffffff"
    />
  </Svg>
);

export default ChSvg;
