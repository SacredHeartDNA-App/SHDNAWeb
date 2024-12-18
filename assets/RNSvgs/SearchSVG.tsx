import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

const SearchSVG = (props: SVGType & SvgProps) => (
  <Svg width={31} height={35} fill="none" {...props}>
    <Circle
      cx={12.5}
      cy={12.5}
      r={10.5}
      stroke={props.iconColor}
      strokeWidth={4}
    />
    <Path
      stroke={props.iconColor}
      strokeLinecap="round"
      strokeWidth={4}
      d="m28.174 31.887-9.287-10.061"
    />
  </Svg>
);

export default SearchSVG;
