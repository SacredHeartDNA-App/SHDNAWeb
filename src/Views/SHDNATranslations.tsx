import React, { Suspense, useState } from "react";
import SHDNAView from "../Components/SHDNAView";
import SHDNAText from "../Components/SHDNAText";
import SHDNAWordBlock, { TextData } from "../Components/SHDNAWordBlock";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "@/assets/SHDNAColors";
import SHDNATransaltionSubview from "./SHDNATranslationSubview";
import SHDNAGroup from "../Components/SHDNAGroup";
import { graphql, useLazyLoadQuery, useQueryLoader } from "react-relay";
import { SHDNATranslationsQuery } from "./__generated__/SHDNATranslationsQuery.graphql";
import SHDNABlock from "../Components/SHDNABlock";
import { SHDNAWordBlock_fragment$key } from "../Components/__generated__/SHDNAWordBlock_fragment.graphql";
import SHDNATranslationsPastSection, {
  PAST_TRANSLATIONS_QUERY,
} from "./SHDNATranslationsPastSection";
import { SHDNATranslationsPastSectionQuery } from "./__generated__/SHDNATranslationsPastSectionQuery.graphql";
import SHDNALoading from "../Components/SHDNALoading";

export default function SHDNATranslations() {
  const [wordSelected, setWordSelected] =
    useState<SHDNAWordBlock_fragment$key | null>(null);

  const data = useLazyLoadQuery<SHDNATranslationsQuery>(
    graphql`
      query SHDNATranslationsQuery {
        getUntranslatedTexts {
          ...SHDNATranslationSubview_fragment
          ...SHDNAWordBlock_fragment
        }
      }
    `,
    {}
  );

  const [queryReference, loadQuery] =
    useQueryLoader<SHDNATranslationsPastSectionQuery>(PAST_TRANSLATIONS_QUERY);

  const translations = data.getUntranslatedTexts ?? [];

  return (
    <SHDNAView title="Translations" scrollEnabled={false}>
      <View style={styles.window}>
        <ScrollView
          style={{ flex: 1, height: "102%", padding: 10, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingBottom: 20 }}>
            <SHDNAText fontWeight="SemiBold" style={{ fontSize: 18 }}>
              Pending Translations
            </SHDNAText>
            <View style={{ gap: 5, marginTop: 10 }}>
              {translations.map((translation) => {
                return (
                  <SHDNAWordBlock
                    textData={translation}
                    onClick={() => setWordSelected(translation)}
                  />
                );
              })}
            </View>
          </View>
          <SHDNAGroup
            text="Past Translations"
            onClick={() => loadQuery({})}
            gap={5}
          >
            {queryReference && (
              <Suspense fallback={<SHDNALoading />}>
                <SHDNATranslationsPastSection
                  queryRef={queryReference}
                  onClick={setWordSelected}
                />
              </Suspense>
            )}
          </SHDNAGroup>
        </ScrollView>
        <View style={styles.middleBar} />
        <View style={{ flex: 1 }}>
          {wordSelected ? (
            <SHDNATransaltionSubview translationKey={wordSelected} />
          ) : (
            <View style={styles.noSelected}>
              <SHDNABlock style={styles.noSelected}>
                <SHDNAText>No Word Selected</SHDNAText>
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
    height: Dimensions.get("screen").height - 200,
  },
  noSelected: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
