import { View, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import SHDNABlock from "../Components/SHDNABlock";
import SHDNAText from "../Components/SHDNAText";
import SHDNATextInput from "../Components/SHDNATextInput";
import { Colors } from "@/assets/SHDNAColors";
import SHDNAButton from "../Components/SHDNAButton";
import { graphql, useMutation } from "react-relay";
import { SHDNAWebSignInMutation } from "./__generated__/SHDNAWebSignInMutation.graphql";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import { useUserData } from "../Context/SHDNAUserContext";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";

export default function SHDNAWebSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserId } = useUserData();
  const { openFloatingView, closeFloatingView } = useFloatingView();

  const [commitMutation] = useMutation<SHDNAWebSignInMutation>(graphql`
    mutation SHDNAWebSignInMutation($email: String!, $password: String!) {
      signIn(email: $email, password: $password) {
        user {
          id
        }
        authToken
      }
    }
  `);

  const handleMutation = () => {
    const variables = {
      email,
      password,
      adminOnly: true,
    };
    openFloatingView(<SHDNALoadingBlackView />);
    commitMutation({
      variables,
      onCompleted(response) {
        if (response) {
          setUserId(response.signIn.user.id);
          closeFloatingView();
          return;
        }
      },
      onError(error) {
        console.log(error);
        closeFloatingView();
      },
    });
  };

  return (
    <View style={styles.container}>
      <SHDNABlock style={{ width: "30%" }}>
        <View style={styles.wrapper}>
          <SHDNAText style={[styles.title]} fontWeight="SemiBold">
            Welcome!
          </SHDNAText>
          <View style={styles.inputs}>
            <View style={styles.label}>
              <SHDNAText style={styles.labelText} fontWeight="SemiBold">
                Email:
              </SHDNAText>
              <SHDNATextInput
                value={email}
                onChange={setEmail}
                placeholder="example@example.com"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.label}>
              <SHDNAText style={styles.labelText} fontWeight="SemiBold">
                Password:
              </SHDNAText>
              <SHDNATextInput
                value={password}
                onChange={setPassword}
                secureTextEntry={true}
                placeholder="••••••••"
              />
            </View>
          </View>
          <SHDNAButton
            text="Log In"
            onClick={() => handleMutation()}
            isDisabled={email === "" || password === ""}
          />
          <Image
            source={require("../../assets/imgs/sacredheartDNA_Iso.png")}
            style={styles.logo}
          />
        </View>
      </SHDNABlock>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 42, fontWeight: "bold", alignSelf: "center" },
  register: {
    fontSize: 15,
    color: Colors.Gray2,
    marginTop: 5,
  },
  inputs: {
    gap: 25,
  },
  labelText: { fontSize: 18, fontWeight: "700", color: Colors.Gray2 },
  label: { height: 70, gap: 5 },
  logo: {
    width: 130,
    height: 100,
    objectFit: "contain",
    alignSelf: "center",
  },
  wrapper: {
    padding: 50,
    gap: 25,
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
