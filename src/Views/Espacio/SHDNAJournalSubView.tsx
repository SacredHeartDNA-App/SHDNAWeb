import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { graphql, useFragment } from "react-relay";
import { SHDNAJournalSubView_Fragment$key } from "./__generated__/SHDNAJournalSubView_Fragment.graphql";
import SHDNAText from "../../Components/SHDNAText";

type SHDNAJournalSubViewProps = {
  journalKey: SHDNAJournalSubView_Fragment$key;
};

export default function SHDNAJournalSubView({
  journalKey,
}: SHDNAJournalSubViewProps) {
  const data = useFragment<SHDNAJournalSubView_Fragment$key>(
    graphql`
      fragment SHDNAJournalSubView_Fragment on Journal {
        text
      }
    `,
    journalKey
  );

  return (
    <View>
      <SHDNAText style={styles.text}>{data.text}</SHDNAText>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    padding: 5,
    paddingTop: 10,
    lineHeight: 25,
  },
});
