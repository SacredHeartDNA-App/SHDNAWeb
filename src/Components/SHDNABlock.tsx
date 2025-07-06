import {
  StyleSheet,
  ViewStyle,
  RecursiveArray,
  RegisteredStyle,
  Falsy,
  Animated,
  Easing,
} from "react-native";
import React, { ReactNode, useRef } from "react";
import { Colors } from "../../assets/SHDNAColors";

type SHDNABlock = {
  children: ReactNode;
  style?:
    | ViewStyle
    | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
  onClick?: () => void;
  playAnimation?: boolean;
  borderColor?: string;
};

export default function SHDNABlock({
  children,
  style,
  onClick,
  playAnimation,
  borderColor = Colors.Background,
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
        transform: [{ scale: buttonHover }],
        ...style,
        ...{ cursor: onClick ? "pointer" : undefined },
        borderColor,
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
    borderWidth: 1.5,
  },
  blockShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});
