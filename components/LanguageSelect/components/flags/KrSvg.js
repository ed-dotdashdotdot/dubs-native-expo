import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const KrSvg = props => (
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
      d="M7.3 34.6l-2.6-3.9 1.4-1 2.6 3.9-1.4 1zm1-6.3l-1.4 1 5.7 8.6 1.4-1-5.7-8.6zm-5.8 3.8l5.7 8.6 1.4-1L4 31.2l-1.5.9zm5.3 3.2l2.6 3.9 1.4-1-2.6-3.9-1.4 1zM38.5 33.2l-1.4-1 2.6-3.9 1.4 1-2.6 3.9zm2.2 1.4l2.6-3.9-1.4-1-2.6 3.9 1.4 1zm.7.5l1.4 1 2.6-3.9-1.4-1-2.6 3.9zm-3.1 4.6l1.4 1 2.6-3.9-1.4-1-2.6 3.9zm-1.7-6.8l-2.6 4 1.4 1L38 34l-1.4-1.1zm2.2 1.5l-2.6 3.9 1.4 1 2.6-3.9-1.4-1zM36.6 15.1l-2.6-4 1.4-1L38 14l-1.4 1.1zm.5.7l2.6 3.9 1.4-1-2.6-3.9-1.4 1zm5.3-4.6l-2.6-3.9-1.4 1 2.6 3.9 1.4-1zm-6.2-1.5l5.7 8.6 1.4-1-5.7-8.6-1.4 1zm6.6 2.3l-1.4 1 2.6 3.9 1.4-1-2.6-3.9z M2.5 15.9l5.7-8.6 1.4 1L4 16.8l-1.5-.9zm2.2 1.4l5.7-8.6 1.4 1-5.7 8.6-1.4-1zm2.1 1.5l5.7-8.6 1.4 1-5.7 8.6-1.4-1z"
      fill="#000000"
    />
    <Path
      d="M15.4 18.3c3.2-4.7 9.6-6 14.3-2.9s6 9.6 2.9 14.3L15.4 18.3z"
      fill="#cd2e3a"
    />
    <Path
      d="M15.4 18.3c-3.2 4.7-1.9 11.1 2.9 14.3 4.7 3.2 11.1 1.9 14.3-2.9 1.6-2.4.9-5.6-1.4-7.2-2.4-1.5-5.6-.9-7.2 1.5l-8.6-5.7z"
      fill="#0f64cd"
    />
    <Circle 
      cx={19.7} 
      cy={21.1} 
      fill="#cd2e3a"
      r={5.2} 
    />
  </Svg>
);

export default KrSvg;
