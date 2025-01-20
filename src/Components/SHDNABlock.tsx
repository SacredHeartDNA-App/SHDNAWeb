import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  RecursiveArray,
  RegisteredStyle,
  Falsy,
  Animated,
  Easing,
} from "react-native";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Colors } from "../../assets/SHDNAColors";

type SHDNABlock = {
  children: ReactNode;
  style?:
    | ViewStyle
    | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
  onClick?: () => void;
  showShadow?: boolean;
  playAnimation?: boolean;
};

export default function SHDNABlock({
  children,
  style,
  onClick,
  showShadow = true,
  playAnimation,
}: SHDNABlock) {
  const buttonHover = useRef(new Animated.Value(1)).current;

  const handleHover = (isEnter: boolean) => {
    if (!playAnimation) return;
    Animated.timing(buttonHover, {
      toValue: isEnter ? 0.95 : 1,
      duration: 200,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  };
  return (
    <Animated.View
      onPointerDown={() => {
        onClick && onClick();
      }}
      onPointerEnter={() => {
        handleHover(true);
      }}
      onPointerLeave={() => {
        handleHover(false);
      }}
      style={{
        ...styles.block,
        ...(showShadow && styles.blockShadow),
        transform: [{ scale: buttonHover }],
        ...style,
        ...{ cursor: onClick ? "pointer" : undefined },
      }}
    >
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  blockShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});
