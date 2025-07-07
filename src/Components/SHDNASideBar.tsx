import { View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import HomeSVG from "../../assets/RNSvgs/HomeSVG";
import CommunitySVG from "../../assets/RNSvgs/CommunitySVG";
import EspacioSVG from "../../assets/RNSvgs/EspacioSVG";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAText from "./SHDNAText";
import { Link, router, useSegments } from "expo-router";
import TranslateGraySVG from "@/assets/RNSvgs/TranslateGraySVG";
import DiscoverSVG from "@/assets/RNSvgs/DiscoverSVG";
import LogOutSVG from "@/assets/RNSvgs/LogOutSVG";
import { useUserData } from "../Context/SHDNAUserContext";
import { graphql, useMutation } from "react-relay";
import SHDNALoadingBlackView from "../Views/SHDNALoadingBlackView";
import { useFloatingView } from "./FloatingView/SHDNAFloatingViewContext";
import MicrophoneSVG from "@/assets/RNSvgs/MicrophoneSVG";

const ICON_SCALE = 0.9;

export default function SHDNASideBar() {
  const segments = useSegments();
  const { setUserId } = useUserData();
  const activeSection = segments[0];
  const { openFloatingView, closeFloatingView } = useFloatingView();
  const [optionHovered, setOptionHovered] = useState(0);

  const [commitMutation] = useMutation(graphql`
    mutation SHDNASideBarMutation {
      logOut
    }
  `);

  const handleLogOut = () => {
    openFloatingView(<SHDNALoadingBlackView />);
    commitMutation({
      variables: {},
      onCompleted: () => {
        closeFloatingView();
        setUserId(null);
        router.navigate("/");
      },
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.mainSection}>
        <Link href="/news">
          <View
            style={styles.slots}
            onPointerEnter={() => setOptionHovered(1)}
            onPointerLeave={() => setOptionHovered(0)}
          >
            <HomeSVG
              style={{ transform: [{ scale: ICON_SCALE }] }}
              iconcolor={
                activeSection === "news"
                  ? Colors.Gray3
                  : optionHovered === 1
                  ? Colors.Gray2
                  : Colors.Gray1
              }
            />
            <SHDNAText style={styles.selectionColor}>News</SHDNAText>
          </View>
        </Link>
        <Link href="/community">
          <View
            style={styles.slots}
            onPointerEnter={() => setOptionHovered(2)}
            onPointerLeave={() => setOptionHovered(0)}
          >
            <CommunitySVG
              style={{ transform: [{ scale: ICON_SCALE }] }}
              iconcolor={
                activeSection === "community"
                  ? Colors.Gray3
                  : optionHovered === 2
                  ? Colors.Gray2
                  : Colors.Gray1
              }
            />
            <SHDNAText style={styles.selectionColor}>Community</SHDNAText>
          </View>
        </Link>
        <Link href="/discover">
          <View
            style={styles.slots}
            onPointerEnter={() => setOptionHovered(3)}
            onPointerLeave={() => setOptionHovered(0)}
          >
            <DiscoverSVG
              style={{ transform: [{ scale: ICON_SCALE }] }}
              iconcolor={
                activeSection === "discover"
                  ? Colors.Gray3
                  : optionHovered === 3
                  ? Colors.Gray2
                  : Colors.Gray1
              }
            />
            <SHDNAText style={styles.selectionColor}>Discover</SHDNAText>
          </View>
        </Link>
        <Link href="/podcast">
          <View
            style={styles.slots}
            onPointerEnter={() => setOptionHovered(4)}
            onPointerLeave={() => setOptionHovered(0)}
          >
            <MicrophoneSVG
              style={{ transform: [{ scale: ICON_SCALE }] }}
              iconcolor={
                activeSection === "podcast"
                  ? Colors.Gray3
                  : optionHovered === 4
                  ? Colors.Gray2
                  : Colors.Gray1
              }
            />
            <SHDNAText style={styles.selectionColor}>Podcast</SHDNAText>
          </View>
        </Link>
        {/* <Link href="/espacio">
          <View
            style={styles.slots}
            onPointerEnter={() => setOptionHovered(4)}
            onPointerLeave={() => setOptionHovered(0)}
          >
            <EspacioSVG
              style={{ transform: [{ scale: ICON_SCALE }] }}
              iconcolor={
                activeSection === "espacio"
                  ? Colors.Gray3
                  : optionHovered === 4
                  ? Colors.Gray2
                  : Colors.Gray1
              }
            />
            <SHDNAText style={styles.selectionColor}>Espacio</SHDNAText>
          </View>
        </Link> */}
        {/* <Link href="/translations">
          <View style={styles.slots}>
            <TranslateGraySVG
              style={{ transform: [{ scale: ICON_SCALE }] }}
              iconcolor={
                activeSection === "translations" ? Colors.Gray2 : Colors.Gray1
              }
            />
            <SHDNAText style={styles.selectionColor}>Translations</SHDNAText>
          </View>
        </Link> */}
      </View>
      <View style={styles.mainSection}>
        <Pressable
          onPress={() => {
            handleLogOut();
          }}
        >
          <View
            style={styles.slots}
            onPointerEnter={() => setOptionHovered(5)}
            onPointerLeave={() => setOptionHovered(0)}
          >
            <LogOutSVG
              style={{ transform: [{ scale: ICON_SCALE }] }}
              iconcolor={optionHovered === 5 ? Colors.Gray2 : Colors.Gray1}
            />
            <SHDNAText style={styles.selectionColor}>Log Out</SHDNAText>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: 125,
    flexDirection: "column",
    borderRightColor: Colors.Gray2,
    borderRightWidth: 0.75,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainSection: {
    padding: 20,
    gap: 25,
    alignItems: "center",
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
