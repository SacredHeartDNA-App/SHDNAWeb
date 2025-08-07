import React from "react";
import SHDNAView from "../Components/SHDNAView";
import SHDNAPostBlock from "../Components/SHDNAPostBlock";
import { StyleSheet, View } from "react-native";
import { useSHDNAPostList } from "../hooks/useSHDNAPostList";

export default function SHDNACommunityView() {
  const [data, refetch] = useSHDNAPostList();

  const posts = data.posts ?? [];

  return (
    <SHDNAView title={"Community"}>
      <View style={styles.wrapper}>
        {posts.length > 0 ? (
          posts.map((post, index) => {
            return (
              <SHDNAPostBlock key={index} postKey={post} refetch={refetch} />
            );
          })
        ) : (
          <></>
        )}
      </View>
    </SHDNAView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 20,
    padding: 10,
  },
});
