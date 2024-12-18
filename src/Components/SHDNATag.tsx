import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SHDNAText from "./SHDNAText";

type SHDNATagProps = {
  title: string;
  backgroundColor: string;
};

export default function SHDNATag({ title, backgroundColor }: SHDNATagProps) {
  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <SHDNAText style={styles.text} fontWeight="SemiBold">
        #{title}
      </SHDNAText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 20,
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 12,
    display: "flex",
    color: "white",
  },
});
