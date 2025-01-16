import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SHDNAMediaBlock from "../../Components/SHDNAMediaBlock";
import SHDNAText from "../../Components/SHDNAText";
import { graphql, useLazyLoadQuery } from "react-relay";
import { SHDNAMeditationsViewQuery } from "./__generated__/SHDNAMeditationsViewQuery.graphql";
import { SHDNAMeditationSubview_fragmment$key } from "./__generated__/SHDNAMeditationSubview_fragmment.graphql";

type SHDNAMeditationsViewProps = {
  setSelectedMeditation: (data: SHDNAMeditationSubview_fragmment$key) => void;
};

export default function SHDNAMeditationsView({
  setSelectedMeditation,
}: SHDNAMeditationsViewProps) {
  const data = useLazyLoadQuery<SHDNAMeditationsViewQuery>(
    graphql`
      query SHDNAMeditationsViewQuery {
        getMeditations {
          ...SHDNAMediaBlock_fragmment
        }
      }
    `,
    {}
  );

  const meditations = data.getMeditations ?? [];

  return (
    <View>
      <SHDNAText style={styles.subtitle} fontWeight="SemiBold">
        New!
      </SHDNAText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.mediaList}
      >
        {meditations.map((meditation, index) => {
          return (
            <SHDNAMediaBlock
              key={index + "NewMeditation"}
              meditationKey={meditation}
              onClick={setSelectedMeditation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mediaList: {
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});
