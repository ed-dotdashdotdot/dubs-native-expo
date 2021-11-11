import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SgSvg = props => (
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
    <Path
      d="M24 0C10.7 0 0 10.7 0 24h48C48 10.7 37.3 0 24 0z"
      fill="#ee2536"
    />
    <Path
      d="M19.4 4c-4.6 1-7.5 5.5-6.5 10 .7 3.3 3.3 5.8 6.6 6.5-4.6 1.3-9.3-1.3-10.7-5.8S10.1 5.4 14.7 4c1.5-.4 3.2-.4 4.7 0z"
      fill="#ffffff"
    />
    <Path
      d="M16.5 11l-1.3-.9h1.6l.5-1.5.5 1.5h1.6l-1.3.9.5 1.5-1.3-.9-1.3.9.5-1.5zm1.8 5.2l-1.3-.9h1.6l.5-1.5.5 1.5h1.6l-1.3.9.5 1.5-1.3-.9-1.3.9.5-1.5zm5.8 0l-1.3-.9h1.6l.5-1.5.5 1.5H27l-1.3.9.5 1.5-1.3-.9-1.3.9.5-1.5zm1.7-5.2l-1.3-.9h1.6l.5-1.5.5 1.5h1.6l-1.2.9.5 1.5-1.3-.9-1.3.9.4-1.5zm-4.6-3.4l-1.3-.9h1.6l.5-1.6.5 1.5h1.6l-1.3.9.5 1.5-1.3-.8-1.3.9.5-1.5z"
      fill="#ffffff"
    />
  </Svg>
);

export default SgSvg;
