import React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function EyeClosedSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={11} viewBox="0 0 40 11" fill="none" {...props}>
      <Path
        d="M38 2c-2 4-8.059 7-18 7S3.5 6 2 2"
        stroke={props.iconColor}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
}
