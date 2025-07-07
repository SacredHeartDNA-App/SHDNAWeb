import { Text, StyleProp, TextStyle } from "react-native";
import React from "react";

type FontWeight =
  | "Black"
  | "ExtraBold"
  | "Bold"
  | "SemiBold"
  | "Medium"
  | "Regular"
  | "Light"
  | "Thin";

type SHDNATextProps = {
  style?: StyleProp<TextStyle>;
  fontWeight?: FontWeight;
  children: React.ReactNode | string | undefined;
  numberOfLines?: number;
};

export default function SHDNAText({
  fontWeight = "Regular",
  numberOfLines,
  ...props
}: SHDNATextProps) {
  return (
    <Text
      style={[{ fontFamily: `LibreFamily-${fontWeight}` }, props.style]}
      numberOfLines={numberOfLines}
    >
      {props.children}
    </Text>
  );
}
