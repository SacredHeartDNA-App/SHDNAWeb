import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SHDNAText from "@/src/Components/SHDNAText";
import SHDNATextArea from "@/src/Components/SHDNATextArea";
import SHDNADropdownMenu from "@/src/Components/SHDNADropdownMenu";
import { ChallengeType } from "@/src/Components/Challenges/SHDNAChallengeBlock";
import { AnswerType } from "@/src/Components/Challenges/SHDNAChallengeAnswerManager";
import SHDNATextList from "@/src/Components/SHDNATextList";
import { MediaType } from "../SHDNACreatePostView";
import SHDNAUploadFile from "@/src/Components/SHDNAUploadFile";
import { graphql, useMutation } from "react-relay";
import { SHDNACreateChallengeSubViewMutation } from "./__generated__/SHDNACreateChallengeSubViewMutation.graphql";
import SHDNATextInput from "@/src/Components/SHDNATextInput";
import SHDNAButton, { ButtonStates } from "@/src/Components/SHDNAButton";
import { useFloatingView } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";
import { useSheet } from "@/src/Components/Sheet/SHDNASheetContext";

export default function SHDNACreateChallengeSubView() {
  const [value, setValue] = useState(null);
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answerType, setAnswerType] = useState(null);

  const [answerClose, setAnswerClose] = useState<string[]>([]);
  const [media, setMedia] = useState<MediaType[]>([]);

  const challengesType = Object.entries(ChallengeType).map(([key, value]) => {
    return { label: value, value: key };
  });

  const answerTypes = Object.entries(AnswerType).map(([key, value]) => {
    return {
      label: value
        .replace("_", " ")
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      value: key,
    };
  });

  const [commitMutation] = useMutation<SHDNACreateChallengeSubViewMutation>(
    graphql`
      mutation SHDNACreateChallengeSubViewMutation($input: ChallengeInput!) {
        createChallenge(input: $input)
      }
    `
  );

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { triggerCloseSheet } = useSheet();

  const handleMutation = () => {
    if (!value || !answerType) return;
    openFloatingView(<SHDNALoadingBlackView />);

    let input: any = { title, question, challengeType: value, answerType };

    if (answerType === AnswerType.ANSWER_CLOSE && answerClose) {
      input = { ...input, options: answerClose };
    } else if (answerType === AnswerType.VIEW_MEDIA && media) {
      input = {
        ...input,
        media: media.map((item) => {
          return {
            ...item,
            uri: "./" + item.fileName,
            base64: item.base64.replace(/^data:image\/\w+;base64,/, ""),
          };
        }),
      };
    }

    commitMutation({
      variables: { input },
      onCompleted: () => {
        closeFloatingView();
        triggerCloseSheet();
      },
      onError: () => {
        closeFloatingView();
      },
    });
  };

  const buttonDisable =
    value === null ||
    title === "" ||
    question === "" ||
    answerType === null ||
    (answerType === AnswerType.ANSWER_CLOSE &&
      answerClose.length < 2 &&
      answerClose[0] === "") ||
    (answerType === AnswerType.VIEW_MEDIA && media.length === 0);

  return (
    <View style={styles.body}>
      <View style={[styles.labels, { zIndex: 50 }]}>
        <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
          Value:
        </SHDNAText>
        <View>
          <SHDNADropdownMenu
            value={value}
            options={challengesType}
            placeholder="Select a value"
            onChange={setValue}
            alignment="flex-end"
          />
        </View>
      </View>
      <View style={styles.labels}>
        <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
          Title:
        </SHDNAText>
        <View>
          <SHDNATextInput
            value={title}
            placeholder="Type Title"
            onChange={setTitle}
          />
        </View>
      </View>
      <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
        Question:
      </SHDNAText>
      <SHDNATextArea
        placeholder="Type the question"
        onChange={setQuestion}
        value={question}
      />
      <View style={[styles.labels, { zIndex: 50 }]}>
        <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
          Answer Type:
        </SHDNAText>
        <View>
          <SHDNADropdownMenu
            value={answerType}
            options={answerTypes}
            placeholder="Select an Answer Type"
            onChange={setAnswerType}
            alignment="flex-end"
          />
        </View>
      </View>
      {answerType === AnswerType.ANSWER_CLOSE && (
        <SHDNATextList setItems={setAnswerClose} items={answerClose} />
      )}
      {answerType === AnswerType.VIEW_MEDIA && (
        <SHDNAUploadFile
          selectedFiles={media}
          allowMultiple={false}
          onSelectFiles={(media: MediaType[]) => setMedia(media)}
          type={["image/jpeg", "image/png", "video/mp4"]}
        />
      )}
      <View style={{ paddingTop: 40 }}>
        <SHDNAButton
          state={ButtonStates.ACTIVE}
          text="Create"
          onClick={() => handleMutation()}
          isDisabled={buttonDisable}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    gap: 25,
    paddingTop: 20,
  },
  labels: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});
