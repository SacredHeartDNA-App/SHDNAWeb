import { View, Text, Image, StyleSheet } from "react-native";
import React, { Suspense } from "react";
import SHDNABlock from "../../Components/SHDNABlock";
import { useSubview } from "../../Components/Subview/SHDNASubviewContext";
import SHDNAChallengesSubView, {
  ChallengesType,
} from "./SHDNAChallengesSubView";
import SHDNALoading from "../../Components/SHDNALoading";
import SHDNAView from "../../Components/SHDNAView";
import SHDNAText from "../../Components/SHDNAText";

export const CHALLENGE_SECTIONS = [
  {
    title: "Personal Integrity",
    type: "PERSONAL_INTEGRITY",
    logo: require("../../../assets/imgs/sacredheartDNA-01.png"),
  },
  {
    title: "Spirituality",
    type: "SPIRITUALITY",
    logo: require("../../../assets/imgs/sacredheartDNA-02.png"),
  },
  {
    title: "Belonging Community",
    type: "BELONGING_COMMUNITY",
    logo: require("../../../assets/imgs/sacredheartDNA-03.png"),
  },
  {
    title: "Active Citizenship",
    type: "ACTIVE_CITIZENSHIP",
    logo: require("../../../assets/imgs/sacredheartDNA-04.png"),
  },
  {
    title: "Transformative Action",
    type: "TRANSFORMATIVE_ACTION",
    logo: require("../../../assets/imgs/sacredheartDNA-05.png"),
  },
];

export default function SHDNAPassportView() {
  const { openSubview } = useSubview();

  return (
    <SHDNAView title="Discover">
      {CHALLENGE_SECTIONS.map((section) => {
        return (
          <SHDNABlock
            style={styles.row}
            key={section.title}
            onClick={() =>
              openSubview(
                section.title,
                <Suspense
                  fallback={
                    <View style={{ marginTop: 100 }}>
                      <SHDNALoading />
                    </View>
                  }
                >
                  <SHDNAChallengesSubView
                    type={section.type as ChallengesType}
                  />
                </Suspense>
              )
            }
          >
            <Image source={section.logo} style={styles.image} />
            <SHDNAText style={styles.title} fontWeight="SemiBold">
              {section.title}
            </SHDNAText>
          </SHDNABlock>
        );
      })}
    </SHDNAView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    margin: 10,
    objectFit: "contain",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 5,
  },
});
