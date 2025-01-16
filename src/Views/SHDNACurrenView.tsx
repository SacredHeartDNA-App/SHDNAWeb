import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import SHDNAHomeView from "./SHDNAHomeView";
import SHDNACommunityView from "./SHDNACommunityView";
import SHDNAPassportView from "./Espacio/SHDNAPassportView";
import SHDNAEspacioView from "./Espacio/SHDNAEspacioView";
import { SHDNAMeView } from "./SHDNAMeView";
import { Colors } from "../../assets/SHDNAColors";
import useSHDNATokenAuth from "../hooks/useSHDNATokenAuth";
import useSHDNAKeychain from "../hooks/useSHDNAKeychain";
import { useUserData } from "../Context/SHDNAUserContext";
import SHDNASideBar from "../Components/SHDNASideBar";
import { Stack } from "expo-router";
import SHDNAWebSignIn from "./SHDNAWebSignIn";

export default function SHDNACurrenView() {
  const { userId } = useUserData();

  if (!userId) {
    return (
      <View style={styles.content}>
        <SHDNAWebSignIn />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: Colors.Background,
      }}
    >
      <SHDNASideBar />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const TokenAuthWrapper = ({ token, handleToken }: any) => {
  const sessionId = useSHDNATokenAuth(token);
  const { setUserId } = useUserData();

  useEffect(() => {
    setUserId(sessionId ?? "none");
  }, [sessionId]);

  return <View />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Background,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.Background,
  },
});
