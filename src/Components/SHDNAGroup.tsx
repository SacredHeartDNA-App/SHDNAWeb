import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import React, { ReactNode, useRef, useState } from "react";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import ArrowSVG from "../../assets/RNSvgs/ArrowSVG";
import DirectionalSVG from "../../assets/RNSvgs/DirectionalSVG";
import SHDNAText from "./SHDNAText";

type SHDNAGroupProps = {
  text: string;
  disableLastBorder?: boolean;
  gap?: number;
  children: ReactNode;
  onClick?: () => void;
};

const SHDNAGroup = ({
  text,
  disableLastBorder,
  gap = 0,
  children,
  onClick,
}: SHDNAGroupProps) => {
  const [showItems, setShowItems] = useState(false);
  const foldRotation = useRef(new Animated.Value(0)).current;

  const manageFoldAnimation = () => {
    setShowItems(!showItems);

    Animated.timing(foldRotation, {
      toValue: showItems ? 0 : 1,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const spin = foldRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["-180deg", "-90deg"],
  });

  return (
    <>
      <View
        style={[styles.wrapper]}
        onPointerDown={() => {
          manageFoldAnimation();
          onClick && onClick();
        }}
      >
        <Animated.View
          style={{
            transform: [{ scale: -1 }, { rotate: spin }],
          }}
        >
          <DirectionalSVG iconcolor={Colors.Gray3} width={12} />
        </Animated.View>
        <SHDNAText style={styles.subtitle} fontWeight="Bold">
          {text}
        </SHDNAText>
        <View style={styles.bar} />
      </View>
      {showItems && <View style={{ gap }}>{children}</View>}
      {!disableLastBorder && showItems && (
        <View style={[styles.wrapper, { marginVertical: 30 }]}>
          <View style={styles.bar} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: Colors.Gray3,
    marginBottom: 5,
  },
  bar: {
    flex: 1,
    height: 1.5,
    borderRadius: 2,
    backgroundColor: Colors.Gray3,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
});

export default SHDNAGroup;
