import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function Cross(props: SVGType & SvgProps) {
  return (
    <Svg width={31} height={31} viewBox="0 0 31 31" fill="none" {...props}>
      <Path
        d="M3 3l25.456 25.456M3 28L28.456 2.544"
        stroke={props.iconColor}
        strokeWidth={5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
