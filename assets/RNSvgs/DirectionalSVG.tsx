import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function DirectionalSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={23} height={40} viewBox="0 0 23 40" fill="none" {...props}>
      <Path
        d="M3 37l17-17M3 3l17 17"
        stroke={props.iconcolor}
        strokeWidth={5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default DirectionalSVG;
