import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/assets/SHDNAColors";
import CheckSVG from "@/assets/RNSvgs/CheckSVG";

type SHDNACheckBoxProps = {
  value: boolean;
  onClick: () => void;
};

export default function SHDNACheckBox({ value, onClick }: SHDNACheckBoxProps) {
  return (
    <Pressable style={styles.wrapper} onPress={() => onClick()}>
      <CheckSVG iconcolor={value ? Colors.Green1 : Colors.Gray2} width={25} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: Colors.Gray2,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
