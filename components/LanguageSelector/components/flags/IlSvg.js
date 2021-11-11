import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const IlSvg = props => (
  <Svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={24}
      cy={24}
      r={24}
      fill="#ffffff"
    />
    <Path
      d="M38 4.5H10c-2.4 1.7-4.4 3.9-6.1 6.3H44c-1.6-2.4-3.6-4.6-6-6.3zM43.9 37.4H4.1c1.7 2.5 3.8 4.6 6.2 6.3h27.5c2.4-1.7 4.5-3.9 6.1-6.3z"
      fill="#0038b8"
    />
    <Path
      d="M34.5 30h-7.1L24 35.8 20.7 30h-7l3.5-6.1-3.5-6h6.9l3.4-5.8 3.4 5.8h7.1L31 24l3.5 6zM24 33.1l2-3.3h-4l2 3.3zM22.1 18zm10 1.2h-3.9l1.9 3.4 2-3.4zM24 14.6l-2 3.3h4l-2-3.3zm-4.2 4.6h-3.9l2 3.4 1.9-3.4zm10.4 6.3l-1.9 3.3h3.9l-2-3.3zM18 25.4l-2 3.4h3.8L18 25.4zm8.6-6.3h-5.2L18.7 24l2.7 4.7 5 .1 3-4.8-2.8-4.9z"
      fill="#0038b8"
    />
  </Svg>
);

export default IlSvg;
