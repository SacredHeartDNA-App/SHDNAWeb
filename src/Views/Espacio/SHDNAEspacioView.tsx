import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import React, { Suspense, useState } from "react";
import SHDNAView from "../../Components/SHDNAView";
import SHDNAMeditationsView from "./SHDNAMeditationsView";
import SHDNALoading from "../../Components/SHDNALoading";
import { Colors } from "@/assets/SHDNAColors";
import SHDNAMeditationSubview from "./SHDNAMeditationSubview";
import { SHDNAMeditationSubview_fragmment$key } from "./__generated__/SHDNAMeditationSubview_fragmment.graphql";
import SHDNABlock from "@/src/Components/SHDNABlock";
import SHDNAText from "@/src/Components/SHDNAText";
import SHDNAButton, { ButtonStates } from "@/src/Components/SHDNAButton";
import AddSVG from "@/assets/RNSvgs/AddSVG";
import { useSheet } from "@/src/Components/Sheet/SHDNASheetContext";
import SHDNACreateMeditationSubview from "./SHDNACreateMeditationSubview";

export default function SHDNAEspacioView() {
  const [selectedMeditation, setSelectedMeditation] =
    useState<SHDNAMeditationSubview_fragmment$key>();

  const { openSheet } = useSheet();

  const AddButton = () => {
    return (
      <SHDNAButton
        Icon={AddSVG}
        onClick={() =>
          openSheet({
            content: <SHDNACreateMeditationSubview />,
            title: "Add new Meditation",
          })
        }
        iconSize={24}
        state={ButtonStates.TRANSPARENT}
      />
    );
  };
  return (
    <SHDNAView
      title="Espacio"
      scrollEnabled={false}
      secondaryButtons={[<AddButton key={"ADD_MEDITATINO"} />]}
    >
      <View style={styles.window}>
        <ScrollView
          style={{
            flex: 1,
            height: Dimensions.get("window").height - 125,
            padding: 10,
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Suspense
            fallback={
              <View
                style={{
                  height: 600,
                  alignItems: "center",
                }}
              >
                <SHDNALoading />
              </View>
            }
          >
            <SHDNAMeditationsView
              setSelectedMeditation={(meditation) =>
                setSelectedMeditation(meditation)
              }
            />
          </Suspense>
        </ScrollView>
        <View style={styles.middleBar} />
        <View style={{ flex: 1 }}>
          {selectedMeditation ? (
            <SHDNAMeditationSubview meditationKey={selectedMeditation} />
          ) : (
            <View style={styles.noSelected}>
              <SHDNABlock style={styles.noSelected}>
                <SHDNAText>No Meditation Selected</SHDNAText>
              </SHDNABlock>
            </View>
          )}
        </View>
      </View>
    </SHDNAView>
  );
}

const styles = StyleSheet.create({
  middleBar: {
    width: 2,
    height: "100%",
    backgroundColor: Colors.Gray2,
    marginHorizontal: 15,
  },
  window: {
    flexDirection: "row",
    flex: 1,
    height: Dimensions.get("window").height - 200,
  },
  noSelected: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
