import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

const ArrowSVG = (props: SVGType & SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill={props.iconcolor}
      d="M7 20a2 2 0 1 0 0 4v-4Zm32.414 3.414a2 2 0 0 0 0-2.828L26.686 7.858a2 2 0 1 0-2.828 2.828L35.172 22 23.858 33.314a2 2 0 1 0 2.828 2.828l12.728-12.728ZM7 24h31v-4H7v4Z"
    />
  </Svg>
);

export default ArrowSVG;
