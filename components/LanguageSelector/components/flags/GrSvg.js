import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const GrSvg = props => (
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
      d="M4.1 37.4h39.8c1.1-1.6 2-3.4 2.7-5.3H1.4c.7 1.9 1.6 3.6 2.7 5.3zM24 48c5.7 0 10.9-2 15-5.3H9C13.1 46 18.3 48 24 48zM26.7 16h19.9c-.7-1.9-1.6-3.7-2.7-5.3H26.7V16zM26.7 21.4v5.3h21.1c.1-.9.2-1.8.2-2.7 0-.9 0-1.8-.1-2.6H26.7zM39.1 5.3C35.6 2.5 31.4.6 26.7.1v5.2h12.4z"
      fill="#001489"
    />
    <Path
      d="M10.7 16H1.4C.5 18.5 0 21.2 0 24c0 .9.1 1.8.2 2.7h10.5V16zM10.7 4C8.1 5.8 5.8 8 4 10.7h6.7V4zM26.7 16H16v10.7h10.7V16"
      fill="#001489"
    />
    <Path
      d="M26.7 10.7V.2C25.8.1 24.9 0 24 0c-2.8 0-5.5.5-8 1.4v9.3h10.7"
      fill="#001489"
    />
  </Svg>
);

export default GrSvg;
