import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import SHDNAView from "../Components/SHDNAView";
import { graphql, useLazyLoadQuery } from "react-relay";
import { SHDNAUsersViewQuery } from "./__generated__/SHDNAUsersViewQuery.graphql";
import SHDNAUserRow from "../Components/SHDNAUserRow";
import { Colors } from "@/assets/SHDNAColors";
import { useSheet } from "../Components/Sheet/SHDNASheetContext";
import SHDNASendInvitationView from "./SHDNASendInvitationView";
import AddSVG from "@/assets/RNSvgs/AddSVG";

export default function SHDNAUsersView() {
  const { openSheet } = useSheet();

  const data = useLazyLoadQuery<SHDNAUsersViewQuery>(
    graphql`
      query SHDNAUsersViewQuery {
        users {
          ...SHDNAUserRow_Fragment
        }
      }
    `,
    {}
  );

  const users = data.users ?? [];

  const AddButton = () => {
    return (
      <Pressable
        onPress={() => {
          openSheet({
            title: "Send Invitation",
            content: <SHDNASendInvitationView />,
          });
        }}
      >
        <AddSVG style={{ transform: [{ scale: 0.75 }] }} iconcolor="#000" />
      </Pressable>
    );
  };

  return (
    <SHDNAView title="Users" secondaryButtons={<AddButton />}>
      <View style={styles.list}>
        {users.map((user) => (
          <View style={styles.block}>
            <SHDNAUserRow userKey={user} />
          </View>
        ))}
      </View>
    </SHDNAView>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.Gray1,
  },
  list: {
    gap: 10,
    marginBottom: 25,
  },
});
