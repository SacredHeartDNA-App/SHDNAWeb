import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import * as Linking from "expo-linking";
import SHDNAText from "@/src/Components/SHDNAText";
import { isIOSWeb } from "./confirmedEmail";
import { Colors } from "@/assets/SHDNAColors";

const APK_URL =
  "https://euijwuwbczxgtqisbump.supabase.co/storage/v1/object/public/build/application-598df335-83b5-4b08-afb3-38ddc8673d7e.apk";

const SHDNAWelcomeInvitationScreen = () => {
  if (isIOSWeb) {
    return <IOSView />;
  } else {
    return <AndroidView />;
  }
};

const IOSView = () => {
  const APP_STORE_URL =
    "https://apps.apple.com/us/app/sacredheartdna/id6744028554";

  const DEEP_LINK_IOS = "shdnaapp://userInvitation";

  const handleOpenStore = async () => {
    try {
      await Linking.openURL(APP_STORE_URL);
    } catch (e) {
      console.warn("Error opening App Store link:", e);
    }
  };

  const handleOpenApp = async () => {
    try {
      await Linking.openURL(DEEP_LINK_IOS);
    } catch (e) {
      console.warn("Error opening deep link:", e);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <View style={styles.left}>
          <Text
            style={[
              styles.tag,
              { backgroundColor: Colors.LightBlue1, color: Colors.Blue1 },
            ]}
          >
            iOS Only!
          </Text>

          <SHDNAText style={styles.title}>
            Welcome to the SacredHeartDNA Community
          </SHDNAText>

          <SHDNAText style={styles.subtitle}>
            Thank you for joining the SacredHeartDNA community. You can download
            SacredHeartDNA from the App Store and start your journey.
          </SHDNAText>

          <View style={styles.bulletList}>
            <SHDNAText style={styles.bullet}>
              • Go to the App Store page.
            </SHDNAText>
            <SHDNAText style={styles.bullet}>
              • Install the SacredHeartDNA App on your device.
            </SHDNAText>
            <SHDNAText style={styles.bullet}>
              • If the app is already installed, tap the button below to open
              it.
            </SHDNAText>
          </View>

          {/* Primary button → App Store */}
          <Pressable style={styles.button} onPress={handleOpenStore}>
            <SHDNAText style={styles.buttonLabel}>
              Go to the App Store
            </SHDNAText>
          </Pressable>

          {/* Secondary button → Open the app */}
          <SHDNAText style={styles.helperText}>
            Already installed the SacredHeartDNA App?, Click here to start the
            registration process
          </SHDNAText>

          <Pressable style={styles.button2} onPress={handleOpenApp}>
            <SHDNAText style={styles.buttonLabel}>
              Open SacredHeartDNA App
            </SHDNAText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const AndroidView = () => {
  const URL_ANDROID =
    "intent://userInvitation#Intent;scheme=shdnaapp;package=com.sacredheartdnaapp.shdnamobileapp;end";

  const handleDownload = async () => {
    try {
      await Linking.openURL(APK_URL);
    } catch (e) {
      console.warn("Error opening APK link:", e);
    }
  };

  const handleOpenApp = async () => {
    try {
      await Linking.openURL(URL_ANDROID);
    } catch (e) {
      console.warn("Error opening APK link:", e);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <View style={styles.left}>
          <Text style={styles.tag}>Android only!</Text>
          <SHDNAText style={styles.title}>
            Welcome to the SacredHeartDNA Community
          </SHDNAText>

          <SHDNAText style={styles.subtitle}>
            Thank you for joining the SacredHeartDNA community. Here you can
            install the Android version of the app and start using it on your
            device.
          </SHDNAText>

          <View style={styles.bulletList}>
            <SHDNAText style={styles.bullet}>
              • Download the APK file.
            </SHDNAText>
            <SHDNAText style={styles.bullet}>
              • Open it on your Android device to install the app.
            </SHDNAText>
            <SHDNAText style={styles.bullet}>
              • If your phone asks for it, enable the option to install apps
              from unknown sources.
            </SHDNAText>
          </View>

          <Pressable style={styles.button} onPress={handleDownload}>
            <SHDNAText style={styles.buttonLabel}>
              Download the SacredHeartDNA App!
            </SHDNAText>
          </Pressable>
          <SHDNAText style={styles.helperText}>
            Already installed the SacredHeartDNA App?, Click here to start the
            registration process
          </SHDNAText>
          <Pressable style={styles.button2} onPress={handleOpenApp}>
            <SHDNAText style={styles.buttonLabel}>
              Open the SacredHeartDNA App!
            </SHDNAText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SHDNAWelcomeInvitationScreen;

const colors = {
  red: "#AB023B",
  redSoft: "#FBE9F0",
  blue: "#114A8A",
  gray: "#938990",
  white: "#FFFFFF",
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.redSoft,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: colors.white,
    width: "100%",
    maxWidth: 960,
    borderRadius: 18,
    paddingVertical: 32,
    paddingHorizontal: 28,
    flexDirection: "row",
    flexWrap: "wrap",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 5,
  },
  left: {
    flex: 2,
    minWidth: 260,
    paddingRight: 12,
    marginBottom: 16,
  },
  right: {
    flex: 1,
    minWidth: 220,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  tag: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: colors.redSoft,
    color: colors.red,
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.red,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.gray,
    lineHeight: 22,
    marginBottom: 16,
  },
  bulletList: {
    marginBottom: 20,
  },
  bullet: {
    fontSize: 14,
    color: "#4A4A4A",
    marginBottom: 4,
  },
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  button2: {
    backgroundColor: colors.red,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  buttonLabel: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 15,
  },
  helperText: {
    fontSize: 11,
    color: colors.gray,
    marginVertical: 15,
    marginLeft: 10,
  },
  badge: {
    backgroundColor: colors.red,
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 18,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    maxWidth: 260,
  },
  badgeTitle: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 6,
  },
  badgeText: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 19,
    opacity: 0.9,
  },
});
