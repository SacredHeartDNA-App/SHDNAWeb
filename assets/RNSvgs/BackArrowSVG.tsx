import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

const BackArrowSVG = (props: SVGType & SvgProps) => (
  <Svg width={22} height={36} fill="none" {...props}>
    <Path
      stroke={props.iconcolor}
      strokeLinecap="round"
      strokeWidth={5}
      d="M18.8 33.2 4.4 18 18.8 2.8"
    />
  </Svg>
);

export default BackArrowSVG;
