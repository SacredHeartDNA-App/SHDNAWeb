import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function FlagSpain(props: SvgProps) {
  return (
    <Svg width={40} height={24} viewBox="0 0 40 24" fill="none" {...props}>
      <Path
        d="M0 2.5A2.5 2.5 0 012.5 0h35A2.5 2.5 0 0140 2.5V7H0V2.5z"
        fill="#D11414"
      />
      <Path d="M0 7h40v10H0V7z" fill="#EBD402" />
      <Path
        d="M0 17h40v4.5a2.5 2.5 0 01-2.5 2.5h-35A2.5 2.5 0 010 21.5V17z"
        fill="#D11414"
      />
    </Svg>
  );
}
