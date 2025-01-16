import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function EditSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={36} height={30} viewBox="0 0 36 40" fill="none" {...props}>
      <Path
        d="M18 9H6.003A4.002 4.002 0 002 13v22a4 4 0 004 4h17a4 4 0 004-4V19"
        stroke={props.iconcolor}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path
        d="M30.64.766a1 1 0 011.41-.123l2.298 1.928a1 1 0 01.123 1.409l-1.768 2.107-3.83-3.214L30.641.766zM28.07 3.83l3.83 3.214L19.687 21.6a1 1 0 01-1.409.123l-2.298-1.928a1 1 0 01-.123-1.409L28.07 3.83zM17.883 23.022l-3.115-2.613a.25.25 0 00-.409.164l-.403 3.643a.25.25 0 00.319.267l3.517-1.03a.25.25 0 00.09-.43z"
        fill={props.iconcolor}
      />
    </Svg>
  );
}
