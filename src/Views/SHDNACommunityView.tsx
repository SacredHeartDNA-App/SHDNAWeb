import React from "react";
import SHDNAView from "../Components/SHDNAView";
import SHDNAPostBlock from "../Components/SHDNAPostBlock";
import { graphql, useLazyLoadQuery } from "react-relay";
import { SHDNACommunityViewQuery } from "./__generated__/SHDNACommunityViewQuery.graphql";
import { View } from "react-native";
import AddSVG from "../../assets/RNSvgs/AddSVG";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";
import SHDNACreatePostView from "./SHDNACreatePostView";
import { useSHDNAPostList } from "../hooks/useSHDNAPostList";

export default function SHDNACommunityView() {
  const [data, refetch] = useSHDNAPostList();

  const posts = data.posts ?? [];

  const AddPostButton = () => {
    const { openSubview } = useSubview();

    return (
      <View
        onTouchEnd={() => {
          openSubview("Create Post", <SHDNACreatePostView refetch={refetch} />);
        }}
      >
        <AddSVG width={25} iconColor="#000" />
      </View>
    );
  };

  return (
    <SHDNAView title={"Community"} secondaryButtons={<AddPostButton />}>
      {posts.length > 0 ? (
        posts.map((post, index) => {
          return (
            <SHDNAPostBlock key={index} postKey={post} refetch={refetch} />
          );
        })
      ) : (
        <></>
      )}
    </SHDNAView>
  );
}
