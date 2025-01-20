import { View, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAFootInsignts from "../Components/SHDNAFootInsights";
import { SHDNAPostBlock_Fragment$data } from "../Components/__generated__/SHDNAPostBlock_Fragment.graphql";
import SHDNACommentList from "../Components/SHDNACommentList";
import SHDNAImage from "../Components/SHDNAImage";
import SHDNAText from "../Components/SHDNAText";
import { graphql, useMutation } from "react-relay";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";
import { useFloatingMenu } from "../Components/FloatingMenu/SHDNAFloatingMenuContext";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import { useSheet } from "../Components/Sheet/SHDNASheetContext";
import { SHDNAPostViewMutation } from "./__generated__/SHDNAPostViewMutation.graphql";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import { useModal } from "../Components/Modal/SHDNAModalContext";
import SHDNAGallery from "../Components/SHDNAGallery";

type SHDNAPostViewProps = {
  postData: SHDNAPostBlock_Fragment$data;
  refetch?: () => void;
};

export default function SHDNAPostView({
  postData,
  refetch,
}: SHDNAPostViewProps) {
  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { openModal, closeModal } = useModal();
  const { triggerCloseSheet } = useSheet();
  const [commitDeletePost] = useMutation<SHDNAPostViewMutation>(graphql`
    mutation SHDNAPostViewMutation($postId: ID!) {
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
        closeModal();
      },
      onError: () => {
        closeFloatingView();
        closeModal();
      },
    });
  };

  const DeleteModal = () => {
    return (
      <View
        style={{
          gap: 50,
          padding: 20,
        }}
      >
        <View>
          <SHDNAText style={{ textAlign: "center", fontSize: 20 }}>
            Are you sure you want to delete this post?
          </SHDNAText>
          <SHDNAText
            style={{ textAlign: "center", fontSize: 16 }}
            fontWeight="Bold"
          >
            {"(The user won't be notified of this action)"}
          </SHDNAText>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          <SHDNAButton
            onClick={() => handleDeletePost()}
            text="Delete"
            state={ButtonStates.ALERT}
          />
          <SHDNAButton onClick={() => closeModal()} text="Cancel" />
        </View>
      </View>
    );
  };

  return (
    <View>
      <SHDNAText style={styles.content}>{postData.text}</SHDNAText>
      {postData.media && <SHDNAGallery images={postData.media} />}
      <SHDNAFootInsignts
        contentType="POSTS"
        isLikedByUser={postData.isLikedByUser}
        noLikes={postData.likes}
        content_id={postData.id}
      />
      <View>
        <SHDNAButton
          onClick={() => openModal(<DeleteModal />)}
          text="Delete Post"
          state={ButtonStates.ALERT}
        />
      </View>
      <SHDNAText style={styles.commentsTitle} fontWeight="SemiBold">
        Comments
      </SHDNAText>
      <SHDNACommentList contentId={postData.id} ContentType={"POSTS"} />
    </View>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    height: 275,
    width: 275,
    backgroundColor: Colors.Gray2,
  },
  imageEffect: {
    backgroundColor: Colors.Background,
    flex: 1,
    overflow: "hidden",
    flexWrap: "wrap",
    flexDirection: "row",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    paddingVertical: 20,
    gap: 15,
  },
  commentsTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.Gray3,
    paddingTop: 20,
    paddingBottom: 15,
  },
});
