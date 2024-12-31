import { View } from "react-native";
import React from "react";
import SHDNAChallengeBlock from "../../Components/Challenges/SHDNAChallengeBlock";
import { graphql, useLazyLoadQuery } from "react-relay";
import { SHDNAChallengesSubViewQuery } from "./__generated__/SHDNAChallengesSubViewQuery.graphql";
import SHDNAText from "../../Components/SHDNAText";

export type ChallengesType =
  | "PERSONAL_INTEGRITY"
  | "SPIRITUALITY"
  | "BELONGING_COMMUNITY"
  | "ACTIVE_CITIZENSHIP"
  | "TRANSFORMATIVE_ACTION";

export default function SHDNAChallengesSubView({
  type,
}: {
  type: ChallengesType;
}) {
  const data = useLazyLoadQuery<SHDNAChallengesSubViewQuery>(
    graphql`
      query SHDNAChallengesSubViewQuery($type: ChallengeType!) {
        getAllChallenges(type: $type) {
          ...SHDNAChallengeBlock_Fragment
        }
      }
    `,
    { type }
  );

  const challenges = data.getAllChallenges ?? [];

  return (
    <View style={{ marginBottom: 30, flex: 1 }}>
      <View style={{ gap: 20, flex: 1, paddingTop: 10, paddingRight: 10 }}>
        {challenges.length > 0 ? (
          challenges.map((challenge) => {
            return <SHDNAChallengeBlock challengeKey={challenge} />;
          })
        ) : (
          <View
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <SHDNAText>No Challenges</SHDNAText>
          </View>
        )}
      </View>
    </View>
  );
}
