import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const VnSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle
      cx={24}
      cy={24}
      fill="#da251d"
      r={24}
    />
    <Path
      d="M36.1 40.3l-11.6-8.7-11.6 8.8 4.3-14.2-11.6-8.8 14.3-.1 4.4-14.2 4.5 14.2h14.3l-11.5 8.9 4.5 14.1z"
      fill="#ffff00"
    />
  </Svg>
);

export default VnSvg;
