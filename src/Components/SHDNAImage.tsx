import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
  RecursiveArray,
  RegisteredStyle,
  Falsy,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useSubview } from "./Subview/SHDNASubviewContext";
import SHDNABlockGlimmer from "./SHDNABlockGlimmer";

type SHDNAImageProps = {
  source: ImageSourcePropType;
  isInteractive?: boolean;
  style?:
    | ViewStyle
    | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
  width?: number;
  height?: number;
  flex?: number;
};

export default function SHDNAImage({
  source,
  style,
  width,
  height,
  flex,
}: SHDNAImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View
      style={[
        style,
        {
          zIndex: 100,
          flex,
          width,
          height,
        },
      ]}
    >
      {isLoading && <SHDNABlockGlimmer />}
      <Image
        source={source}
        style={[styles.image, { width, height, flex }]}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
