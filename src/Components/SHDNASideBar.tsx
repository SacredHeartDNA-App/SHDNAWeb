import { View, StyleSheet } from "react-native";
import React from "react";
import HomeSVG from "../../assets/RNSvgs/HomeSVG";
import CommunitySVG from "../../assets/RNSvgs/CommunitySVG";
import EspacioSVG from "../../assets/RNSvgs/EspacioSVG";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAText from "./SHDNAText";
import { Link, useSegments } from "expo-router";
import TranslateGraySVG from "@/assets/RNSvgs/TranslateGraySVG";
import DiscoverSVG from "@/assets/RNSvgs/DiscoverSVG";

const ICON_SCALE = 0.9;

export default function SHDNASideBar() {
  const segments = useSegments();
  const activeSection = segments[0];

  return (
    <View style={styles.body}>
      <Link href="/news">
        <View style={styles.slots}>
          <HomeSVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconcolor={activeSection === "news" ? Colors.Gray2 : Colors.Gray1}
          />
          <SHDNAText style={styles.selectionColor}>News</SHDNAText>
        </View>
      </Link>
      <Link href="/community">
        <View style={styles.slots}>
          <CommunitySVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconcolor={
              activeSection === "community" ? Colors.Gray2 : Colors.Gray1
            }
          />
          <SHDNAText style={styles.selectionColor}>Community</SHDNAText>
        </View>
      </Link>
      <Link href="/discover">
        <View style={styles.slots}>
          <DiscoverSVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconcolor={
              activeSection === "discover" ? Colors.Gray2 : Colors.Gray1
            }
          />
          <SHDNAText style={styles.selectionColor}>Discover</SHDNAText>
        </View>
      </Link>
      <Link href="/espacio">
        <View style={styles.slots}>
          <EspacioSVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconcolor={false ? Colors.Gray2 : Colors.Gray1}
          />
          <SHDNAText style={styles.selectionColor}>Espacio</SHDNAText>
        </View>
      </Link>
      <Link href="/translations">
        <View style={styles.slots}>
          <TranslateGraySVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconcolor={
              activeSection === "translations" ? Colors.Gray2 : Colors.Gray1
            }
          />
          <SHDNAText style={styles.selectionColor}>Translations</SHDNAText>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: 125,
    height: "100%",
    flexDirection: "column",
    borderRightColor: Colors.Gray2,
    borderRightWidth: 0.75,
    padding: 25,
    backgroundColor: "white",
    alignItems: "center",
    gap: 20,
  },
  selectionColor: {
    color: Colors.Gray2,
    fontSize: 11,
  },
  slots: {
    height: 65,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
