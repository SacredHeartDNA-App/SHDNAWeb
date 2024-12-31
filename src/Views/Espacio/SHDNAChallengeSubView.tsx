import { View, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { graphql, useFragment, useMutation } from "react-relay";
import { SHDNAChallengeSubView_Fragment$key } from "./__generated__/SHDNAChallengeSubView_Fragment.graphql";
import SHDNAChallengeAnswerManager, {
  AnswerType,
} from "../../Components/Challenges/SHDNAChallengeAnswerManager";
import { MediaType } from "../SHDNACreatePostView";
import { ChallengeType } from "../../Components/Challenges/SHDNAChallengeBlock";
import SHDNAText from "../../Components/SHDNAText";
import SHDNAButton, { ButtonStates } from "@/src/Components/SHDNAButton";
import SHDNATextArea from "@/src/Components/SHDNATextArea";
import SHDNATextInput from "@/src/Components/SHDNATextInput";
import { SHDNAChallengeSubViewMutation } from "./__generated__/SHDNAChallengeSubViewMutation.graphql";
import { useSheet } from "@/src/Components/Sheet/SHDNASheetContext";
import { useFloatingView } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";

type SHDNAChallengeSubViewProps = {
  challengeKey: SHDNAChallengeSubView_Fragment$key;
  challengeType: ChallengeType;
  logo: any;
  isCompleted?: boolean;
};

export default function SHDNAChallengeSubView({
  challengeKey,
  logo,
  challengeType,
}: SHDNAChallengeSubViewProps) {
  const [files, setFiles] = useState<MediaType[]>([]);
  const [answer, setAnswer] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const data = useFragment<SHDNAChallengeSubView_Fragment$key>(
    graphql`
      fragment SHDNAChallengeSubView_Fragment on Challenge {
        id
        title
        challengeType
        question
        answerType
        ...SHDNAChallengeAnswerClose_Fragment
      }
    `,
    challengeKey
  );

  const [text, setText] = useState(data.question);
  const [title, setTitle] = useState(data.title);

  const { triggerCloseSheet } = useSheet();
  const { openFloatingView, closeFloatingView } = useFloatingView();

  const answerType = AnswerType[data.answerType as keyof typeof AnswerType];

  const [commitMutation] = useMutation<SHDNAChallengeSubViewMutation>(graphql`
    mutation SHDNAChallengeSubViewMutation(
      $challengeId: ID!
      $title: String
      $question: String
    ) {
      updateChallenge(id: $challengeId, title: $title, question: $question)
    }
  `);

  const handleEditChallenge = () => {
    openFloatingView(<SHDNALoadingBlackView />);

    const variables = {
      challengeId: data.id,
      title: title,
      question: text,
    };
    commitMutation({
      variables,
      onCompleted: () => {
        triggerCloseSheet();
        closeFloatingView();
      },
    });
  };

  const isDifferent = title !== data.title || text !== data.question;

  return (
    <View style={styles.body}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Image source={logo} style={styles.image} />
          <View style={{ flex: 1 }}>
            {isEditMode ? (
              <View style={(styles.title, { height: 30, marginBottom: 5 })}>
                <SHDNATextInput value={title} onChange={setTitle} />
              </View>
            ) : (
              <SHDNAText style={styles.title} fontWeight="SemiBold">
                {data.title}
              </SHDNAText>
            )}
            <SHDNAText style={styles.subtitle}>{challengeType}</SHDNAText>
          </View>
        </View>
        {isEditMode ? (
          <View style={{ marginVertical: 15 }}>
            <SHDNATextArea value={text} onChange={setText} />
          </View>
        ) : (
          <SHDNAText style={styles.text}>{data.question}</SHDNAText>
        )}
        {!isEditMode && (
          <SHDNAChallengeAnswerManager
            onChange={(input: string | MediaType[]) => {
              if (typeof input === "string") {
                setAnswer(input);
              } else {
                setFiles(input);
              }
            }}
            challengeKey={data}
            type={answerType}
          />
        )}
      </View>
      <View style={styles.buttonsWrapper}>
        <SHDNAButton
          text={isEditMode ? (isDifferent ? "Save" : "Exit") : "Edit Text"}
          onClick={() => {
            if (isEditMode) {
              if (isDifferent) {
                handleEditChallenge();
              } else {
                setIsEditMode(!isEditMode);
              }
            } else {
              setIsEditMode(!isEditMode);
            }
          }}
          state={
            isEditMode
              ? isDifferent
                ? ButtonStates.ACTIVE
                : ButtonStates.DEFAULT
              : ButtonStates.SECONDARY
          }
        />
        {!isEditMode && (
          <SHDNAButton
            text="Delete Challenge"
            onClick={() => {}}
            state={ButtonStates.ALERT}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  body: {
    flex: 1,
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20,
    lineHeight: 30,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75,
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
  },
  buttonsWrapper: {
    gap: 15,
    marginTop: 25,
  },
});
