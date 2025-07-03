import * as React from "react";
import Svg, { Path, SvgProps, Rect } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function MicrophoneSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={24} height={41} viewBox="0 0 24 41" fill="none" {...props}>
      <Rect x={5} width={14} height={28} rx={7} fill={props.iconcolor} />
      <Path
        d="M1 16v6c0 5.523 4.477 10 10 10h2c5.523 0 10-4.477 10-10v-6"
        stroke={props.iconcolor}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path d="M12 32v8" stroke={props.iconcolor} strokeWidth={2} />
      <Path
        d="M7 40h10"
        stroke={props.iconcolor}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default MicrophoneSVG;
