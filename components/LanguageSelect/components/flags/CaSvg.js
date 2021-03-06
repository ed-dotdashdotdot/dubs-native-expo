import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const CaSvg = props => (
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
      d="M37.3 4v39.9C43.8 39.7 48 32.3 48 24S43.8 8.3 37.3 4zM29.2 27.6l4.6-3.8-.8-.3c-.7-.5.3-2.4.4-3.7 0 0-2.7.9-2.9.4l-.7-1.3-2.4 2.7c-.3.1-.4 0-.4-.3l1.1-5.6-1.8 1c-.1.1-.3 0-.4-.2l-1.7-3.4-1.8 3.6c-.1.1-.3.1-.4.1l-1.7-1 1 5.6c-.1.2-.3.3-.5.2l-2.3-2.7c-.3.5-.5 1.3-.9 1.5-.4.2-1.8-.3-2.7-.5.3 1.1 1.3 3 .7 3.6l-1 .3 4.6 4c.4 1-.1 1.3-.4 1.9l5-.6-.1 5h1l-.2-5 5 .6c-.3-.7-.6-1.1-.3-2.1zM0 24c0 8.8 4.8 16.5 11.8 20.7V3.3C4.8 7.5 0 15.2 0 24z"
      fill="#ff0000"
    />
  </Svg>
);

export default CaSvg;
