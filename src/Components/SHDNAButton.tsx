import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { ReactNode, useState } from "react";
import { Colors } from "../../assets/SHDNAColors";
import { SVGType } from "../../assets/RNSvgs/HomeSVG";
import { SvgProps } from "react-native-svg";
import SHDNAText from "./SHDNAText";

type SHDNAButtonProps = {
  onClick: () => void;
  text?: string;
  Icon?: React.ComponentType<SVGType & SvgProps>;
  iconSize?: number;
  state?: ButtonStates;
  isDisabled?: boolean;
};

export enum ButtonStates {
  ALERT,
  ACTIVE,
  DEFAULT,
  DISABLED,
  SECONDARY,
  TRANSPARENT,
}

export default function SHDNAButton({
  onClick,
  text,
  Icon,
  iconSize = 15,
  state = ButtonStates.DEFAULT,
  isDisabled = false,
}: SHDNAButtonProps) {
  const [isHoldingDown, setIsHoldingDown] = useState(false);

  return (
    <Pressable
      onPointerDown={(e) => {
        e.stopPropagation();
        setIsHoldingDown(false);
        onClick();
      }}
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(state),
          opacity: isHoldingDown ? 0.8 : isDisabled ? 0.6 : 1,
          paddingVertical: !Icon ? 10 : 0,
        },
        state !== ButtonStates.TRANSPARENT && { flex: 1 },
      ]}
    >
      <View style={styles.row}>
        {Icon && (
          <Icon
            width={iconSize}
            iconcolor={state === ButtonStates.TRANSPARENT ? "black" : "white"}
          />
        )}
        {text && (
          <SHDNAText
            style={{
              color: state === ButtonStates.TRANSPARENT ? "black" : "white",
            }}
            fontWeight="SemiBold"
          >
            {text}
            {!text && !Icon && "Button"}
          </SHDNAText>
        )}
      </View>
    </Pressable>
  );
}

const getBackgroundColor = (state: ButtonStates) => {
  switch (state) {
    case ButtonStates.DEFAULT:
      return Colors.Blue1;
    case ButtonStates.ALERT:
      return Colors.Red1;
    case ButtonStates.ACTIVE:
      return Colors.Green1;
    case ButtonStates.DISABLED:
      return Colors.Gray1;
    case ButtonStates.SECONDARY:
      return Colors.CyanGray1;
    case ButtonStates.TRANSPARENT:
      return "none";
    default:
      return Colors.Blue1;
  }
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
