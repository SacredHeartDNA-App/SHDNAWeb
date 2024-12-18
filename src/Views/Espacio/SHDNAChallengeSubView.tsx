import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import SHDNAButton, { ButtonStates } from "../../Components/SHDNAButton";
import { graphql, useFragment, useMutation } from "react-relay";
import { SHDNAChallengeSubView_Fragment$key } from "./__generated__/SHDNAChallengeSubView_Fragment.graphql";
import SHDNAChallengeAnswerManager, {
  AnswerType,
} from "../../Components/Challenges/SHDNAChallengeAnswerManager";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";
import { useFloatingView } from "../../Components/FloatingView/SHDNAFloatingViewContext";
import { MediaType } from "../SHDNACreatePostView";
import { SHDNAChallengeSubViewMutation } from "./__generated__/SHDNAChallengeSubViewMutation.graphql";
import { useSubview } from "../../Components/Subview/SHDNASubviewContext";
import { ChallengeType } from "../../Components/Challenges/SHDNAChallengeBlock";
import SHDNAText from "../../Components/SHDNAText";

type SHDNAChallengeSubViewProps = {
  challengeKey: SHDNAChallengeSubView_Fragment$key;
  challengeType: ChallengeType;
  logo: any;
  isCompleted?: boolean;
};

const SUBMIT_ANSWER_MUTATION = graphql`
  mutation SHDNAChallengeSubViewMutation($input: AnswerInput!) {
    createAnswerChallenge(input: $input)
  }
`;

export default function SHDNAChallengeSubView({
  challengeKey,
  logo,
  challengeType,
  isCompleted = false,
}: SHDNAChallengeSubViewProps) {
  const [files, setFiles] = useState<MediaType[]>([]);
  const [answer, setAnswer] = useState("");

  const { popSubviewStack } = useSubview();

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

  const [commitMutation] = useMutation<SHDNAChallengeSubViewMutation>(
    SUBMIT_ANSWER_MUTATION
  );

  const answerType = AnswerType[data.answerType as keyof typeof AnswerType];

  const { openFloatingView, closeFloatingView } = useFloatingView();

  const manageSubmitAnswer = () => {
    openFloatingView(<SHDNALoadingBlackView />, true);
    commitMutation({
      variables: {
        input: {
          answer,
          media: files,
          challengeId: data.id,
        },
      },
      onCompleted: () => {
        closeFloatingView();
        popSubviewStack();
      },
    });
  };

  return (
    <View style={styles.body}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Image source={logo} style={styles.image} />
          <View style={{ flex: 1 }}>
            <SHDNAText style={styles.title} fontWeight="SemiBold">
              {data.title}
            </SHDNAText>
            <SHDNAText style={styles.subtitle}>{challengeType}</SHDNAText>
          </View>
        </View>
        <SHDNAText style={styles.text}>{data.question}</SHDNAText>
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
      </View>
      <SHDNAButton
        onClick={() => manageSubmitAnswer()}
        text={isCompleted ? "Completed" : "Complete"}
        isDisabled={(answer === "" && files.length === 0) || isCompleted}
        state={ButtonStates.ACTIVE}
      />
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
    height: Dimensions.get("screen").height - 175,
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
});
