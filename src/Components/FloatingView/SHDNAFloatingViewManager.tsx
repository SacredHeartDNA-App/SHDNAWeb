import React from "react";
import { useFloatingView } from "./SHDNAFloatingViewContext";
import { StyleSheet, View } from "react-native";

export default function SHDNAFloatingViewManager() {
  const { content } = useFloatingView();

  if (content) return <View style={[styles.wrapper]}>{content}</View>;
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
