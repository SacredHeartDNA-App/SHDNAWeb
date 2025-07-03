import React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

export default function DefaultProfilePic(props: SVGType & SvgProps) {
  return (
    <Svg width={60} height={60} viewBox="0 0 60 60" fill="none" {...props}>
      <Path fill="#BBB" d="M0 0H60V60H0z" />
      <Circle cx={29.9138} cy={20.7348} r={10.7348} fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.287 32.26c-.642-.451-1.479-.585-2.168-.209a20.443 20.443 0 00-4.664 3.49c-3.36 3.36-4.252 7.77-4.422 12.46C10.993 49.103 11.895 50 13 50h33.828c1.104 0 2.006-.896 1.966-2-.17-4.688-1.061-9.098-4.422-12.459a20.44 20.44 0 00-4.664-3.49c-.689-.376-1.525-.242-2.168.209a13.229 13.229 0 01-7.626 2.404 13.23 13.23 0 01-7.627-2.404z"
        fill="#fff"
      />
    </Svg>
  );
}
