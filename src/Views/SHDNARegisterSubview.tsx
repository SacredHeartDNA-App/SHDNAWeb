import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import SHDNAText from "../Components/SHDNAText";
import { Colors } from "../../assets/SHDNAColors";
import SHDNATextInput from "../Components/SHDNATextInput";
import SHDNAImage from "../Components/SHDNAImage";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import useSHDNAImagePicker from "../hooks/useSHDNAImagePicker";
import SHDNADatePicker from "../Components/SHDNADatePicker";
import SHDNADropdownMenu from "../Components/SHDNADropdownMenu";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";
import SHDNARegisterPasswordSubview from "./SHDNARegisterPasswordSubview";
import { tranformImagesToMediaType } from "./SHDNACreatePostView";
import { graphql, useLazyLoadQuery } from "react-relay";
import { SHDNARegisterSubviewQuery } from "./__generated__/SHDNARegisterSubviewQuery.graphql";
import SHDNATextArea from "../Components/SHDNATextArea";

export default function SHDNARegisterSubview() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState<Date>(new Date());
  const [community, setCommunity] = useState("");
  const [bio, setBio] = useState("");

  const { openLibrary, images } = useSHDNAImagePicker(false);
  const { openSubview } = useSubview();

  const data = useLazyLoadQuery<SHDNARegisterSubviewQuery>(
    graphql`
      query SHDNARegisterSubviewQuery {
        getCommunities {
          name
          id
        }
      }
    `,
    {}
  );

  const COMMUNITIES =
    data.getCommunities?.map((community) => {
      return {
        label: community.name,
        value: community.id,
      };
    }) ?? [];

  const disableNext =
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    !email.includes("@") ||
    community === "";

  const userData = {
    name: firstName,
    lastName,
    email,
    birthday,
    community,
    bio,
    profilePic: tranformImagesToMediaType(images)[0],
  };

  return (
    <View style={styles.wrapper}>
      <View style={{ alignItems: "center", gap: 20 }}>
        <SHDNAImage
          source={
            images.length === 0
              ? require("../../assets/imgs/EmptyProfilePic.png")
              : { uri: images[0].uri }
          }
          style={styles.profilePic}
          width={100}
          height={100}
        />
        <View style={{ flex: 1, width: "100%" }}>
          <SHDNAButton
            text="Select Profile Picture"
            onClick={() => openLibrary()}
          />
        </View>
      </View>
      <View style={styles.field}>
        <SHDNAText fontWeight="SemiBold" style={styles.labels}>
          Name:
        </SHDNAText>
        <SHDNATextInput
          placeholder="Name"
          value={firstName}
          onChange={setFirstName}
        />
      </View>
      <View style={styles.field}>
        <SHDNAText fontWeight="SemiBold" style={styles.labels}>
          Last Name:
        </SHDNAText>
        <SHDNATextInput
          placeholder="Last Name"
          value={lastName}
          onChange={setLastName}
        />
      </View>
      <View style={styles.field}>
        <SHDNAText fontWeight="SemiBold" style={styles.labels}>
          Email:
        </SHDNAText>
        <SHDNATextInput
          autoCapitalize="none"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
      </View>
      <View style={[styles.field]}>
        <SHDNAText fontWeight="SemiBold" style={styles.labels}>
          Birthday:
        </SHDNAText>
        <SHDNADatePicker
          value={birthday}
          onChange={(date) => {
            date && setBirthday(date);
          }}
        />
      </View>
      {/* <View style={[styles.field]}>
        <SHDNAText fontWeight="SemiBold" style={styles.labels}>
          Community:
        </SHDNAText>
        <SHDNADropdownMenu
          options={COMMUNITIES}
          onChange={setCommunity}
          value={community}
          maxHeight={100}
          placeholder="Select a Community"
        />
      </View> */}
      <View style={[styles.field]}>
        <SHDNAText fontWeight="SemiBold" style={styles.labels}>
          {"Biography (optional):"}
        </SHDNAText>
        <SHDNATextArea onChange={setBio} value={bio} fixedHeight={100} />
      </View>
      <View style={{ paddingTop: 100 }}>
        <SHDNAButton
          text="Next"
          onClick={() =>
            openSubview(
              "Create a Password",
              <SHDNARegisterPasswordSubview userData={userData} />
            )
          }
          isDisabled={disableNext}
          state={ButtonStates.ACTIVE}
        />
      </View>
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
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
});
