import { View, Text } from "react-native";
import React, { Suspense } from "react";
import SHDNAChallengeBlock from "../../Components/Challenges/SHDNAChallengeBlock";
import SHDNAGroup from "../../Components/SHDNAGroup";
import {
  graphql,
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { SHDNAChallengesSubViewQuery } from "./__generated__/SHDNAChallengesSubViewQuery.graphql";
import { SHDNAChallengesSubViewCompletedQuery } from "./__generated__/SHDNAChallengesSubViewCompletedQuery.graphql";
import SHDNALoading from "../../Components/SHDNALoading";
import SHDNAText from "../../Components/SHDNAText";

const COMPLETED_CHALLENGES = graphql`
  query SHDNAChallengesSubViewCompletedQuery($type: ChallengeType!) {
    getCompletedChallenges(type: $type) {
      ...SHDNAChallengeBlock_Fragment
    }
  }
`;

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
        getMissingChallenges(type: $type) {
          ...SHDNAChallengeBlock_Fragment
        }
      }
    `,
    { type }
  );

  const [queryReference, loadQuery] =
    useQueryLoader<SHDNAChallengesSubViewCompletedQuery>(COMPLETED_CHALLENGES);

  const challenges = data.getMissingChallenges ?? [];

  return (
    <View style={{ marginBottom: 30 }}>
      <SHDNAGroup text="Completed" gap={20} onClick={() => loadQuery({ type })}>
        {queryReference ? (
          <Suspense fallback={<SHDNALoading />}>
            <CompletedChallenges queryReference={queryReference} />
          </Suspense>
        ) : (
          <SHDNALoading />
        )}
      </SHDNAGroup>
      <View style={{ gap: 20 }}>
        {challenges.length > 0 ? (
          challenges.map((challenge) => {
            return <SHDNAChallengeBlock challengeKey={challenge} />;
          })
        ) : (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <SHDNAText>No Challenges Pending</SHDNAText>
          </View>
        )}
      </View>
    </View>
  );
}

const CompletedChallenges = ({
  queryReference,
}: {
  queryReference: PreloadedQuery<SHDNAChallengesSubViewCompletedQuery>;
}) => {
  const data = usePreloadedQuery<SHDNAChallengesSubViewCompletedQuery>(
    COMPLETED_CHALLENGES,
    queryReference
  );

  const challenges = data.getCompletedChallenges ?? [];

  return (
    <>
      {challenges.length > 0 ? (
        challenges.map((challenge) => {
          return (
            <SHDNAChallengeBlock challengeKey={challenge} isCompleted={true} />
          );
        })
      ) : (
        <View style={{ alignItems: "center" }}>
          <SHDNAText>No Challenges Completed</SHDNAText>
        </View>
      )}
    </>
  );
};
