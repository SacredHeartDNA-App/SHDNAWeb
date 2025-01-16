import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import SHDNAUserRow from "./SHDNAUserRow";
import HeartStroke from "../../assets/RNSvgs/HeartStroke";
import HeartFill from "../../assets/RNSvgs/HeartFill";
import { Colors } from "../../assets/SHDNAColors";
import MessageSVG from "../../assets/RNSvgs/MessageSVG";
import { graphql, useFragment, useMutation } from "react-relay";
import { SHDNAComment_fragment$key } from "./__generated__/SHDNAComment_fragment.graphql";
import { SHDNACommentMutation } from "./__generated__/SHDNACommentMutation.graphql";
import { SHDNACommentUnlikeMutation } from "./__generated__/SHDNACommentUnlikeMutation.graphql";
import SHDNABlock from "./SHDNABlock";
import { useSubview } from "./Subview/SHDNASubviewContext";
import SHDNACommentView from "../Views/SHDNACommentView";
import SHDNAFootInsignts from "./SHDNAFootInsights";
import SHDNAText from "./SHDNAText";

type SHDNACommentProps = {
  commentKey: SHDNAComment_fragment$key;
};

export default function SHDNAComment({ commentKey }: SHDNACommentProps) {
  const { openSubview } = useSubview();

  const data = useFragment<SHDNAComment_fragment$key>(
    graphql`
      fragment SHDNAComment_fragment on Comment {
        likes
        text
        id
        isLikedByUser
        author {
          name
          lastName
          ...SHDNAUserRow_Fragment
        }
      }
    `,
    commentKey
  );

  return (
    <SHDNABlock
      showShadow={false}
      onClick={() =>
        openSubview(
          data.author.name + " " + data.author.lastName + "'s " + "comment",
          <SHDNACommentView commentKey={data} />
        )
      }
    >
      <View style={{ padding: 15, paddingBottom: 5 }}>
        <SHDNAUserRow userKey={data.author} />
        <SHDNAText style={styles.body}>{data.text}</SHDNAText>
        <SHDNAFootInsignts
          content_id={data.id}
          noLikes={data.likes}
          contentType="COMMENTS"
          isLikedByUser={data.isLikedByUser}
        />
      </View>
    </SHDNABlock>
  );
}

const styles = StyleSheet.create({
  element: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7.5,
  },
  body: {
    paddingTop: 10,
    paddingBottom: 5,
  },
});
