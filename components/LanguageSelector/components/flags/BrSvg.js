import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const BrSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#009c3b" 
      r={24} 
    />
    <Path
      d="M24.5 38L46 24 24.4 10 2.7 24.1 24.5 38z"
      fill="#ffdf00"
    />
    <Circle 
      cx={24} 
      cy={24} 
      fill="#002776"
      r={9.2} 
    />
    <Path
      d="M33.2 23.6c-4.6-3.9-9.8-6-16.1-5.7-.4.5-.8 1-1.1 1.5 6.3-.6 12.5 1.5 17.1 5.9.1-.4.1-.9.1-1.3v-.4z"
      fill="#ffffff"
    />
  </Svg>
);

export default BrSvg;
