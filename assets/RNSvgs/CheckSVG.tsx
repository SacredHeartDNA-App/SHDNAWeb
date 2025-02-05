import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function CheckSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={50} height={40} viewBox="0 0 50 40" fill="none" {...props}>
      <Path
        d="M4.545 21.539l11.786 13.527c.591.68 1.55.68 2.142 0L45.258 4.322"
        stroke={props.iconcolor}
        strokeWidth={7}
        strokeLinecap="round"
      />
    </Svg>
  );
}
