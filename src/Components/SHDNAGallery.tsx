import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import SHDNAImage from "./SHDNAImage";
import { useFloatingView } from "./FloatingView/SHDNAFloatingViewContext";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import Cross from "@/assets/RNSvgs/Cross";
import { Colors } from "@/assets/SHDNAColors";

type SHDNAGalleryProps = {
  images: readonly string[];
};

export default function SHDNAGallery({ images }: SHDNAGalleryProps) {
  const IMAGE_SIZE = 183.25;

  const { openFloatingView } = useFloatingView();

  return (
    <View style={styles.grid}>
      {images.map((image) => {
        return (
          <Pressable
            onPress={() => openFloatingView(<SHDNAImageItem image={image} />)}
          >
            <SHDNAImage
              source={{ uri: image }}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const SHDNAImageItem = ({ image }: { image: string }) => {
  const { closeFloatingView } = useFloatingView();
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={styles.background} />
      <SHDNAImage
        source={{ uri: image }}
        width={500}
        height={500}
        style={{ width: 500, height: 500 }}
      />
      <View style={styles.closeButton}>
        <SHDNAButton
          Icon={Cross}
          onClick={() => closeFloatingView()}
          iconSize={50}
          state={ButtonStates.TRANSPARENT}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexWrap: "wrap",
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.85,
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    zIndex: 500,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
});
