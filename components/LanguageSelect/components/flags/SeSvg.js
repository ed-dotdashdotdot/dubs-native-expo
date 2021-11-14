import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SeSvg = props => (
  <Svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    {...props}
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#006aa8" 
      r={24} 
    />
    <Path
      d="M22.2 19.2V.1c-3.5.3-6.7 1.3-9.6 2.8v16.3H.5C.2 20.7 0 22.4 0 24s.2 3.3.5 4.8h12.1v16.3c2.9 1.6 6.1 2.6 9.6 2.8V28.8h25.4c.3-1.5.5-3.2.5-4.8s-.2-3.3-.5-4.8H22.2z"
      fill="#fecd00"
    />
  </Svg>
);

export default SeSvg;
