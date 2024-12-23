import React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function MoreSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Circle cx={20} cy={20} r={4} fill={props.iconcolor} />
      <Circle cx={4} cy={20} r={4} fill={props.iconcolor} />
      <Circle cx={35} cy={20} r={4} fill={props.iconcolor} />
    </Svg>
  );
}
