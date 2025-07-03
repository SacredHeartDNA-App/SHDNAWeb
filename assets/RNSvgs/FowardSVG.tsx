import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function FowardSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={28} height={19} viewBox="0 0 28 19" fill="none" {...props}>
      <Path
        d="M26.958 11.217c1.3-.776 1.3-2.658 0-3.434L14.734.482c-1.333-.796-3.026.164-3.026 1.717V16.8c0 1.553 1.693 2.514 3.026 1.717l12.224-7.3z"
        fill={props.iconcolor}
      />
      <Path
        d="M15.292 11.217c1.299-.776 1.299-2.658 0-3.434L3.067.482C1.734-.314.042.646.042 2.199V16.8c0 1.553 1.692 2.514 3.025 1.717l12.225-7.3z"
        fill={props.iconcolor}
      />
    </Svg>
  );
}

export default FowardSVG;
