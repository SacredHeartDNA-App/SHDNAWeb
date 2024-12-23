import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function HeartStroke(props: SVGType & SvgProps) {
  return (
    <Svg width={44} height={40} viewBox="0 0 44 40" fill="none" {...props}>
      <Path
        d="M18.883 4.414c1.275.927 2.493 2.137 3.209 3.543a10 10 0 1116.98 10.446L21.912 37.5 4.895 18.358A10 10 0 0118.883 4.414z"
        stroke={props.iconcolor}
        strokeWidth={5}
        strokeMiterlimit={2.61313}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartStroke;
