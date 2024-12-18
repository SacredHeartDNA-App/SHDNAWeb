import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../assets/SHDNAColors";
import HeartFill from "../../assets/RNSvgs/HeartFill";
import HeartStroke from "../../assets/RNSvgs/HeartStroke";
import MessageSVG from "../../assets/RNSvgs/MessageSVG";
import { graphql, useMutation } from "react-relay";
import { SHDNAFootInsightsMutation } from "./__generated__/SHDNAFootInsightsMutation.graphql";
import { SHDNAFootInsightsUnlikeMutation } from "./__generated__/SHDNAFootInsightsUnlikeMutation.graphql";
import { ContentType } from "./SHDNACommentList";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import SHDNAText from "./SHDNAText";

type SHDNAFootInsigntsProps = {
  noLikes: number;
  content_id: string;
  isLikedByUser: boolean;
  contentType: ContentType;
};

export const COMMENT_LIKE_MUTATION = graphql`
  mutation SHDNAFootInsightsMutation(
    $contentId: ID!
    $contentType: ContentEnum!
  ) {
    likeContent(contentId: $contentId, contentType: $contentType)
  }
`;

export const COMMENT_UNLIKE_MUTATION = graphql`
  mutation SHDNAFootInsightsUnlikeMutation(
    $contentId: ID!
    $contentType: ContentEnum!
  ) {
    unlikeContent(contentId: $contentId, contentType: $contentType)
  }
`;

export default function SHDNAFootInsights({
  noLikes,
  isLikedByUser,
  content_id,
  contentType,
}: SHDNAFootInsigntsProps) {
  const [isLiked, setIsLikes] = useState(isLikedByUser);
  const [likes, setLikes] = useState(noLikes);

  const [commitLike] = useMutation<SHDNAFootInsightsMutation>(
    COMMENT_LIKE_MUTATION
  );

  const [commitUnLike] = useMutation<SHDNAFootInsightsUnlikeMutation>(
    COMMENT_UNLIKE_MUTATION
  );

  const handleLikeButton = () => {
    if (content_id == null) return;

    const liked = !isLiked;
    setIsLikes(liked);
    setLikes(likes + (liked ? 1 : -1));

    if (liked) {
      commitLike({
        variables: { contentId: content_id, contentType },
        onError: (error) => {
          setIsLikes(!liked);
          setLikes(() => {
            return likes > 0 ? likes - 1 : 0;
          });
        },
      });
    } else {
      commitUnLike({
        variables: { contentId: content_id, contentType },
        onError: () => {
          setIsLikes(!liked);
          setLikes(likes + 1);
        },
      });
    }
  };

  const HeartFillRed = () => <HeartFill iconColor={Colors.Red1} width={15} />;

  return (
    <View style={styles.insights}>
      <SHDNAButton
        Icon={isLiked ? HeartFillRed : HeartStroke}
        text={`${likes}`}
        onClick={() => handleLikeButton()}
        state={ButtonStates.TRANSPARENT}
      />
      <View style={styles.element}>
        <MessageSVG iconColor={"#000"} width={15} />
        <SHDNAText>0</SHDNAText>
      </View>
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
});
