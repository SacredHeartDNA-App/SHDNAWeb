import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SHDNAText from "../Components/SHDNAText";
import SHDNAImage from "../Components/SHDNAImage";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";

type SHDNAConfirmEmailSubviewProps = {
  email: string;
};

export default function SHDNAConfirmEmailSubview({
  email,
}: SHDNAConfirmEmailSubviewProps) {
  const { popSubviewStack } = useSubview();
  return (
    <View style={styles.wrapper}>
      <SHDNAText style={styles.upperText} fontWeight="Bold">
        An Email should have arrived to you inbox "{email}"
      </SHDNAText>
      <SHDNAImage
        source={require("../../assets/imgs/mailbox.png")}
        width={100}
        height={100}
        style={{ width: 100, aspectRatio: 1 / 1 }}
      />
      <SHDNAText style={styles.pleaseText}>
        Please confirm you account before Sign In.
      </SHDNAText>
      <View style={{ width: "100%" }}>
        <SHDNAButton
          text="Close"
          onClick={() => popSubviewStack()}
          state={ButtonStates.ALERT}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upperText: {
    textAlign: "center",
    fontSize: 16,
  },
  wrapper: {
    height: "100%",
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  pleaseText: {
    fontSize: 16,
  },
});
