import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function Burger(props: SVGType & SvgProps) {
  return (
    <Svg width={39} height={30} viewBox="0 0 39 30" fill="none" {...props}>
      <Path
        d="M2 15h35M2 28h35M2 2h35"
        stroke={props.iconcolor}
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  );
}
