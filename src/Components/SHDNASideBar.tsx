import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import HomeSVG from "../../assets/RNSvgs/HomeSVG";
import CommunitySVG from "../../assets/RNSvgs/CommunitySVG";
import EspacioSVG from "../../assets/RNSvgs/EspacioSVG";
import UserSVG from "../../assets/RNSvgs/UserSVG";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAText from "./SHDNAText";
import { Link } from "expo-router";

const ICON_SCALE = 0.9;

export default function SHDNASideBar() {
  const [optionSelected, setOptionSelected] = useState(0);

  return (
    <View style={styles.body}>
      <Link href="/">
        <View style={styles.slots} onPointerDown={() => setOptionSelected(0)}>
          <HomeSVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconColor={optionSelected === 0 ? Colors.Gray2 : Colors.Gray1}
          />
          <SHDNAText style={styles.selectionColor}>News</SHDNAText>
        </View>
      </Link>
      <Link href="/signin">
        <View style={styles.slots} onPointerDown={() => setOptionSelected(1)}>
          <CommunitySVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconColor={optionSelected === 1 ? Colors.Gray2 : Colors.Gray1}
          />
          <SHDNAText style={styles.selectionColor}>Community</SHDNAText>
        </View>
      </Link>
      <Link href="/">
        <View style={styles.slots} onPointerDown={() => setOptionSelected(2)}>
          <EspacioSVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconColor={optionSelected === 2 ? Colors.Gray2 : Colors.Gray1}
          />
          <SHDNAText style={styles.selectionColor}>Discover</SHDNAText>
        </View>
      </Link>
      <Link href="/">
        <View style={styles.slots} onPointerDown={() => setOptionSelected(3)}>
          <EspacioSVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconColor={optionSelected === 3 ? Colors.Gray2 : Colors.Gray1}
          />
          <SHDNAText style={styles.selectionColor}>Espacio</SHDNAText>
        </View>
      </Link>
      <Link href="/">
        <View style={styles.slots} onPointerDown={() => setOptionSelected(4)}>
          <UserSVG
            style={{ transform: [{ scale: ICON_SCALE }] }}
            iconColor={optionSelected === 4 ? Colors.Gray2 : Colors.Gray1}
          />
          <SHDNAText style={styles.selectionColor}>Me</SHDNAText>
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
