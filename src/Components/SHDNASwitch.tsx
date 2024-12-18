import { View, StyleSheet, Animated, Easing } from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import { SVGType } from "../../assets/RNSvgs/HomeSVG";
import { SvgProps } from "react-native-svg";
import { Colors } from "../../assets/SHDNAColors";

type SHDNASwitchProps = {
  onChange: (value: number) => void;
  value: number;
  options: React.ComponentType<SVGType & SvgProps>[];
};

export default function SHDNASwitch({
  options,
  value,
  onChange,
}: SHDNASwitchProps) {
  const currentOption = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const WIDTH_PER_OPTION = 40;

  useEffect(() => {
    Animated.timing(currentOption, {
      toValue: { x: WIDTH_PER_OPTION * value, y: 0 },
      duration: 100,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  }, [value]);

  return (
    <View
      style={[styles.wrapper, { width: WIDTH_PER_OPTION * options.length }]}
    >
      <Animated.View
        style={[
          {
            transform: currentOption.getTranslateTransform(),
          },
          styles.circle,
        ]}
      />
      {options.map((option, index) => {
        return (
          <View
            style={{
              width: WIDTH_PER_OPTION,
              aspectRatio: 1 / 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            key={index}
          >
            <SHDNAButton
              Icon={() => {
                const Icon = option;
                return (
                  <Icon
                    iconColor="black"
                    style={{ transform: [{ scale: 0.7 }] }}
                  />
                );
              }}
              onClick={() => {
                onChange(index);
              }}
              state={ButtonStates.TRANSPARENT}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 50,
    padding: 2,
    overflow: "hidden",
    position: "relative",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: Colors.Gray1,
  },
  circle: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    height: "100%",
    borderRadius: 50,
    aspectRatio: 1 / 1,
    position: "absolute",
    padding: 2,
    margin: 1,
  },
});
