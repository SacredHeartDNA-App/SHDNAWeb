import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SHDNAMediaBlock from "../../Components/SHDNAMediaBlock";
import SHDNAJournal from "../../Components/Journal/SHDNAJournal";
import SHDNAText from "../../Components/SHDNAText";

export default function SHDNAMeditationsView() {
  return (
    <View>
      <SHDNAJournal />
      <SHDNAText style={styles.subtitle} fontWeight="SemiBold">
        New!
      </SHDNAText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.mediaList}
      >
        {[0, 1, 2, 3].map((i) => {
          return <SHDNAMediaBlock key={i} isNew={(i + 1) % 2 == 0} />;
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
