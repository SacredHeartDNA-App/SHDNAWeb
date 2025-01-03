import { View, Text } from "react-native";
import React from "react";
import { SVGType } from "./HomeSVG";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

export default function TranslateGraySVG(props: SVGType & SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <Path
        d="M15 18a3 3 0 013-3h19a3 3 0 013 3v19a3 3 0 01-3 3H18a3 3 0 01-3-3V18z"
        fill={props.iconcolor}
      />
      <Path
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        d="M19.5 24.5L35.5 24.5"
      />
      <Path
        d="M23 25s5.751 9.462 11 11M32 25s-5.751 9.462-11 11M26 18l2 3"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Rect width={25} height={25} rx={3} fill={props.iconcolor} />
      <Path
        d="M5.29 20.42c-.563 0-.747-.258-.552-.774L10.48 4.564c.243-.633.61-.95 1.102-.95h1.64c.493 0 .86.317 1.102.95l5.742 15.082c.196.516.012.773-.55.773h-1.864c-.515 0-.875-.27-1.078-.808l-1.195-3.153H9.426L8.23 19.611c-.203.539-.562.808-1.078.808H5.29zm5.226-6.868h3.773l-1.441-3.726c-.172-.438-.278-.754-.317-.95-.031-.203-.066-.5-.105-.89h-.047c-.04.39-.078.687-.117.89-.032.196-.133.512-.305.95l-1.441 3.726z"
        fill="#fff"
      />
    </Svg>
  );
}
