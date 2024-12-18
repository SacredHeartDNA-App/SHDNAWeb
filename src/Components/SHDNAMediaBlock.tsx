import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SHDNABlock from "./SHDNABlock";
import SHDNAImage from "./SHDNAImage";
import { Colors } from "../../assets/SHDNAColors";
import { useSubview } from "./Subview/SHDNASubviewContext";
import SHDNAMeditationSubview from "../Views/Espacio/SHDNAMeditationSubview";
import SHDNAText from "./SHDNAText";

type SHDNAMediaBlockProps = {
  isNew?: boolean;
};

export default function SHDNAMediaBlock({
  isNew = false,
}: SHDNAMediaBlockProps) {
  const { openSubview } = useSubview();

  return (
    <SHDNABlock
      style={styles.wrapper}
      onClick={() => openSubview("Meditation", <SHDNAMeditationSubview />)}
    >
      <SHDNAImage
        style={styles.image}
        source={{ uri: "../../assets/PostPic.png" }}
      />
      {isNew && (
        <View style={styles.bandWrapper}>
          <View style={styles.newBand}>
            <SHDNAText fontWeight="SemiBold" style={styles.newText}>
              New!
            </SHDNAText>
          </View>
        </View>
      )}
      <SHDNAText style={styles.title}>SHDNAMediaBlock</SHDNAText>
    </SHDNABlock>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginVertical: 15,
    marginRight: 30,
    width: "auto",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: 175,
    height: 120,
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    marginVertical: 7,
    fontSize: 12,
  },
  newBand: {
    backgroundColor: Colors.Purple1,
    width: 100,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-45deg" }, { translateX: -25 }, { translateY: -5 }],
  },
  newText: {
    fontSize: 12,
    color: "white",
  },
  bandWrapper: {
    overflow: "hidden",
    zIndex: 50,
    position: "absolute",
    left: 0,
    top: 0,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
