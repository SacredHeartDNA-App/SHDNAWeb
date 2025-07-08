import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
import { SVGType } from "./HomeSVG";

const CheckUserSVG = (props: SVGType & SvgProps) => (
  <Svg width={45} height={45} viewBox="0 0 45 45" fill="none" {...props}>
    <Circle cx={18.9138} cy={10.7348} r={10.7348} fill={props.iconcolor} />
    <Path
      d="M26.54 22.26c.643-.45 1.48-.585 2.168-.209a20.44 20.44 0 013.054 2.043l-6.131 8.594-2.56-3.59L19 32.002l-4.071 2.904L18.564 40H2C.896 40-.007 39.104.033 38c.17-4.688 1.062-9.098 4.422-12.459a20.444 20.444 0 014.664-3.49c.69-.376 1.526-.242 2.168.21a13.232 13.232 0 007.627 2.403c2.838 0 5.467-.889 7.626-2.404zm10.791 11.246c.273 1.45.407 2.957.463 4.494.04 1.104-.862 2-1.967 2H32.7l4.632-6.494zm-25.306-2.67l2.905 4.07 8.14-5.808-2.903-4.07-8.142 5.807z"
      fill={props.iconcolor}
    />
    <Path
      d="M19 32.002l6.079 8.521c.305.428.8.428 1.105 0L40 21.156"
      stroke={props.iconcolor}
      strokeWidth={7}
      strokeLinecap="square"
    />
  </Svg>
);

export default CheckUserSVG;
