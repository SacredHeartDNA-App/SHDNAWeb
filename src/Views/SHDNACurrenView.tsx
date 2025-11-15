import { View, StyleSheet } from "react-native";
import React, { Suspense, useEffect } from "react";
import { Colors } from "../../assets/SHDNAColors";
import useSHDNATokenAuth from "../hooks/useSHDNATokenAuth";
import { useUserData } from "../Context/SHDNAUserContext";
import SHDNASideBar from "../Components/SHDNASideBar";
import { Stack, usePathname, useSegments } from "expo-router";
import SHDNAWebSignIn from "./SHDNAWebSignIn";
import SHDNALoading from "../Components/SHDNALoading";
import { graphql, useMutation } from "react-relay";
import { SHDNACurrenViewMutation } from "./__generated__/SHDNACurrenViewMutation.graphql";

export default function SHDNACurrenView() {
  const { userId, sessionToken } = useUserData();

  const segments = usePathname().split("/");

  console.log(segments);
  if (segments[1] === "lox") {
    return <Stack screenOptions={{ headerShown: false }} />;
  }

  if (sessionToken == null && userId === null) return <LoadingApp />;

  if (userId === "none" || userId === "") {
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

const LoadingApp = () => {
  const { setUserId, setSessionToken } = useUserData();

  const [commitMutation] = useMutation<SHDNACurrenViewMutation>(graphql`
    mutation SHDNACurrenViewMutation($token: String!) {
      verifyToken(token: $token) {
        id
      }
    }
  `);

  const handleToken = (token: string) => {
    commitMutation({
      variables: {
        token,
      },
      onCompleted: (response) => {
        setUserId(response.verifyToken?.id ?? "none");
      },
      onError(error) {
        setUserId("none");
        console.log(error);
      },
    });
  };

  useEffect(() => {
    const fetchToken = async () => {
      const token = "";

      setSessionToken(token);
      handleToken(token);
    };

    setTimeout(() => {
      fetchToken();
    }, 2000);
  }, []);

  return (
    <View style={styles.logoContainer}>
      <SHDNALoading />
    </View>
  );
};

const styles = StyleSheet.create({
  debugTransaltions: {
    position: "absolute",
    top: 50,
    zIndex: 1000,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Background,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
  logoContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});
