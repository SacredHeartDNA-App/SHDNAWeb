import { ScrollView } from "react-native";
import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import SHDNAMediaBlock from "@/src/Components/SHDNAMediaBlock";
import { SHDNAMeditationsRowQuery } from "./__generated__/SHDNAMeditationsRowQuery.graphql";

type SHDNAMeditationsRowType = {
  ids: readonly string[];
};

export default function SHDNAMeditationsRow({ ids }: SHDNAMeditationsRowType) {
  const data = useLazyLoadQuery<SHDNAMeditationsRowQuery>(
    graphql`
      query SHDNAMeditationsRowQuery($ids: [String!]) {
        getMeditationsById(ids: $ids) {
          ...SHDNAMediaBlock_fragmment
        }
      }
    `,
    { ids }
  );

  const meditations = data.getMeditationsById ?? [];

  return (
    <ScrollView>
      {meditations.map((meditation) => {
        return (
          <SHDNAMediaBlock meditationKey={meditation} onClick={() => {}} />
        );
      })}
    </ScrollView>
  );
}
