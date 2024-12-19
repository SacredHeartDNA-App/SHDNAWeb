import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useModal } from "./SHDNAModalContext";
import { Colors } from "@/assets/SHDNAColors";
import SHDNAButton, { ButtonStates } from "../SHDNAButton";

export default function SHDNAModal() {
  const { content, closeModal, showCloseButton } = useModal();

  if (content)
    return (
      <View style={styles.abs}>
        <View style={[styles.background]} />
        <View
          style={[
            styles.block,
            { justifyContent: showCloseButton ? "space-between" : "center" },
          ]}
        >
          <View>{content}</View>
          <View>
            {showCloseButton && (
              <SHDNAButton
                text="Close"
                onClick={() => closeModal()}
                state={ButtonStates.ALERT}
              />
            )}
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    backgroundColor: "black",
    opacity: 0.8,
  },
  abs: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 150,
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    width: 400,
    height: "auto",
    backgroundColor: Colors.Background,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
});
