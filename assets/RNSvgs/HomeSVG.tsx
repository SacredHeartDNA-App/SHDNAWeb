import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export type SVGType = {
  iconColor?: string;
};

const HomeSVG = (props: SVGType & SvgProps) => (
  <Svg width={42} height={40} fill="none" {...props}>
    <Path
      fill={props.iconColor}
      fillRule="evenodd"
      d="M7.128 17.436a2 2 0 0 0-2 2V38a2 2 0 0 0 2 2h8.257v-9.876a2 2 0 0 1 2-2h5.23a2 2 0 0 1 2 2V40h9.282a2 2 0 0 0 2-2V19.436a2 2 0 0 0-2-2H7.128Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.iconColor}
      d="M18.859.612c.891-.816 2.416-.816 3.308 0l18.256 16.706c1.333 1.219.31 3.195-1.654 3.195H2.256c-1.963 0-2.986-1.976-1.654-3.195L18.86.612Z"
    />
  </Svg>
);
export default HomeSVG;
