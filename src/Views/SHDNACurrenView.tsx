import { View, StyleSheet } from "react-native";
import React, { Suspense, useEffect } from "react";
import { Colors } from "../../assets/SHDNAColors";
import useSHDNATokenAuth from "../hooks/useSHDNATokenAuth";
import { useUserData } from "../Context/SHDNAUserContext";
import SHDNASideBar from "../Components/SHDNASideBar";
import { Stack } from "expo-router";
import SHDNAWebSignIn from "./SHDNAWebSignIn";
import SHDNALoading from "../Components/SHDNALoading";

export default function SHDNACurrenView() {
  const { userId } = useUserData();

  if (userId === null) {
    return (
      <Suspense
        fallback={
          <View
            style={{
              height: "100%",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <SHDNALoading />
          </View>
        }
      >
        <TokenAuthWrapper />
      </Suspense>
    );
  }

  if (userId === "none") {
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

const TokenAuthWrapper = () => {
  const sessionId = useSHDNATokenAuth();
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
