import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function AddSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M20 37V3M3 20h34"
        stroke={props.iconColor}
        strokeWidth={5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
