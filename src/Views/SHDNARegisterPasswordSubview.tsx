import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAText from "../Components/SHDNAText";
import SHDNATextInput from "../Components/SHDNATextInput";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import { MediaType } from "./SHDNACreatePostView";
import { graphql, useMutation } from "react-relay";
import { SHDNARegisterPasswordSubviewMutation } from "./__generated__/SHDNARegisterPasswordSubviewMutation.graphql";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";
import SHDNAConfirmEmailSubview from "./SHDNAConfirmEmailSubview";

type UserData = {
  name: string;
  lastName: string;
  email: string;
  birthday: Date;
  community: string;
  profilePic?: MediaType;
};

type SHDNARegisterPasswordSubviewProps = {
  userData: UserData;
};

export default function SHDNARegisterPasswordSubview({
  userData,
}: SHDNARegisterPasswordSubviewProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEightCharsLength = password.length >= 8;
  const hasSymbol = /[\W_]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const passwordMatches = password === confirmPassword && password !== "";

  const allowNext =
    isEightCharsLength &&
    hasSymbol &&
    hasUppercase &&
    hasNumber &&
    passwordMatches;

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { openSubview } = useSubview();

  const [commitMutation] =
    useMutation<SHDNARegisterPasswordSubviewMutation>(graphql`
      mutation SHDNARegisterPasswordSubviewMutation($input: SignUpInput!) {
        signUp(input: $input)
      }
    `);

  const handleSignUp = () => {
    openFloatingView(<SHDNALoadingBlackView />);
    commitMutation({
      variables: {
        input: {
          ...userData,
          password,
        },
      },
      onCompleted: () => {
        closeFloatingView();
        openSubview(
          "Confirm your Email",
          <SHDNAConfirmEmailSubview email={userData.email} />
        );
      },
      onError: (error) => {
        closeFloatingView();
        console.log(error);
      },
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.field}>
        <SHDNAText fontWeight="SemiBold" style={styles.labels}>
          Password:
        </SHDNAText>
        <SHDNATextInput
          placeholder="Password"
          value={password}
          onChange={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.field}>
        <SHDNAText fontWeight="SemiBold" style={styles.labels}>
          Confirm Password:
        </SHDNAText>
        <SHDNATextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>
      <View>
        <SHDNAText fontWeight="Bold" style={styles.indications}>
          Your password should include:
        </SHDNAText>
        <View>
          <View style={styles.row}>
            <View
              style={[
                styles.unchecked,
                isEightCharsLength && {
                  backgroundColor: Colors.Green1,
                },
              ]}
            />
            <SHDNAText style={{ fontSize: 14, color: Colors.Gray3 }}>
              At least 8 characters long
            </SHDNAText>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.unchecked,
                hasSymbol && {
                  backgroundColor: Colors.Green1,
                },
              ]}
            />
            <SHDNAText style={{ fontSize: 14, color: Colors.Gray3 }}>
              A symbol (!@#$%...)
            </SHDNAText>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.unchecked,
                hasUppercase && {
                  backgroundColor: Colors.Green1,
                },
              ]}
            />
            <SHDNAText style={{ fontSize: 14, color: Colors.Gray3 }}>
              An Uppercase Letter
            </SHDNAText>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.unchecked,
                hasNumber && {
                  backgroundColor: Colors.Green1,
                },
              ]}
            />
            <SHDNAText style={{ fontSize: 14, color: Colors.Gray3 }}>
              A Number
            </SHDNAText>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.unchecked,
                passwordMatches && {
                  backgroundColor: Colors.Green1,
                },
              ]}
            />
            <SHDNAText style={{ fontSize: 14, color: Colors.Gray3 }}>
              Password matches
            </SHDNAText>
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: 10 }} />
      <SHDNAButton
        text="Create Account"
        onClick={() => handleSignUp()}
        isDisabled={!allowNext}
        state={ButtonStates.ACTIVE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  labels: {
    color: Colors.Gray2,
    fontSize: 18,
  },
  field: {
    gap: 10,
  },
  wrapper: {
    gap: 20,
  },
  profilePic: {
    width: 100,
    aspectRatio: 1 / 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  unchecked: {
    width: 12,
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderColor: Colors.Gray2,
    backgroundColor: Colors.Gray1,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  indications: {
    fontSize: 14,
    color: Colors.Gray3,
    paddingBottom: 10,
  },
});
