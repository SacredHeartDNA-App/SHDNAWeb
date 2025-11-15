import { View, Image, StyleSheet, Linking } from "react-native";
import React from "react";
import SHDNAButton from "@/src/Components/SHDNAButton";
import SHDNAText from "@/src/Components/SHDNAText";
import { Colors } from "@/assets/SHDNAColors";

export default function ConfirmedEmail() {
  const handleOpenURL = async () => {
    const url = "shdnaapp://";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.body}>
      <SHDNAText
        fontWeight="Bold"
        style={{ fontSize: 24, textAlign: "center" }}
      >
        You are all set!
      </SHDNAText>
      <View>
        <SHDNAText style={{ fontSize: 16, textAlign: "center" }}>
          Your email address has been confirmed.
        </SHDNAText>
        <SHDNAText style={{ fontSize: 16, textAlign: "center" }}>
          Please return to the SacredHeartDNA App and log in to continue.
        </SHDNAText>
      </View>
      <View style={{ width: 200 }}>
        <SHDNAButton text="Open App" onClick={() => handleOpenURL()} />
      </View>
      <Image
        source={require("../../assets/imgs/sacredheartDNA_Iso.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
    padding: 50,
    backgroundColor: Colors.Background,
  },
  logo: {
    width: 130,
    height: 100,
    objectFit: "contain",
    alignSelf: "center",
    position: "absolute",
    bottom: 75,
  },
});
