import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import SHDNAHomeView from "./SHDNAHomeView";
import SHDNACommunityView from "./SHDNACommunityView";
import SHDNAPassportView from "./Espacio/SHDNAPassportView";
import SHDNAEspacioView from "./Espacio/SHDNAEspacioView";
import { SHDNAMeView } from "./SHDNAMeView";
import SHDNABottomBar from "../Components/SHDNASideBar";
import SHDNALoading from "../Components/SHDNALoading";
import { Colors } from "../../assets/SHDNAColors";
import SHDNASignIn from "./SHDNASignIn";
import useSHDNATokenAuth from "../hooks/useSHDNATokenAuth";
import useSHDNAKeychain from "../hooks/useSHDNAKeychain";
import { useUserData } from "../Context/SHDNAUserContext";

export default function SHDNACurrenView() {
  const [optionSelected, setOptionSelected] = useState<number>(0);

  const { userId, sessionToken } = useUserData();
  const { getSessionToken } = useSHDNAKeychain();

  const CurrentView = () => {
    switch (optionSelected) {
      case 0:
        return <SHDNAHomeView />;
      case 1:
        return <SHDNACommunityView />;
      case 2:
        return <SHDNAPassportView />;
      case 3:
        return <SHDNAEspacioView />;
      case 4:
        return <SHDNAMeView />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      await getSessionToken();
    };

    fetchToken();
  }, []);

  if (sessionToken && userId === null) {
    return <TokenAuthWrapper token={sessionToken} />;
  }

  if (userId === "none" || sessionToken == "") {
    return (
      <View style={styles.content}>
        <SHDNASignIn />
      </View>
    );
  }

  return (
    <>
      <View style={styles.content}>
        <React.Suspense fallback={<SHDNALoading />}>
          <CurrentView />
        </React.Suspense>
      </View>
      <SHDNABottomBar
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
      />
    </>
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
  },
});
