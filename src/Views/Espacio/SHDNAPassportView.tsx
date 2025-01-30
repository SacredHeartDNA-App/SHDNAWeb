import { View, Image, StyleSheet, Pressable, Dimensions } from "react-native";
import React, { Suspense, useState, useTransition } from "react";
import SHDNABlock from "../../Components/SHDNABlock";
import SHDNAChallengesSubView, {
  ChallengesType,
} from "./SHDNAChallengesSubView";
import SHDNALoading from "../../Components/SHDNALoading";
import SHDNAView from "../../Components/SHDNAView";
import SHDNAText from "../../Components/SHDNAText";
import { useSheet } from "@/src/Components/Sheet/SHDNASheetContext";
import AddSVG from "@/assets/RNSvgs/AddSVG";
import { Colors } from "@/assets/SHDNAColors";
import SHDNACreateChallengeSubView from "./SHDNACreateChallengeSubView";

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
  const { openSheet } = useSheet();
  const [section, setSection] = useState<ChallengesType>();
  const [_, startTransition] = useTransition();

  const AddButton = () => {
    return (
      <Pressable
        onPress={() =>
          startTransition(() => {
            openSheet({
              title: "Create new Challenge",
              content: <SHDNACreateChallengeSubView />,
            });
          })
        }
      >
        <AddSVG style={{ transform: [{ scale: 0.75 }] }} iconcolor="#000" />
      </Pressable>
    );
  };

  return (
    <SHDNAView
      title="Discover"
      secondaryButtons={<AddButton />}
      scrollEnabled={false}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={[{ padding: 10 }, styles.subview]}>
          {CHALLENGE_SECTIONS.map((section) => {
            return (
              <SHDNABlock
                style={styles.row}
                key={section.title}
                onClick={() => setSection(section.type as ChallengesType)}
              >
                <Image source={section.logo} style={styles.image} />
                <SHDNAText style={styles.title} fontWeight="SemiBold">
                  {section.title}
                </SHDNAText>
              </SHDNABlock>
            );
          })}
        </View>
        <View style={styles.middleBar} />
        <View style={styles.subview}>
          {section ? (
            <Suspense fallback={<SHDNALoading />}>
              <SHDNAChallengesSubView type={section as ChallengesType} />
            </Suspense>
          ) : (
            <View style={styles.selectSection}>
              <SHDNAText fontWeight="Bold" style={{ color: Colors.Gray3 }}>
                Select a section
              </SHDNAText>
            </View>
          )}
        </View>
      </View>
    </SHDNAView>
  );
}

const styles = StyleSheet.create({
  subview: {
    flex: 1,
    height: Dimensions.get("window").height - 100,
  },
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
  middleBar: {
    width: 2,
    height: "100%",
    backgroundColor: Colors.Gray2,
    marginHorizontal: 15,
  },
  selectSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
