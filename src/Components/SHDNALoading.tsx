import { Image, StyleSheet, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "../../assets/SHDNAColors";

type LoadingSize = "Default" | "Small";

type SHDNALoadingProps = {
  size?: LoadingSize;
};

export default function SHDNALoading({ size = "Default" }: SHDNALoadingProps) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopRotation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
        easing: Easing.linear,
      })
    );

    loopRotation.start();

    return () => loopRotation.stop();
  }, [rotateAnim]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{
        transform: [{ rotate: rotateInterpolate }],
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Image
        source={require("../../assets/Loading1.png")}
        style={[styles.loadingImage, getLoadingSize(size)]}
      />
    </Animated.View>
  );
}

const getLoadingSize = (size: LoadingSize) => {
  switch (size) {
    case "Default":
      return {
        width: 50,
        height: 50,
      };
    case "Small":
      return {
        width: 30,
        height: 30,
      };

    default:
      return {
        width: 50,
        height: 50,
      };
  }
};

const styles = StyleSheet.create({
  loadingImage: {
    aspectRatio: 1 / 1,
    tintColor: Colors.CyanGray1,
  },
});
