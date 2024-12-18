import { StyleSheet, View } from "react-native";
import React from "react";
import SHDNALoading from "../Components/SHDNALoading";

export default function SHDNALoadingBlackView() {
  return (
    <>
      <View
        style={[styles.wrapper, { backgroundColor: "black", opacity: 0.75 }]}
      />
      <View style={styles.wrapper}>
        <SHDNALoading />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 200,
  },
});
