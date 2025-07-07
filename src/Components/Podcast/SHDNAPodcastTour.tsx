import { StyleSheet, View } from "react-native";
import React from "react";
import SHDNAText from "../SHDNAText";
import { sht } from "../../Functions/SHT";
import SHDNABlock from "../SHDNABlock";
import PlaySVG from "../../../assets/RNSvgs/PlaySVG";
import { Colors } from "../../../assets/SHDNAColors";
import SHDNAButton from "../SHDNAButton";
import Cross from "../../../assets/RNSvgs/Cross";

type SHDNAPodcastTourProps = {
  onClick: () => void;
};

export default function SHDNAPodcastTour({ onClick }: SHDNAPodcastTourProps) {
  return (
    <SHDNABlock style={styles.wrapper} onClick={onClick}>
      <View style={styles.button}>
        <SHDNAButton Icon={Cross} onClick={onClick} />
      </View>
      <PlaySVG
        style={styles.triangle}
        iconColor={Colors.Background}
        width={15}
      />
      <SHDNAText style={styles.textDescription}>
        {sht(
          "Click here to listen to the official SacredHeardDNA Podcast!",
          "Welcome tour to podcast"
        )}
      </SHDNAText>
    </SHDNABlock>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    flex: 1,
    right: 5,
    bottom: 100,
    width: 200,
    padding: 10,
  },
  textDescription: {
    textAlign: "center",
  },
  triangle: {
    position: "absolute",
    bottom: -20,
    right: 0,
    transform: [{ rotate: "70deg" }],
  },
  button: {
    position: "absolute",
    width: 30,
    bottom: -10,
    left: -10,
  },
});
