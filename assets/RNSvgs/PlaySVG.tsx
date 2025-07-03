import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function PlaySVG(props: SVGType & SvgProps) {
  return (
    <Svg width={36} height={40} viewBox="0 0 36 40" fill="none" {...props}>
      <Path
        d="M34.758 22.136c1.656-.933 1.656-3.339 0-4.272L3.605.314C1.989-.596 0 .583 0 2.45v35.1c0 1.867 1.99 3.046 3.605 2.136l31.152-17.55z"
        fill={props.iconcolor}
      />
    </Svg>
  );
}

export default PlaySVG;
