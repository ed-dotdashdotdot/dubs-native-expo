import React from "react";
import Svg, { Path } from "react-native-svg";

const TrSvg = props => (
  <Svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25.6 0C38 0 48 10 48 22.4V24c0 13.3-10.7 24-24 24h-1.6C10 48 0 38 0 25.6 0 11.5 11.5 0 25.6 0z"
      fill="#c8102e"
    />
    <Path
      d="M23.6 34.3c-5.4 0-9.8-4.3-9.8-9.6s4.4-9.6 9.8-9.6c2.9 0 5.5 1.2 7.3 3.2-2.2-3.4-6-5.6-10.4-5.6-6.7 0-12.2 5.4-12.2 12s5.5 12 12.2 12c4.3 0 8.1-2.2 10.3-5.6-1.8 2-4.4 3.2-7.2 3.2zM35.1 19.1l-.1 4.5-4.1 1.1 4.1 1.5-.1 4.1 2.7-3.2 4 1.4-2.4-3.5 2.8-3.4-4.3 1.2-2.6-3.7z"
      fill="#ffffff"
    />
  </Svg>
);

export default TrSvg;
