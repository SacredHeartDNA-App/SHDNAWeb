import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

function BackwardsSVG(props: SVGType & SvgProps) {
  return (
    <Svg width={29} height={19} viewBox="0 0 29 19" fill="none" {...props}>
      <Path
        d="M1.875 11.217c-1.3-.776-1.3-2.658 0-3.434L14.1.482c1.333-.796 3.025.164 3.025 1.717V16.8c0 1.553-1.692 2.514-3.025 1.717l-12.225-7.3z"
        fill={props.iconcolor}
      />
      <Path
        d="M13.542 11.217c-1.3-.776-1.3-2.658 0-3.434L25.766.482c1.333-.796 3.026.164 3.026 1.717V16.8c0 1.553-1.693 2.514-3.026 1.717l-12.224-7.3z"
        fill={props.iconcolor}
      />
    </Svg>
  );
}

export default BackwardsSVG;
