import {
  View,
  Text,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import React, { useState } from "react";
import { graphql, useFragment } from "react-relay";
import { SHDNAUserRow_Fragment$key } from "./__generated__/SHDNAUserRow_Fragment.graphql";
import { useSubview } from "./Subview/SHDNASubviewContext";
import SHDNAProfileView from "../Views/SHDNAProfileView";
import SHDNAText from "./SHDNAText";

type SHDNAUserRowProps = {
  userKey: SHDNAUserRow_Fragment$key;
};

export default function SHDNAUserRow({ userKey }: SHDNAUserRowProps) {
  const [isScrolling, setIsScrolling] = useState(false);

  const userData = useFragment(
    graphql`
      fragment SHDNAUserRow_Fragment on User {
        name
        lastName
        profilePic
        bio
        ...SHDNAProfileView_Fragment
      }
    `,
    userKey
  );

  const { openSubview } = useSubview();

  const handleTouch = (e: GestureResponderEvent) => {
    e.stopPropagation();

    if (!isScrolling) {
      openSubview(
        `${userData.name}'s profile`,
        <SHDNAProfileView
          userKey={userData}
          profilePic={userData.profilePic ?? ""}
          bio={userData.bio ?? ""}
        />
      );
    }

    setIsScrolling(false);
  };

  return (
    <View
      style={styles.container}
      onTouchMove={() => setIsScrolling(true)}
      onTouchEnd={(e) => handleTouch(e)}
    >
      <Image
        style={styles.profilePic}
        source={{ uri: userData.profilePic ?? "" }}
      />
      <SHDNAText fontWeight="SemiBold">
        {userData.name + " " + userData.lastName}
      </SHDNAText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profilePic: {
    width: 30,
    aspectRatio: 1 / 1,
    backgroundColor: "#ccc",
    borderRadius: 30,
  },
});
