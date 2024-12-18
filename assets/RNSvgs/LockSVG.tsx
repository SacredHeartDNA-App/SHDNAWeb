import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function LockSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V20a5 5 0 00-5-5H13zm10 9a3.001 3.001 0 01-2.06 2.85l1.658 5.025h-5.196l1.658-5.025A3.001 3.001 0 1123 24z"
        fill={props.iconColor}
      />
      <Path
        d="M26.5 9v21a6.5 6.5 0 11-13 0V9a6.5 6.5 0 1113 0z"
        stroke={props.iconColor}
        strokeWidth={4}
      />
    </Svg>
  );
}
