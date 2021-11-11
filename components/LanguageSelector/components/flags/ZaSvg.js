import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const ZaSvg = props => (
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
      d="M14.4 24L1.6 15.4C.6 18.1 0 21 0 24s.6 5.9 1.6 8.6L14.4 24z" 
      fill="#000000"
    />
    <Path
      d="M12.3 44.9c3.4 1.9 7.4 3 11.7 3.1h.1c10.4 0 19.3-6.7 22.6-16H31.5L12.3 44.9z"
      fill="#002395"
    />
    <Path
      d="M31.5 16h15.2C43.3 6.7 34.5 0 24 0c-4.3 0-8.3 1.1-11.7 3.1L31.5 16z"
      fill="#de3831"
    />
    <Path
      d="M2.9 12.5c-.5.9-.9 1.9-1.3 2.9L14.4 24 1.6 32.6c.4 1 .8 1.9 1.3 2.9l17-11.5-17-11.5z"
      fill="#ffb612"
    />
    <Path
      d="M9.4 4.9c-2.7 2-4.9 4.6-6.5 7.6l17 11.5-17 11.5c1.6 3 3.8 5.6 6.5 7.6l21-14.2h17.1c.3-1.4.5-2.9.5-4.4v-1.1c0-1.5-.2-2.9-.5-4.4H30.4L9.4 4.9z"
      fill="#007a4d"
    />
  </Svg>
);

export default ZaSvg;
