import { View } from "react-native";
import { SHDNAChallengeAnswerClose_Fragment$key } from "../__generated__/SHDNAChallengeAnswerClose_Fragment.graphql";
import { graphql, useFragment } from "react-relay";
import { useState } from "react";
import SHDNAOptions from "../SHDNAOptions";

type SHDNAChallengeAnswerClose = {
  challengeKey: SHDNAChallengeAnswerClose_Fragment$key;
  onChange: (value: string) => void;
};

const SHDNAChallengeAnswerClose = ({
  challengeKey,
  onChange,
}: SHDNAChallengeAnswerClose) => {
  const [answerSelected, setAnswerSelected] = useState("");
  const data = useFragment<SHDNAChallengeAnswerClose_Fragment$key>(
    graphql`
      fragment SHDNAChallengeAnswerClose_Fragment on Challenge {
        options
      }
    `,
    challengeKey
  );

  const options = data.options ?? [];

  return (
    <View style={{ flex: 1 }}>
      <SHDNAOptions
        options={options}
        onChange={(value: string) => {
          setAnswerSelected(value);
          onChange(value);
        }}
        value={answerSelected}
      />
    </View>
  );
};

export default SHDNAChallengeAnswerClose;
