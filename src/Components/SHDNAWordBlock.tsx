import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/assets/SHDNAColors";
import SHDNAText from "./SHDNAText";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import DirectionalSVG from "@/assets/RNSvgs/DirectionalSVG";
import FlagPolish from "@/assets/RNSvgs/FlagPolish";
import FlagSpain from "@/assets/RNSvgs/FlagSpain";
import { graphql, useFragment } from "react-relay";
import { SHDNAWordBlock_fragment$key } from "./__generated__/SHDNAWordBlock_fragment.graphql";

export interface TextData {
  text: string;
  es_t: string | null | undefined;
  pl_t: string | null | undefined;
}

type SHDNAWordBlockType = {
  textData: SHDNAWordBlock_fragment$key;
  onClick: () => void;
};

export default function SHDNAWordBlock({
  textData,
  onClick,
}: SHDNAWordBlockType) {
  const data = useFragment(
    graphql`
      fragment SHDNAWordBlock_fragment on Translation {
        text
        es_t
        pl_t
      }
    `,
    textData
  );

  return (
    <Pressable style={styles.block} onPress={() => onClick()}>
      <SHDNAText style={{ fontSize: 16 }}>{data.text}</SHDNAText>
      <View style={styles.rightSide}>
        {(!data.pl_t || data.pl_t === "") && <FlagPolish />}
        {(!data.es_t || data.es_t === "") && <FlagSpain />}
        <SHDNAButton
          Icon={DirectionalSVG}
          onClick={() => {}}
          state={ButtonStates.TRANSPARENT}
          iconSize={10}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Gray2,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
  },
  rightSide: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
