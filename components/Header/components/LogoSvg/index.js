import React from "react";
import Svg, { Path } from "react-native-svg";

import { colours } from '../../../../configuration/config.json';

const LogoSvg = props => {
  const { 
    lineColour, 
    textColour 
  } = { ...props };
  return (
    <Svg
      id="prefix__Layer_1"
      viewBox="0 0 192 48"
      x={0}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      y={0}
    >
      <Path 
        d="M12 47C5.9 47 1 42.1 1 36V12C1 5.9 5.9 1 12 1h168c6.1 0 11 4.9 11 11v24c0 6.1-4.9 11-11 11H12z" 
        fill="black" 
      />
      <Path
        className="prefix__st0"
        d="M180 2c5.5 0 10 4.5 10 10v24c0 5.5-4.5 10-10 10H12C6.5 46 2 41.5 2 36V12C2 6.5 6.5 2 12 2h168m0-2H12C5.4 0 0 5.4 0 12v24c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12z"
        fill={lineColour}
      />
      <Path
        className="prefix__st0"
        d="M47 0h2v48h-2zM95 0h2v48h-2zM143 0h2v48h-2z"
        fill={lineColour}
      />
      <Path
        className="prefix__st0"
        d="M172.4 13.4c.2-.4.4-.6.6-.8.2-.1.6-.2 1-.2.7 0 1.1.1 1.3.4.2.2.3.8.3 1.5l.1 3.4v.2c0 .7-.1 1.2-.4 1.5-.3.3-.7.4-1.4.4-.8 0-1.5-.4-1.9-1.3-.1-.1-.1-.2-.1-.3-.4-.7-.9-1.3-1.5-1.6-.6-.4-1.4-.6-2.2-.6-1.1 0-1.9.2-2.6.7-.7.5-1 1.1-1 1.9 0 1.1 1.5 1.9 4.5 2.6.5.1.9.2 1.2.2 2.2.5 3.9 1.2 4.9 2.2s1.5 2.4 1.5 4.1c0 2.2-.7 3.8-2.2 5-1.5 1.2-3.6 1.8-6.3 1.8-1.1 0-2-.1-2.9-.2-.8-.1-1.7-.4-2.4-.7-.2.3-.4.5-.7.7-.2.1-.6.2-1 .2-.7 0-1.2-.1-1.6-.4-.3-.3-.4-.8-.5-1.5l-.1-4.1v-.2c0-.8.1-1.3.4-1.6.3-.3.8-.5 1.5-.5.8 0 1.4.6 1.9 1.7.1.3.2.5.3.6.5.9 1.1 1.6 1.9 2 .8.5 1.8.7 3 .7 1.1 0 1.9-.2 2.5-.7.6-.4.9-1.1.9-1.9 0-1.2-1.4-2.2-4.1-2.8-.8-.2-1.4-.4-1.9-.5-2.3-.6-3.9-1.3-4.7-2.2-.9-.9-1.3-2.1-1.3-3.7 0-2 .8-3.6 2.3-4.9s3.5-1.9 5.8-1.9c.8 0 1.6.1 2.3.2 1.1 0 1.8.3 2.6.6zM125.9 22.8c1.3.5 2.2 1.1 2.8 1.9.6.8.9 1.8.9 3.1 0 1.1-.3 2-.8 2.9s-1.2 1.6-2.2 2.2c-.6.3-1.2.6-1.9.7-.7.1-1.7.2-3 .2h-9.2c-.8 0-1.3-.2-1.7-.5-.3-.3-.5-.8-.5-1.5 0-.6.2-1.1.5-1.4s.8-.5 1.4-.5h.3v-13h-.3c-.6 0-1.1-.2-1.4-.5s-.5-.8-.5-1.4c0-.7.2-1.2.5-1.5s.9-.5 1.7-.5h8.1c2.5 0 4.3.5 5.6 1.4s1.9 2.4 1.9 4.2c0 .9-.2 1.7-.6 2.4-.3.8-.8 1.3-1.6 1.8zm-9-6v4.4h2.4c1.4 0 2.5-.2 3-.5.6-.3.9-.9.9-1.7 0-.8-.3-1.3-.8-1.7-.5-.3-1.4-.5-2.6-.5h-2.9zm0 7.9v5.4h2.6c1.9 0 3.2-.2 3.9-.6.8-.4 1.1-1.1 1.1-2.1s-.4-1.7-1.1-2.1-2-.6-3.8-.6h-2.7zM68.4 16.9v9.2c0 1.6.3 2.8.8 3.5.6.7 1.5 1 2.8 1s2.3-.4 2.8-1c.6-.7.9-1.9.9-3.5v-9.2h-.3c-.6 0-1.1-.2-1.4-.5s-.5-.8-.5-1.4c0-.7.2-1.2.5-1.5s.9-.5 1.7-.5h4.4c.8 0 1.4.2 1.7.5.3.3.5.8.5 1.5 0 .6-.2 1.1-.5 1.4s-.8.5-1.4.5h-.3V26c0 3-.6 5.1-1.9 6.4-1.3 1.3-3.3 2-6.1 2-2.9 0-5.1-.7-6.3-1.9-1.3-1.3-1.9-3.4-1.9-6.4V17h-.3c-.6 0-1.1-.2-1.4-.5-.3-.3-.5-.8-.5-1.4 0-.7.2-1.2.5-1.5.4-.3.9-.5 1.7-.5h4.5c.8 0 1.3.1 1.7.5.3.3.5.8.5 1.5 0 .6-.2 1.1-.5 1.4s-.8.5-1.4.5l-.3-.1zM16.6 30V16.9h-.3c-.6 0-1.1-.2-1.4-.5-.3-.3-.5-.8-.5-1.4 0-.7.2-1.2.5-1.5s.9-.5 1.7-.5h4.3c2.5 0 4.2.1 5.4.3 1.1.2 2.1.6 2.9 1.1 1.4.8 2.5 2 3.3 3.6.8 1.6 1.1 3.4 1.1 5.4 0 2.2-.4 4.1-1.3 5.7-.9 1.6-2.1 2.9-3.7 3.7-.7.4-1.5.6-2.5.8s-2.4.2-4.3.2h-5.3c-.8 0-1.4-.2-1.7-.5s-.5-.8-.5-1.5c0-.6.2-1.1.5-1.4s.8-.5 1.4-.5l.4.1zm4.5-13.2V30h1c2.2 0 3.8-.5 4.9-1.6 1-1.1 1.6-2.8 1.6-5s-.5-3.9-1.6-5-2.7-1.6-4.8-1.6h-1.1z"
        fill={textColour}
      />
    </Svg>
  );
};

LogoSvg.defaultProps = {
  lineColour: colours.white,
  textColour: colours.white,
}

export default LogoSvg;
