import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function HeartFill(props: SVGType & SvgProps) {
  return (
    <Svg width={44} height={40} viewBox="0 0 44 40" fill="none" {...props}>
      <Path
        d="M18.448 2.632c1.421 1.034 2.778 2.382 3.576 3.948a11.143 11.143 0 1118.92 11.64L21.823 39.5 2.862 18.17A11.143 11.143 0 0118.448 2.632z"
        fill={props.iconcolor}
        stroke={props.iconcolor}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartFill;
