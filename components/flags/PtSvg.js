import * as React from "react"
import Svg, { Defs, Mask, Circle, G, Path } from "react-native-svg"

const PtSvg = props => (
  <Svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48" 
    {...props}
  >
    <Mask
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={48}
      height={48}
      id="prefix__b"
    >
      <Circle cx={24} cy={24} r={24} fill="#fff" filter="url(#prefix__a)" />
    </Mask>
    <G mask="url(#prefix__b)">
      <Path d="M15.7 0H0v48h15.7" fill="#6da544" />
      <Path d="M48 0H15.7v48H48V0z" fill="#d80027" />
      <Circle cx={15.7} cy={24} r={8.3} fill="#ffda44" />
      <Path
        d="M11 19.8V25c0 2.6 2.1 4.7 4.7 4.7s4.7-2.1 4.7-4.7v-5.2H11z"
        fill="#d80027"
      />
      <Path
        d="M15.7 26.6a1.58 1.58 0 01-1.6-1.6v-2h3.1v2c0 .9-.7 1.6-1.5 1.6z"
        fill="#eee"
      />
    </G>
  </Svg>
);

export default PtSvg;
