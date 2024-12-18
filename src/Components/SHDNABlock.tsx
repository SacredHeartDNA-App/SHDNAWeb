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
};

export default function SHDNABlock({
  children,
  style,
  onClick,
  showShadow = true,
}: SHDNABlock) {
  const [isBeingPressed, setIsBeingPressed] = useState(false);
  const buttonHover = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!onClick) return;
    Animated.timing(buttonHover, {
      toValue: isBeingPressed ? 0.95 : 1,
      duration: 200,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [isBeingPressed]);

  return (
    <Animated.View
      onPointerDown={() => {
        onClick && onClick();
        setIsBeingPressed(false);
      }}
      style={{
        ...styles.block,
        ...(showShadow && styles.blockShadow),
        transform: [{ scale: buttonHover }],
        ...style,
      }}
    >
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: "100%",
    backgroundColor: Colors.Background,
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
