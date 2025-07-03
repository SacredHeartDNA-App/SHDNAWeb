import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function ReplaySVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={41} viewBox="0 0 40 41" fill="none" {...props}>
      <Path
        d="M3.83 11.5c1.83-3.169 4.125-5.974 7.406-7.592a18.5 18.5 0 11-1.067 32.614M3.83 11.5L11 10m-7.17 1.5L2 5"
        stroke={props.iconcolor}
        strokeWidth={4}
        strokeMiterlimit={16}
        strokeLinecap="round"
      />
      <Path
        d="M28.482 21.408c.69-.397.69-1.42 0-1.816l-12.98-7.459c-.673-.386-1.502.115-1.502.908V27.96c0 .793.829 1.294 1.502.908l12.98-7.46z"
        fill={props.iconcolor}
      />
    </Svg>
  );
}

export default ReplaySVG;
