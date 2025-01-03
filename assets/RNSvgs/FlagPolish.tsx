import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function FlagPolish(props: SvgProps) {
  return (
    <Svg
      width={40}
      height={24}
      viewBox="0 0 40 24"
      fill="none"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3,
      }}
      {...props}
    >
      <Path
        d="M0 2.5A2.5 2.5 0 012.5 0h35A2.5 2.5 0 0140 2.5V12H0V2.5z"
        fill="#fff"
      />
      <Path
        d="M0 12h40v9.5a2.5 2.5 0 01-2.5 2.5h-35A2.5 2.5 0 010 21.5V12z"
        fill="#D11414"
      />
    </Svg>
  );
}
