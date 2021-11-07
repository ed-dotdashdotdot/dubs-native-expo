import React from "react"
import Svg, { Path } from "react-native-svg"

const LanguageSelectorSelectedSvg = props => {
  const { colour } = { ...props };
  return (
    <Svg
      viewBox="0 0 16 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path 
        d="M8 8l8-8H0l8 8z"
        fill={colour}
      />
    </Svg>
  );
};

export default LanguageSelectorSelectedSvg;
