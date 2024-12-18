import { Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "../../assets/SHDNAColors";

export default function SHDNABlockGlimmer() {
  const colorAnim = useRef(new Animated.Value(0)).current;

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.Gray2, Colors.Gray1],
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.out(Easing.quad),
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.quad),
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorAnim]);

  return (
    <Animated.View style={{ flex: 1, backgroundColor: backgroundColor }} />
  );
}
