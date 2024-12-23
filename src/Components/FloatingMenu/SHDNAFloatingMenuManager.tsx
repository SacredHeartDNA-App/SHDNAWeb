import { Pressable, View, StyleSheet } from "react-native";
import React from "react";
import SHDNAText from "../SHDNAText";
import { Colors } from "@/assets/SHDNAColors";
import { FloatingItem, useFloatingMenu } from "./SHDNAFloatingMenuContext";

export default function SHDNAFloatingMenuManager() {
  const { menu, showMenu, toggleFloatingMenu, position } = useFloatingMenu();

  const newOptions = [
    ...menu,
    { label: "Close", onClick: () => {} },
  ] as FloatingItem[];

  if (showMenu)
    return (
      <>
        <View style={[styles.wrapper, position]}>
          {newOptions.map((item) => {
            return (
              <Pressable
                style={[styles.item]}
                onPress={(e) => {
                  e.stopPropagation();
                  item.onClick();
                  toggleFloatingMenu(false);
                }}
              >
                <SHDNAText>{item.label}</SHDNAText>
              </Pressable>
            );
          })}
        </View>
        {/* <View
          style={styles.background}
          onPointerDown={(e) => {
            toggleFloatingMenu(false);
          }}
        /> */}
      </>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: 0,
    top: 40,
    maxWidth: 200,
    minWidth: 100,
    backgroundColor: Colors.Background,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 10,
    zIndex: 100,
  },
  item: {
    padding: 10,
  },
  background: {
    position: "absolute",
    right: 0,
    top: 100,
    bottom: 0,
    left: 100,
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    zIndex: 400,
  },
});
