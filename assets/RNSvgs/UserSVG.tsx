import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

const UserSVG = (props: SVGType & SvgProps) => (
  <Svg width={38} height={40} fill="none" {...props}>
    <Circle cx={18.914} cy={10.735} r={10.735} fill={props.iconcolor} />
    <Path
      fill={props.iconcolor}
      fillRule="evenodd"
      d="M11.287 22.26c-.642-.45-1.479-.585-2.168-.209a20.44 20.44 0 0 0-4.664 3.49c-3.36 3.361-4.252 7.77-4.422 12.46C-.007 39.103.895 40 2 40h33.828c1.104 0 2.006-.896 1.966-2-.17-4.688-1.061-9.098-4.422-12.458a20.44 20.44 0 0 0-4.664-3.49c-.689-.377-1.525-.243-2.168.208a13.23 13.23 0 0 1-7.626 2.404 13.23 13.23 0 0 1-7.627-2.404Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default UserSVG;
