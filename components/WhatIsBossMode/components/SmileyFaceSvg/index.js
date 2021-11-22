import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import PropTypes from 'prop-types';

import { 
  colours 
} from '../../../../configuration/config.json';

const SmileyFaceSvg = props => {
  const { 
    colourFace, 
    colourFeatures,
  } = { ...props };
  return (
    <Svg 
      viewBox="0 0 48 48" 
      xmlns="http://www.w3.org/2000/svg" 
      { ...props }
    >
      <Circle 
        cx={24} 
        cy={24} 
        fill={colourFace}
        r={24} 
      />
      <Path 
        d="M37.6 25.1c0 .3.1.8.1 1.1 0 5.7-6.2 10.3-13.7 10.3S10.3 32 10.3 26.3c0-.3 0-.8.1-1.1H8v.6c0 8.6 7.2 15.4 16 15.4s16-6.9 16-15.4v-.6h-2.4z" 
        fill={colourFeatures}
      />
      <Circle 
        cx={14.9} 
        cy={14.9} 
        fill={colourFeatures}
        r={4.6} 
      />
      <Circle 
        cx={33.1} 
        cy={14.9} 
        fill={colourFeatures}
        r={4.6} 
      />
    </Svg>
  );
};

SmileyFaceSvg.defaultProps = {
  colourFace: colours.yellow,
  colourFeatures: colours.black,
  height: 48, 
  width: 48,
};

SmileyFaceSvg.propTypes = {
  colourFace: PropTypes.string.isRequired,
  colourFeatures: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default SmileyFaceSvg;
