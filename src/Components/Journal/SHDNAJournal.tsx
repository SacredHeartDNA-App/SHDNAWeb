import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SHDNAJournalBlock from "./SHDNAJournalBlock";
import AddSVG from "../../../assets/RNSvgs/AddSVG";
import { Colors } from "../../../assets/SHDNAColors";
import { useSubview } from "../Subview/SHDNASubviewContext";
import SHDNABlock from "../SHDNABlock";
import SHDNACreateJournalSubview from "../../Views/Espacio/SHDNACreateJournalSubview";
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import { SHDNAJournalQuery } from "./__generated__/SHDNAJournalQuery.graphql";
import SHDNAText from "../SHDNAText";

export default function SHDNAJournal() {
  const data = useLazyLoadQuery<SHDNAJournalQuery>(
    graphql`
      query SHDNAJournalQuery {
        getJournals {
          ...SHDNAJournalBlock_Fragment
        }
      }
    `,
    {}
  );

  const journals = data.getJournals ?? [];

  return (
    <View>
      <SHDNAText fontWeight="SemiBold" style={styles.subtitle}>
        Journal
      </SHDNAText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalList}>
          <AddJournal />
          {journals.map((journal, i) => {
            return <SHDNAJournalBlock journalKey={journal} key={i} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const AddJournal = () => {
  const { openSubview } = useSubview();

  return (
    <SHDNABlock
      style={styles.addJournal}
      onClick={() =>
        openSubview("Create new Journal", <SHDNACreateJournalSubview />)
      }
    >
      <AddSVG width={30} iconColor={Colors.Purple1} />
    </SHDNABlock>
  );
};

const styles = StyleSheet.create({
  horizontalList: {
    flexDirection: "row",
    gap: 15,
    paddingVertical: 15,
  },
  addJournal: {
    width: 110,
    height: 150,
    backgroundColor: Colors.Purple2,
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: Colors.Purple1,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 18,
  },
});
