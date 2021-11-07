import * as React from "react";
import Svg, {
  Defs,
  Path,
  Mask,
  Circle,
  G,
  Ellipse,
  Use,
} from "react-native-svg";

const EsSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 48"
    {...props}
  >
    <Defs>
      <Path
        id="prefix__c"
        d="M12 19.5h1.5c.4 0 .8.3.8.8 0 .4-.3.8-.8.8H12c-.4 0-.8-.3-.8-.8s.4-.8.8-.8z"
      />
      <Path
        id="prefix__d"
        d="M25.5 19.5H27c.4 0 .8.3.8.8 0 .4-.3.8-.8.8h-1.5c-.4 0-.8-.3-.8-.8.1-.5.4-.8.8-.8z"
      />
    </Defs>
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
      <Path d="M0 0h48v48H0V0z" fill="#d80027" />
      <Path d="M0 12h48v24H0V12z" fill="#ffda44" />
      <Path d="M13.5 28.5H12V21h1.5v7.5zm12 0H27V21h-1.5v7.5z" fill="#eee" />
      <Ellipse cx={19.5} cy={27.8} rx={4.5} ry={3} fill="#eee" />
      <Path
        d="M12.8 18c.4 0 .8.3.8.8v.8c0 .4-.3.8-.8.8-.4 0-.8-.3-.8-.8v-.8c0-.5.3-.8.8-.8zm13.4 0c.4 0 .8.3.8.8v.8c0 .4-.3.8-.8.8-.4 0-.8-.3-.8-.8v-.8c.1-.5.4-.8.8-.8zm-6.7 7.5v2.2a2.22 2.22 0 002.2 2.2 2.22 2.22 0 002.2-2.2v-2.2h-4.4z"
        fill="#d80027"
      />
      <Use xlinkHref="#prefix__c" fill="#ff9811" />
      <Use xlinkHref="#prefix__d" fill="#ff9811" />
      <Use xlinkHref="#prefix__c" y={9} fill="#ff9811" />
      <Use xlinkHref="#prefix__d" y={9} fill="#ff9811" />
      <Path
        d="M15 25.5v2.2c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-2.2H15z"
        fill="#ff9811"
      />
      <Path d="M11.4 23.6h16.1m-16.1 2.3H14m10.9 0h2.6" />
      <Path
        d="M11.4 23.2c-.2 0-.4.2-.4.4s.2.4.4.4h16.1c.2 0 .4-.2.4-.4s-.2-.4-.4-.4H11.4zm0 2.3c-.2 0-.4.2-.4.4s.2.4.4.4H14c.2 0 .4-.2.4-.4s-.2-.4-.4-.4h-2.6zm13.5 0c-.2 0-.4.2-.4.4s.2.4.4.4h2.6c.2 0 .4-.2.4-.4s-.2-.4-.4-.4h-2.6z"
        fill="#d80027"
      />
      <Path
        d="M18.4 15.8c-.7 0-1.2.5-1.4 1l-.5-.1a1.54 1.54 0 00-1.5 1.5 1.54 1.54 0 001.5 1.5 1.41 1.41 0 001.4-1c.6.2 1.2.1 1.6-.4.4.4 1 .6 1.6.4.3.8 1.1 1.2 1.9 1 .8-.3 1.2-1.1 1-1.9-.3-.8-1.1-1.2-1.9-1-.3-.8-1.2-1.2-1.9-.9-.2.1-.4.2-.6.4a1.58 1.58 0 00-1.2-.5zm0 .7c.5 0 .8.4.8.8 0 .5-.3.8-.8.8-.4 0-.8-.3-.8-.8 0-.4.4-.8.8-.8zm2.2 0c.5 0 .8.4.8.8 0 .5-.3.8-.8.8-.4 0-.8-.3-.8-.8.1-.4.4-.8.8-.8zm-4.1.9l.4.1.4.8c0 .4-.4.7-.8.7s-.8-.3-.8-.8c.1-.4.4-.8.8-.8zm6 0c.5 0 .8.4.8.8 0 .5-.3.8-.8.8-.4 0-.8-.3-.8-.7l.4-.8.4-.1z"
        fill="#eee"
      />
      <Path d="M18.8 15h1.5v3h-1.5v-3z" fill="#ff9811" />
      <Path d="M19.5 21H24v4.5h-4.5V21z" fill="#eee" />
      <Path
        d="M23.2 19.5l-.8.8h-6l-.8-.8c0-1.2 1.7-2.2 3.8-2.2s3.8 1 3.8 2.2zM15 21h4.5v4.5H15V21zm6.8.8c.5 0 .9.4.9.9v1.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-1.1c-.1-.5.3-.9.9-.9z"
        fill="#d80027"
      />
      <Defs></Defs>
      <Mask
        maskUnits="userSpaceOnUse"
        x={15.9}
        y={25.5}
        width={2.7}
        height={4.5}
        id="prefix__f"
      >
        <Path
          d="M15 25.5v2.2c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-2.2H15z"
          fill="#fff"
          filter="url(#prefix__e)"
        />
      </Mask>
      <G mask="url(#prefix__f)">
        <Path
          d="M15.9 25.5h.9V30h-.9v-4.5zm1.8 0h.9V30h-.9v-4.5z"
          fill="#d80027"
        />
      </G>
      <Path
        d="M15.8 21.8v.8h.8V24h-.8v.8h3V24H18v-1.5h.8v-.8h-3zm.7-1.6h6v.8h-6v-.8z"
        fill="#ff9811"
      />
      <Circle cx={17.4} cy={18.9} r={0.6} fill="#ffda44" />
      <Circle cx={19.5} cy={18.9} r={0.6} fill="#ffda44" />
      <Circle cx={21.6} cy={18.9} r={0.6} fill="#ffda44" />
      <Circle cx={19.5} cy={25.5} r={1.5} fill="#338af3" />
      <Use xlinkHref="#prefix__d" y={10.5} fill="#338af3" />
      <Use xlinkHref="#prefix__c" y={10.5} fill="#338af3" />
    </G>
  </Svg>
);

export default EsSvg;
