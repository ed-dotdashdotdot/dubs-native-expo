import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const IsSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle
      cx={24}
      cy={24}
      fill="#02529c"
      r={24}
    />
    <Path
      d="M47.4 29.3c.4-1.7.6-3.5.6-5.3s-.2-3.6-.6-5.3H20.9V.2c-3.9.5-7.6 2-10.7 4.2v14.2H.6C.2 20.3 0 22.1 0 24c0 1.8.2 3.6.6 5.3h9.6v14.3c3.1 2.2 6.8 3.7 10.7 4.2V29.3h26.5z"
      fill="#ffffff"
    />
    <Path
      d="M47.8 26.7c.1-.9.2-1.8.2-2.7 0-.9-.1-1.8-.2-2.7H18.2V.7c-1.9.5-3.6 1.1-5.3 2v18.6H.2c-.1.9-.2 1.8-.2 2.7s.1 1.8.2 2.7h12.6v18.5c1.7.9 3.4 1.6 5.3 2V26.7h29.7z"
      fill="#dc1e35"
    />
  </Svg>
);

export default IsSvg;
