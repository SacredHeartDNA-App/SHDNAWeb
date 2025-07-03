import * as React from "react";
import Svg, { Rect, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function PauseSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Rect x={25} width={15} height={40} rx={5} fill={props.iconcolor} />
      <Rect width={15} height={40} rx={5} fill={props.iconcolor} />
    </Svg>
  );
}

export default PauseSVG;
