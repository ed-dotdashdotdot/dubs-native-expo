import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const CnSvg = props => (
  <Svg
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    { ...props }
  >
    <Circle 
      fill="#de2910"
      r={24} 
      cx={24} 
      cy={24} 
    />
    <Path
      d="M16.4 16.1l4.5-2.9h-5.5l-1.7-5.1-1.8 5.1H6.6l4.1 2.9-2 4.9 4.9-2.9 4.5 2.9zM26.5 9l1.8-.4-1.8-.9.1-1.7-1.1 1.3-1.6-.9 1 1.6-1.3 1.4 1.9-.3.8 1.4zM30.9 13.9l1.7.5-1.2-1.4.7-1.8-1.5.9-1.2-1.4.3 1.8-1.5.9 1.7.3.3 1.8zM31.3 20.5l1.4-1.2H31l-.6-1.7-.5 1.9h-1.7l1.4 1.1-.4 1.7 1.2-1.1 1.5 1.1zM26.3 25.6l1.9-.6-1.7-.6.1-1.8-1.1 1.4-1.6-.5.9 1.5-1.2 1.3 1.6-.4 1 1.5z"
      fill='#ffde00'
    />
  </Svg>
);

export default CnSvg;
