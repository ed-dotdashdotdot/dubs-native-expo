import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const PtSvg = props => (
  <Svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 24c0 10.3 6.5 19.1 15.7 22.5v-45C6.5 4.9 0 13.7 0 24z"
      fill="#046a38"
    />
    <Path
      d="M24 0c-2.9 0-5.7.5-8.3 1.5v45c2.6 1 5.4 1.5 8.3 1.5 13.3 0 24-10.7 24-24S37.3 0 24 0z"
      fill="#da291c"
    />
    <Circle 
      cx={15.7} 
      cy={24} 
      fill="#ffe900" 
      r={8.3} 
    />
    <Path
      d="M11 19.8V25c0 2.6 2.1 4.7 4.7 4.7s4.7-2.1 4.7-4.7v-5.2H11z"
      fill="#da291c"
    />
    <Path
      d="M15.7 26.6c-.9 0-1.6-.7-1.6-1.6v-2h3.1v2c0 .9-.7 1.6-1.5 1.6z"
      fill="#ffffff"
    />
  </Svg>
);

export default PtSvg;
