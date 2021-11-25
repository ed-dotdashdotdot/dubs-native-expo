import React from "react";
import Svg, { Circle } from "react-native-svg";
import PropTypes from 'prop-types';

import { 
  colours 
} from '../../../../../configuration/config.json';

const MoreButtonSvg = ({ colour, ...props }) => (
  <Svg
    viewBox="0 0 480 480"
    xmlns="http://www.w3.org/2000/svg"
    { ...props }
  >
    <Circle 
      cx={240} 
      cy={240} 
      fill={colour} 
      r={36} 
    />
    <Circle 
      cx={114} 
      cy={240} 
      fill={colour} 
      r={36} 
    />
    <Circle 
      cx={366} 
      cy={240} 
      fill={colour} 
      r={36} 
    />
  </Svg>
);

MoreButtonSvg.defaultProps = {
  colour: colours.white,
};

MoreButtonSvg.propTypes = {
  colour: PropTypes.string.isRequired,
};

export default MoreButtonSvg;
