import React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function EyeOpenSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={19} viewBox="0 0 40 19" fill="none" {...props}>
      <Path
        d="M38 11.6C38 6.298 29.941 2 20 2S2 6.298 2 11.6"
        stroke={props.iconColor}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Circle cx={20} cy={13} r={6} fill={props.iconColor} />
    </Svg>
  );
}
