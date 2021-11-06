import * as React from "react"
import Svg, { Defs, Mask, Circle, G, Path } from "react-native-svg"

const EnSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    enableBackground="new 0 0 48 48"
    {...props}
  >
    <Defs></Defs>
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
      <Path
        d="M0 0h4.4l7.2 2 6.1-2h3.1L24 1.6 27.1 0h3.1l6.6 2.1L43.6 0h1.5l1.1.7L48 0v4.4l-1.9 7.3 1.9 6v3.1l-1.5 2.9 1.5 3.4v3.1l-1.4 6.4 1.4 6.9V45l-.7 1 .7 2h-4.4l-6.7-1.6-6.6 1.6h-3.1l-2.8-1.8-3.5 1.8h-3.1l-6-1.9L4.4 48H2.9l-1-.8L0 48v-4.4l2.1-7.4L0 30.3v-3.1l2.4-3L0 20.9v-3.1l2.1-6.1L0 4.4V2.9l.8-.7L0 0z"
        fill="#fff"
      />
      <Path
        d="M4.4 0l13.3 13.3V0H4.4zm25.9 0v13.3L43.6 0H30.3zM0 4.4v13.3h13.3L0 4.4zm48 0L34.7 17.7H48V4.4zM0 30.3v13.3l13.3-13.3H0zm34.7 0L48 43.6V30.3H34.7zm-17 4.4L4.4 48h13.3V34.7zm12.6 0V48h13.3L30.3 34.7z"
        fill="#012169"
      />
      <Path
        d="M20.9 0v20.9H0v6.3h20.9V48h6.3V27.1H48v-6.3H27.1V0h-6.2z"
        fill="#c8102e"
      />
      <Path
        d="M0 0v2.9l14.8 14.8h3L0 0zm45.1 0L30.3 14.8v3L48 0h-2.9zM17.7 30.3L0 48h2.9l14.8-14.8v-2.9zm12.6 0L48 48v-2.9L33.2 30.3h-2.9z"
        fill="#d80027"
      />
    </G>
  </Svg>
  );

export default EnSvg;
