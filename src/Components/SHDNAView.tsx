import {
  Falsy,
  RecursiveArray,
  RegisteredStyle,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode, Suspense, useRef, useState } from "react";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAText from "./SHDNAText";
import SHDNALoading from "./SHDNALoading";

type SHDNAViewProps = {
  title: string;
  secondaryButtons?: ReactNode[] | ReactNode;
  children: ReactNode;
  style?:
    | ViewStyle
    | RecursiveArray<ViewStyle | Falsy | RegisteredStyle<ViewStyle>>;
  scrollEnabled?: boolean;
};

export default function SHDNAView({
  title,
  children,
  secondaryButtons,
  scrollEnabled = true,
}: SHDNAViewProps) {
  return (
    <>
      <View style={{ ...styles, ...styles.container }}>
        <View style={styles.topBar}>
          <SHDNAText style={styles.title} fontWeight="SemiBold">
            {title}
          </SHDNAText>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            {secondaryButtons}
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          scrollEnabled={scrollEnabled}
        >
          <Suspense fallback={<SHDNALoading />}>{children}</Suspense>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
  },
  titleOnScroll: {
    fontSize: 28,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
    flexDirection: "column",
    backgroundColor: Colors.Background,
  },
  scroll: {
    flex: 1,
    height: "100%",
  },
  topBar: {
    width: "100%",
    marginBottom: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
