import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const EnSvg = props => (
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
      d="M9.4 43c2.4 1.9 5.3 3.3 8.3 4.1V34.7L9.4 43zM43 38.6c1.9-2.4 3.3-5.3 4.1-8.3H34.7l8.3 8.3zM30.3 47.2c3.1-.8 5.9-2.3 8.3-4.1l-8.3-8.3v12.4zM17.7.8c-3.1.9-5.9 2.3-8.3 4.2l8.3 8.3V.8zM.8 30.3c.8 3.1 2.3 5.9 4.1 8.3l8.3-8.3H.8zM47.2 17.7c-.8-3.1-2.3-5.9-4.1-8.3l-8.3 8.3h12.4zM38.6 5c-2.4-1.9-5.3-3.3-8.3-4.1v12.5L38.6 5zM5 9.4c-1.9 2.4-3.3 5.3-4.1 8.3h12.5L5 9.4z"
      fill="#012169"
    />
    <Path
      d="M27.1 20.8V.2c-1-.1-2-.2-3.1-.2s-2.1.1-3.1.2v20.7H.2c-.1 1-.2 2-.2 3.1s.1 2.2.2 3.2h20.7v20.6c1 .1 2 .2 3.1.2s2.2-.1 3.2-.2V27.1h20.6c.1-1 .2-2 .2-3.1s-.1-2.2-.2-3.2H27.1z"
      fill="#c8102e"
    />
    <Path
      d="M33.2 30.3h-2.9L41 41c.5-.5.9-1 1.4-1.5l-9.2-9.2zM8.5 42.4l9.2-9.2v-2.9L7 41c.5.5 1 .9 1.5 1.4zM5.6 8.5l9.2 9.2h3L7 7c-.4.5-.9 1-1.4 1.5zM39.5 5.6l-9.2 9.2v3L41 7c-.5-.4-1-.9-1.5-1.4z"
      fill="#c8102e"
    />
  </Svg>
);

export default EnSvg;