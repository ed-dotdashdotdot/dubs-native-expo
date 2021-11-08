import * as React from "react";
import Svg, {
  Path,
  Circle,
} from "react-native-svg";

const EsSvg = props => (
  <Svg 
    viewBox="0 0 48 48" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <Circle 
      cx={24} 
      cy={24} 
      fill="#aa151b" 
      r={24} 
    />
    <Path
      d="M3.2 12C1.2 15.5 0 19.6 0 24s1.2 8.5 3.2 12h41.6c2-3.5 3.2-7.6 3.2-12s-1.2-8.5-3.2-12H3.2z"
      fill="#f1bf00"
    />
  </Svg>
);

export default EsSvg;
