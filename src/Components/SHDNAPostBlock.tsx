import { View, StyleSheet } from "react-native";
import React from "react";
import SHDNAFootInsignts from "./SHDNAFootInsights";
import SHDNABlock from "./SHDNABlock";
import { useSubview } from "./Subview/SHDNASubviewContext";
import SHDNAPostView from "../Views/SHDNAPostView";
import { Colors } from "../../assets/SHDNAColors";
import { graphql, useFragment, useMutation } from "react-relay";
import { SHDNAPostBlock_Fragment$key } from "./__generated__/SHDNAPostBlock_Fragment.graphql";
import SHDNAUserRow from "./SHDNAUserRow";
import MoreSVG from "../../assets/RNSvgs/MoreSVG";
import { useSheet } from "./Sheet/SHDNASheetContext";
import SHDNAButton, { ButtonStates } from "./SHDNAButton";
import { SHDNAPostBlockMutation } from "./__generated__/SHDNAPostBlockMutation.graphql";
import { useFloatingView } from "./FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../Views/SHDNALoadingBlackView";
import SHDNAImage from "./SHDNAImage";
import SHDNAText from "./SHDNAText";

type SHDNAPostBlocksProps = {
  postKey: SHDNAPostBlock_Fragment$key;
  refetch?: () => void;
};

export default function SHDNAPostBlock({
  postKey,
  refetch,
}: SHDNAPostBlocksProps) {
  const { openSubview } = useSubview();
  const { openSheet, triggerCloseSheet } = useSheet();
  const { openFloatingView, closeFloatingView } = useFloatingView();

  const postData = useFragment<SHDNAPostBlock_Fragment$key>(
    graphql`
      fragment SHDNAPostBlock_Fragment on Post {
        id
        likes
        isLikedByUser
        text
        media
        isOwner
        user {
          ...SHDNAUserRow_Fragment
        }
      }
    `,
    postKey
  );

  const [commitDeletePost] = useMutation<SHDNAPostBlockMutation>(graphql`
    mutation SHDNAPostBlockMutation($postId: ID!) {
      deletePost(postId: $postId)
    }
  `);

  const handleDeletePost = () => {
    openFloatingView(<SHDNALoadingBlackView />, true);
    commitDeletePost({
      variables: { postId: postData.id },
      onCompleted: () => {
        triggerCloseSheet();
        closeFloatingView();
        refetch && refetch();
      },
      onError: () => {
        closeFloatingView();
      },
    });
  };

  const MoreMenu = () => {
    return (
      <View>
        <SHDNAButton
          text="Delete Post"
          state={ButtonStates.ALERT}
          onClick={() => handleDeletePost()}
        />
      </View>
    );
  };

  return (
    <SHDNABlock
      style={{ marginBottom: 30 }}
      onClick={() =>
        openSubview(
          <SHDNAUserRow userKey={postData.user} />,
          <SHDNAPostView postData={postData} />
        )
      }
    >
      <View style={[styles.header, { paddingTop: postData.isOwner ? 10 : 15 }]}>
        <SHDNAUserRow userKey={postData.user} />
        {postData.isOwner && (
          <View style={{ transform: [{ rotate: "90deg" }], opacity: 0.4 }}>
            <SHDNAButton
              onClick={() =>
                openSheet({
                  content: <MoreMenu />,
                })
              }
              iconSize={20}
              Icon={MoreSVG}
              state={ButtonStates.TRANSPARENT}
            />
          </View>
        )}
      </View>
      <View style={styles.bodyContainer}>
        <SHDNAText>{postData.text}</SHDNAText>
      </View>
      {postData.media && postData.media.length > 0 && (
        <ImageGrid media={postData.media} />
      )}
      <View style={{ paddingHorizontal: 15 }}>
        <SHDNAFootInsignts
          isLikedByUser={postData.isLikedByUser}
          contentType={"POSTS"}
          content_id={postData.id}
          noLikes={postData.likes}
        />
      </View>
    </SHDNABlock>
  );
}

const ImageGrid = ({ media }: { media: readonly string[] }) => {
  return (
    <View style={styles.imageGrid}>
      <SHDNAImage
        source={{ uri: media[0] }}
        key={media[0]}
        style={styles.image}
      />
      {media[1] && (
        <View style={{ flex: 1, flexDirection: "column", height: "auto" }}>
          <SHDNAImage
            source={{ uri: media[1] }}
            key={media[1]}
            style={styles.image}
          />
          {media[2] && (
            <View style={styles.thirdImageContainer}>
              <SHDNAImage
                source={{ uri: media[2] }}
                key={media[2]}
                style={styles.image}
              />
              {media.length > 3 && (
                <>
                  <View
                    style={[
                      styles.plusImages,
                      {
                        backgroundColor: "black",
                        opacity: 0.5,
                      },
                    ]}
                  />
                  <View style={styles.plusImages}>
                    <SHDNAText style={styles.plusText} fontWeight="Bold">
                      {"+" + (media.length - 2)}
                    </SHDNAText>
                  </View>
                </>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    padding: 15,
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    backgroundColor: Colors.Gray2,
    width: "100%",
  },
  imageGrid: {
    overflow: "hidden",
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
    height: 250,
  },
  thirdImageContainer: {
    position: "relative",
    flex: 1,
  },
  plusImages: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
});
