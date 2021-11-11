import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const ClSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#ffffff" 
      r={24} 
    />
    <Path
      d="M24 0C10.7 0 0 10.7 0 24h24V0zm-8.3 17.9L12 15.2 8.3 18l1.4-4.6L6 10.6h4.6L12 6l1.4 4.5H18l-3.7 2.9 1.4 4.5z"
      fill="#0036a7"
    />
    <Path
      d="M48 25.2V24H0c0 12.9 10.1 23.3 22.8 24h2.4c12.3-.6 22.2-10.5 22.8-22.8z"
      fill="#d62718"
    />
  </Svg>
);

export default ClSvg;
