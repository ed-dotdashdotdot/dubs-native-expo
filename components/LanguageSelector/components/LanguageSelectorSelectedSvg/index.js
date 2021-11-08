import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';

import { colours } from '../../../../configuration/config.json';

const LanguageSelectorSelectedSvg = props => {
  const { colour, show } = { ...props };
  return show ? (
    <Svg
      viewBox="0 0 16 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path 
        d="M8 8l8-8H0l8 8z"
        fill={colour}
      />
    </Svg>
  ) : null;
};

LanguageSelectorSelectedSvg.defaultProps = {
  colour: colours.white,
  show: false,
};

LanguageSelectorSelectedSvg.propTypes = {
  colour: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

export default LanguageSelectorSelectedSvg;
