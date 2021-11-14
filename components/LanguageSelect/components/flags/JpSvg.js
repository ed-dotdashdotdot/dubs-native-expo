import React from "react";
import Svg, { Circle } from "react-native-svg";

const JpSvg = props => (
  <Svg
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    { ...props }
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#ffffff" 
      r={24} 
    />
    <Circle 
      cx={24} 
      cy={24} 
      fill="#be0029" 
      r={12} 
    />
  </Svg>
);

export default JpSvg;
