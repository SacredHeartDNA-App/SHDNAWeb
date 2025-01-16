import { View, StyleSheet } from "react-native";
import React from "react";
import SHDNABlock from "./SHDNABlock";
import SHDNAImage from "./SHDNAImage";
import { Colors } from "../../assets/SHDNAColors";
import { useSubview } from "./Subview/SHDNASubviewContext";
import SHDNAText from "./SHDNAText";
import { graphql, useFragment } from "react-relay";
import { SHDNAMediaBlock_fragmment$key } from "./__generated__/SHDNAMediaBlock_fragmment.graphql";
import { SHDNAMeditationSubview_fragmment$key } from "../Views/Espacio/__generated__/SHDNAMeditationSubview_fragmment.graphql";

type SHDNAMediaBlockProps = {
  meditationKey: SHDNAMediaBlock_fragmment$key;
  onClick: (data: SHDNAMeditationSubview_fragmment$key) => void;
};

export default function SHDNAMediaBlock({
  meditationKey,
  onClick,
}: SHDNAMediaBlockProps) {
  const data = useFragment<SHDNAMediaBlock_fragmment$key>(
    graphql`
      fragment SHDNAMediaBlock_fragmment on Meditation {
        created_at
        title
        cover
        isSeen
        ...SHDNAMeditationSubview_fragmment
      }
    `,
    meditationKey
  );

  return (
    <SHDNABlock style={styles.wrapper} onClick={() => onClick(data)}>
      <SHDNAImage style={styles.image} source={{ uri: data.cover }} />
      {true && (
        <View style={styles.bandWrapper}>
          <View style={styles.newBand}>
            <SHDNAText fontWeight="SemiBold" style={styles.newText}>
              New!
            </SHDNAText>
          </View>
        </View>
      )}
      <SHDNAText style={styles.title}>{data.title}</SHDNAText>
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
