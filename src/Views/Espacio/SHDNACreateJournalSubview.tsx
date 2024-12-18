import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import SHDNATextInput from "../../Components/SHDNATextInput";
import SHDNATextArea from "../../Components/SHDNATextArea";
import SHDNAButton from "../../Components/SHDNAButton";
import { CHALLENGE_SECTIONS } from "./SHDNAPassportView";
import { Colors } from "../../../assets/SHDNAColors";
import { graphql, useMutation } from "react-relay";
import { SHDNACreateJournalSubviewMutation } from "../__generated__/SHDNACreateJournalSubviewMutation.graphql";
import { ChallengesType } from "./SHDNAChallengesSubView";
import { useFloatingView } from "../../Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";
import { useSubview } from "../../Components/Subview/SHDNASubviewContext";
import SHDNAText from "../../Components/SHDNAText";

export default function SHDNACreateJournalSubview() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState("PERSONAL_INTEGRITY");

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { popSubviewStack } = useSubview();

  const [commitMutation] = useMutation<SHDNACreateJournalSubviewMutation>(
    graphql`
      mutation SHDNACreateJournalSubviewMutation(
        $title: String!
        $text: String!
        $value: ChallengeType!
      ) {
        createJournal(title: $title, text: $text, value: $value)
      }
    `
  );

  const handleSaveButton = () => {
    openFloatingView(<SHDNALoadingBlackView />, true);
    commitMutation({
      variables: {
        title,
        text,
        value: selectedValue as ChallengesType,
      },
      onCompleted: () => {
        closeFloatingView();
        popSubviewStack();
      },
      onError: () => {
        closeFloatingView();
        popSubviewStack();
      },
    });
  };

  return (
    <View style={styles.content}>
      <View style={styles.inputs}>
        <SHDNATextInput
          placeholder="Write a title for this journal"
          value={title}
          onChange={setTitle}
        />
        <SHDNATextArea
          placeholder="Type something..."
          value={text}
          onChange={setText}
          fixedHeight={225}
        />
        <SHDNAText style={styles.subtitle} fontWeight="SemiBold">
          What value would you associate with this chapter?
        </SHDNAText>
        <View style={styles.grid}>
          {CHALLENGE_SECTIONS.map((value, index) => {
            return (
              <View
                style={styles.value}
                onTouchEnd={() => setSelectedValue(value.type)}
              >
                <Image source={value.logo} style={styles.logo} />
                {value.type === selectedValue && (
                  <View style={styles.roundedCircle} />
                )}
                <SHDNAText
                  style={[styles.valueTitle]}
                  fontWeight={
                    value.type === selectedValue ? "SemiBold" : undefined
                  }
                >
                  {value.title}
                </SHDNAText>
              </View>
            );
          })}
        </View>
      </View>
      <SHDNAButton text="Save" onClick={() => handleSaveButton()} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    gap: Dimensions.get("screen").height / 5 - 75,
  },
  inputs: {
    flex: 1,
    gap: 20,
    marginTop: 10,
  },
  subtitle: { fontSize: 16, fontWeight: "600", color: Colors.Gray3 },
  valueTitle: { fontSize: 12 },
  grid: { flex: 1, flexWrap: "wrap", flexDirection: "row" },
  value: {
    width: "50%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginVertical: 5,
  },
  logo: { width: 35, aspectRatio: 1 / 1 },
  roundedCircle: {
    width: 35,
    aspectRatio: 1 / 1,
    position: "absolute",
    left: 0,
    borderWidth: 3,
    borderColor: Colors.Cyan1,
    borderRadius: 35,
  },
});
