import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SHDNAComment_fragment$data } from "../Components/__generated__/SHDNAComment_fragment.graphql";
import { useMutation } from "react-relay";
import { SHDNACommentMutation } from "../Components/__generated__/SHDNACommentMutation.graphql";
import { SHDNACommentUnlikeMutation } from "../Components/__generated__/SHDNACommentUnlikeMutation.graphql";
import HeartFill from "../../assets/RNSvgs/HeartFill";
import HeartStroke from "../../assets/RNSvgs/HeartStroke";
import { Colors } from "../../assets/SHDNAColors";
import SHDNACommentList from "../Components/SHDNACommentList";
import {
  COMMENT_LIKE_MUTATION,
  COMMENT_UNLIKE_MUTATION,
} from "../Components/SHDNAFootInsights";
import SHDNAText from "../Components/SHDNAText";

type SHDNACommentViewProps = {
  commentKey: SHDNAComment_fragment$data;
};

export default function SHDNACommentView({
  commentKey,
}: SHDNACommentViewProps) {
  const [isLiked, setIsLikes] = useState(false);
  const [likes, setLikes] = useState(0);

  const [commitLike] = useMutation<SHDNACommentMutation>(COMMENT_LIKE_MUTATION);

  const [commitUnLike] = useMutation<SHDNACommentUnlikeMutation>(
    COMMENT_UNLIKE_MUTATION
  );

  useEffect(() => {
    setLikes(commentKey.likes ?? 0);
  }, [commentKey]);

  const handleLikeButton = () => {
    if (commentKey.id == null) return;

    const liked = !isLiked;
    setIsLikes(liked);
    setLikes(likes + (liked ? 1 : -1));

    if (liked) {
      commitLike({
        variables: { commentId: commentKey.id },
        onError: (error) => {
          setIsLikes(!liked);
          setLikes(() => {
            return likes > 0 ? likes - 1 : 0;
          });
        },
      });
    } else {
      commitUnLike({
        variables: { commentId: commentKey.id },
        onError: () => {
          setIsLikes(!liked);
          setLikes(likes + 1);
        },
      });
    }
  };

  return (
    <View>
      <View>
        <SHDNAText style={styles.body}>{commentKey.text}</SHDNAText>
        <View style={styles.insights}>
          <View style={styles.element} onTouchEnd={() => handleLikeButton()}>
            {isLiked ? (
              <HeartFill iconColor={Colors.Red1} width={15} />
            ) : (
              <HeartStroke iconColor={"#000"} width={15} />
            )}
            <SHDNAText>{likes}</SHDNAText>
          </View>
        </View>
      </View>
      <SHDNAText style={styles.commentsTitle} fontWeight="SemiBold">
        Comments
      </SHDNAText>
      <SHDNACommentList contentId={commentKey.id} ContentType="COMMENTS" />
    </View>
  );
}

const styles = StyleSheet.create({
  insights: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  element: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7.5,
  },
  body: {
    paddingVertical: 5,
  },
  commentsTitle: {
    fontSize: 18,
    color: Colors.Gray3,
    paddingVertical: 10,
  },
});
