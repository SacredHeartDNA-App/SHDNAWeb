import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function MinusSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 39 4" fill="none" {...props}>
      <Path
        d="M2 2h35" // Single horizontal line
        stroke={props.iconcolor}
        strokeWidth={5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
