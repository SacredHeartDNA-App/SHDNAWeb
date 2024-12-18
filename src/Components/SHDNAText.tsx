import { Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import { Linking } from "react-native";
import { Colors } from "@/assets/SHDNAColors";

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
  isURL?: boolean;
  children: React.ReactNode | string | undefined;
};

export default function SHDNAText({
  fontWeight = "Regular",
  isURL,
  ...props
}: SHDNATextProps) {
  const handleURL = () => {
    let url = props.children as string;
    if (url.slice(0, 4) !== "http") {
      url = "http://" + url;
    }
    Linking.openURL(url);
  };
  return (
    <Text
      onPress={
        isURL
          ? () => {
              handleURL();
            }
          : undefined
      }
      style={[
        { fontFamily: `LibreFamily-${fontWeight}` },
        props.style,
        isURL && { color: Colors.Blue1, fontFamily: `LibreFamily-Bold` },
      ]}
    >
      {props.children}
    </Text>
  );
}
