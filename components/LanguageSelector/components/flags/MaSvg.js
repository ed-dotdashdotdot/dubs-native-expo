import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const MaSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#c1272d" 
      r={24} 
    />
    <Path
      d="M31.1 34L24 28.9 17 34l2.7-8.2-7.1-5.1h8.7l2.7-8.2 2.7 8.2h8.7l-7 5.1 2.7 8.2zm-9.9-7l-.9 2.6 2.1-1.5-1.2-1.1zm4.3.8l2.1 1.5-.9-2.6-1.2 1.1zm-3.7-2.7l2.2 1.7 2.2-1.7-.9-2.7h-2.9l-.6 2.7zm5.5-2.6l.4 1.5 2.1-1.5h-2.5zm-9.3 0l2.1 1.5.4-1.5H18zm5.1-1.9h1.6l-.7-2.5-.9 2.5z"
      fill="#006233"
    />
  </Svg>
);

export default MaSvg;
