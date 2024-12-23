import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  LayoutChangeEvent,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSheet } from "./SHDNASheetContext";
import { Colors } from "../../../assets/SHDNAColors";
import SHDNAText from "../SHDNAText";
import SHDNAButton, { ButtonStates } from "../SHDNAButton";
import BackArrowSVG from "@/assets/RNSvgs/BackArrowSVG";

export default function SHDNASheetManager() {
  const { sheetDisplayed } = useSheet();

  return <>{sheetDisplayed && <SHDNASheet />}</>;
}

function SHDNASheet() {
  const { view, heightWrappContent, closeSheet, switchCloseSheet } = useSheet();

  const componentHeight = useRef(0);
  const backgroundOpacity = useRef(new Animated.Value(0)).current;

  const [isSheetDisplayed, setIsSheetDisplayed] = useState(false);

  useEffect(() => {
    Animated.timing(backgroundOpacity, {
      toValue: 1,
      duration: 100,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start(() => setIsSheetDisplayed(true));
  }, []);

  const closeAnimationSheet = () => {
    Animated.timing(backgroundOpacity, {
      toValue: 0,
      duration: 100,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start(() => {
      setIsSheetDisplayed(true);
      closeSheet();
    });
  };

  useEffect(() => {
    if (!isSheetDisplayed) return;
    closeAnimationSheet();
  }, [switchCloseSheet]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    componentHeight.current = height;
  };

  return (
    <Animated.View style={[styles.wrapper, { opacity: backgroundOpacity }]}>
      <Animated.View
        style={[styles.background, { opacity: 0.5 }]}
        onPointerDown={() => closeAnimationSheet()}
      />
      <Animated.View
        style={[styles.sheet, heightWrappContent && { height: "90%" }]}
        onLayout={handleLayout}
      >
        <View style={styles.header}>
          <SHDNAButton
            Icon={() => (
              <BackArrowSVG
                style={{ transform: [{ scale: 0.7 }] }}
                width={25}
                height={40}
                iconcolor="black"
              />
            )}
            onClick={() => closeAnimationSheet()}
            state={ButtonStates.TRANSPARENT}
          />
          {typeof view.title === "string" ? (
            <SHDNAText fontWeight="SemiBold" style={styles.title}>
              {view.title}
            </SHDNAText>
          ) : (
            view.title
          )}
          <View style={{ width: 25 }}></View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          {view.content}
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 150,
  },
  background: {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  header: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.Gray1,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    marginTop: 20,
    paddingBottom: 15,
  },
  sheet: {
    backgroundColor: Colors.Background,
    height: 700,
    borderRadius: 20,
    width: 600,
    paddingBottom: 0,
  },
  content: { paddingHorizontal: 25 },
});
