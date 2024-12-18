import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAText from "./SHDNAText";

type SHDNAOptionsProps = {
  options: readonly any[];
  value: string;
  onChange: (value: string) => void;
};

export default function SHDNAOptions({
  options,
  value,
  onChange,
}: SHDNAOptionsProps) {
  return (
    <View style={styles.wrapper}>
      {options.map((option) => {
        const [isHover, setIsHover] = useState(false);

        return (
          <View
            style={styles.option}
            onPointerDown={() => {
              onChange(option);
            }}
          >
            <View
              style={[
                styles.cicle,
                value === option
                  ? { backgroundColor: Colors.Blue1, borderWidth: 0 }
                  : isHover && { backgroundColor: Colors.Gray1 },
              ]}
            />
            <SHDNAText>{option}</SHDNAText>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cicle: {
    width: 20,
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderColor: Colors.Gray2,
    borderRadius: 20,
  },
  option: {
    width: "50%",
    height: 40,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 5,
  },
  wrapper: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
