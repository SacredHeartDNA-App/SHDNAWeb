import { View, Text } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import SHDNAWordBlock from "../Components/SHDNAWordBlock";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { SHDNATranslationsPastSectionQuery } from "./__generated__/SHDNATranslationsPastSectionQuery.graphql";
import SHDNAText from "../Components/SHDNAText";
import { SHDNAWordBlock_fragment$key } from "../Components/__generated__/SHDNAWordBlock_fragment.graphql";

type SHDNATranslationsPastSectionProps = {
  queryRef: PreloadedQuery<SHDNATranslationsPastSectionQuery>;
  onClick: Dispatch<SetStateAction<SHDNAWordBlock_fragment$key | null>>;
};

export const PAST_TRANSLATIONS_QUERY = graphql`
  query SHDNATranslationsPastSectionQuery {
    getPastTranslations {
      ...SHDNAWordBlock_fragment
      ...SHDNATranslationSubview_fragment
    }
  }
`;

export default function SHDNATranslationsPastSection({
  queryRef,
  onClick,
}: SHDNATranslationsPastSectionProps) {
  const data = usePreloadedQuery<SHDNATranslationsPastSectionQuery>(
    PAST_TRANSLATIONS_QUERY,
    queryRef
  );

  const completedTranslations = data.getPastTranslations ?? [];

  if (completedTranslations.length === 0) {
    return <SHDNAText>No translations completed</SHDNAText>;
  }

  return (
    <>
      {completedTranslations.map((translation) => {
        return (
          <SHDNAWordBlock
            textData={translation}
            onClick={() => onClick(translation)}
          />
        );
      })}
    </>
  );
}
