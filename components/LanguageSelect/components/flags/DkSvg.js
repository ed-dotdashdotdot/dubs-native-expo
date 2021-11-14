import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const DkSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#c7042d" 
      r={24} 
    />
    <Path
      d="M47.8 27.4c.2-1.1.2-2.3.2-3.4s-.1-2.3-.2-3.4H20.4V.3c-2.4.4-4.7 1.1-6.9 2.1v18.2H.2C.1 21.7 0 22.8 0 24s.1 2.3.2 3.4h13.3v18.2c2.1 1 4.4 1.8 6.9 2.1V27.4h27.4z"
      fill="#ffffff"
    />
  </Svg>
);

export default DkSvg;
