import { View, StyleSheet } from "react-native";
import React from "react";
import SHDNALoading from "./SHDNALoading";

export default function SHDNALoadingBlock() {
  return (
    <View style={styles.wrapper}>
      <SHDNALoading />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 25,
  },
});
