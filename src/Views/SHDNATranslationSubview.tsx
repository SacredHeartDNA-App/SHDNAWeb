import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import SHDNABlock from "../Components/SHDNABlock";
import SHDNAText from "../Components/SHDNAText";
import { Colors } from "@/assets/SHDNAColors";
import FlagSpain from "@/assets/RNSvgs/FlagSpain";
import FlagPolish from "@/assets/RNSvgs/FlagPolish";
import SHDNATextInput from "../Components/SHDNATextInput";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import { graphql, useFragment, useMutation } from "react-relay";
import { SHDNATranslationSubviewMutation } from "./__generated__/SHDNATranslationSubviewMutation.graphql";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";

type SHDNATransaltionSubview = {
  translationKey: any;
};

export default function SHDNATranslationSubview({
  translationKey,
}: SHDNATransaltionSubview) {
  const { openFloatingView, closeFloatingView } = useFloatingView();

  const data = useFragment(
    graphql`
      fragment SHDNATranslationSubview_fragment on Translation {
        id
        text
        es_t
        pl_t
        description
      }
    `,
    translationKey
  );

  const [spanish, setSpanish] = useState(data.es_t ?? "");
  const [polish, setPolish] = useState(data.pl_t ?? "");

  useEffect(() => {
    setSpanish(data.es_t ?? "");
    setPolish(data.pl_t ?? "");
  }, [data]);

  const [commitMutation] = useMutation<SHDNATranslationSubviewMutation>(
    graphql`
      mutation SHDNATranslationSubviewMutation($text: UpdateTranslationInput!) {
        updateTranslation(text: $text)
      }
    `
  );

  const handleMutation = () => {
    openFloatingView(<SHDNALoadingBlackView />);
    console.log(data.id);
    commitMutation({
      variables: { text: { id: data.id, es_t: spanish, pl_t: polish } },
      onCompleted: () => {
        closeFloatingView();
      },
      onError: (error) => {
        closeFloatingView();
        console.log(error);
      },
    });
  };

  const buttonDisabled =
    (spanish === "" || spanish === data.es_t) &&
    (polish === "" || polish === data.pl_t);

  return (
    <View style={styles.wrapper}>
      <SHDNABlock style={styles.block}>
        <View>
          <SHDNAText fontWeight="SemiBold" style={{ fontSize: 24 }}>
            {data.text}
          </SHDNAText>
          <SHDNAText
            fontWeight="Regular"
            style={{ fontSize: 16, marginTop: 10 }}
          >
            {data.description}
          </SHDNAText>
          <SHDNAText
            fontWeight="SemiBold"
            style={{ fontSize: 24, color: Colors.Gray3, marginTop: 20 }}
          >
            Translations:
          </SHDNAText>
          <View style={styles.row}>
            <FlagSpain />
            <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
              Spanish
            </SHDNAText>
          </View>
          <SHDNATextInput
            value={spanish}
            onChange={setSpanish}
            placeholder="Translation"
          />
          <View style={styles.row}>
            <FlagPolish />
            <SHDNAText fontWeight="SemiBold" style={{ fontSize: 20 }}>
              Polish
            </SHDNAText>
          </View>
          <SHDNATextInput
            value={polish}
            onChange={setPolish}
            placeholder="Translation"
          />
        </View>
        <View>
          <SHDNAButton
            text="Save Changes"
            onClick={() => handleMutation()}
            isDisabled={buttonDisabled}
            state={ButtonStates.ACTIVE}
          />
        </View>
      </SHDNABlock>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  block: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    marginTop: 15,
  },
});
