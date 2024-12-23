import * as React from "react";
import Svg, {
  Path,
  Defs,
  RadialGradient,
  Stop,
  SvgProps,
} from "react-native-svg";
import { SVGType } from "./HomeSVG";

const LoadingSVG = (props: SVGType & SvgProps) => (
  <Svg width={200} height={200} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={30}
      d="M185 100a84.998 84.998 0 0 1-101.583 83.367A84.999 84.999 0 0 1 21.47 67.472 85 85 0 0 1 100 15"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-6.843 886.323 -786.323) scale(100.717)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.115} stopColor={props.iconcolor} stopOpacity={0} />
        <Stop offset={0.78} stopColor={props.iconcolor} />
        <Stop offset={0.96} stopColor={props.iconcolor} stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default LoadingSVG;
