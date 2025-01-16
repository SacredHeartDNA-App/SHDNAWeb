import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function LogOutSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M22 14.15V7a5 5 0 00-5-5H7a5 5 0 00-5 5v26a5 5 0 005 5h10a5 5 0 005-5v-6.925"
        stroke={props.iconcolor}
        strokeWidth={4.5}
      />
      <Path
        d="M15 20h23.5m0 0L30 12m8.5 8L30 28"
        stroke={props.iconcolor}
        strokeWidth={3.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
