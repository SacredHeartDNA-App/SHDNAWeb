import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SHDNAImage from "../Components/SHDNAImage";
import { Colors } from "../../assets/SHDNAColors";
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import { SHDNAProfileViewQuery } from "./__generated__/SHDNAProfileViewQuery.graphql";
import SHDNAPostBlock from "../Components/SHDNAPostBlock";
import { SHDNAProfileView_Fragment$key } from "./__generated__/SHDNAProfileView_Fragment.graphql";
import SHDNAText from "../Components/SHDNAText";

type SHDNAProfileViewProps = {
  userKey: SHDNAProfileView_Fragment$key;
  bio: string;
  profilePic: string;
};

export default function SHDNAProfileView({
  userKey,
  bio,
  profilePic,
}: SHDNAProfileViewProps) {
  const userData = useFragment<SHDNAProfileView_Fragment$key>(
    graphql`
      fragment SHDNAProfileView_Fragment on User {
        name
        lastName
        community {
          name
        }
      }
    `,
    userKey
  );

  const data = useLazyLoadQuery<SHDNAProfileViewQuery>(
    graphql`
      query SHDNAProfileViewQuery($userId: ID!) {
        userPosts(userId: $userId) {
          ...SHDNAPostBlock_Fragment
        }
      }
    `,
    { userId: "eccbc87e-4b5c-e2fe-2830-8fd9f2a7baf3" }
  );

  const userPosts = data.userPosts ?? [];

  return (
    <View>
      <View style={styles.row}>
        <SHDNAImage
          source={{
            uri: profilePic,
          }}
          style={styles.profilePic}
        />
        <View style={styles.info}>
          <SHDNAText
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            fontWeight="Bold"
          >{`${userData.name} ${userData.lastName}`}</SHDNAText>
          <SHDNAText
            fontWeight="Bold"
            style={{
              fontSize: 16,
              color: Colors.Gray3,
              textAlign: "center",
            }}
          >
            {userData.community?.name}
          </SHDNAText>
          <SHDNAText style={styles.bio}>{bio}</SHDNAText>
        </View>
      </View>
      <SHDNAText style={styles.subtitle} fontWeight="Bold">
        Posts
      </SHDNAText>
      <View>
        {userPosts.map((post, i) => {
          return <SHDNAPostBlock postKey={post} key={i} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 150,
    aspectRatio: 1 / 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 5,
  },
  bio: {
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.Gray2,
    alignSelf: "center",
    paddingVertical: 20,
  },
});
