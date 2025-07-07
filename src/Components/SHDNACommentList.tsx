import { View, StyleSheet } from "react-native";
import React, { Suspense, useEffect, useState } from "react";
import { graphql } from "react-relay";
import SHDNATextArea from "./SHDNATextArea";
import { useSHDNACommentList } from "../hooks/useSHDNACommentList";
import SHDNAComment from "./SHDNAComment";
import SHDNALoading from "./SHDNALoading";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAText from "./SHDNAText";

type SHDNACommentListProps = {
  contentId: string;
  ContentType: ContentType;
};

type SHDNACommentListTriggerProp = {
  createCommentTrigger: () => void;
};

export type ContentType = "POSTS" | "NEWS" | "COMMENTS";

const SEND_NEW_COMMENT_MUTATION = graphql`
  mutation SHDNACommentListMutation(
    $text: String!
    $content_id: ID!
    $relationship: ContentEnum!
  ) {
    createComment(
      text: $text
      content_id: $content_id
      relationship: $relationship
    )
  }
`;

export default function SHDNACommentList({
  contentId,
  ContentType,
}: SHDNACommentListProps) {
  const [commentTrigger, setCommentTrigger] = useState(false);

  const handlerCommentTrigger = () => {
    setCommentTrigger(!commentTrigger);
  };

  return (
    <View style={styles.commentBox}>
      {/* <SHDNACommentBox
        contentId={contentId}
        createCommentTrigger={handlerCommentTrigger}
        ContentType={ContentType}
      /> */}
      <Suspense
        fallback={
          <View style={styles.loadingComments}>
            <SHDNALoading size="Small" />
          </View>
        }
      >
        <SHDNACommentsWrapper
          createCommentTrigger={handlerCommentTrigger}
          contentId={contentId}
          ContentType={ContentType}
        />
      </Suspense>
    </View>
  );
}

function SHDNACommentBox({
  contentId,
  createCommentTrigger,
  ContentType,
}: SHDNACommentListProps & SHDNACommentListTriggerProp) {
  const [newComment, setNewComment] = useState("");
  const [isCreatingComment, setIsCreatingComment] = useState(false);

  // const [commitMutation] = useMutation<SHDNACommentListMutation>(
  //   SEND_NEW_COMMENT_MUTATION
  // );

  // const handleCreateComment = () => {
  //   if (newComment == "") return;

  //   setIsCreatingComment(true);
  //   commitMutation({
  //     variables: {
  //       text: newComment,
  //       content_id: contentId,
  //       relationship: ContentType,
  //     },
  //     onCompleted(response, errors) {
  //       setIsCreatingComment(false);
  //       setNewComment("");
  //       createCommentTrigger();
  //     },
  //   });
  // };

  return (
    <View style={styles.commentBox}>
      <SHDNATextArea
        onChange={(input: string) => setNewComment(input)}
        value={newComment}
        isDisabled={isCreatingComment}
      />
      {/* <SHDNAButton
        onClick={() => handleCreateComment()}
        text="Send"
        isDisabled={isCreatingComment || newComment === ""}
      /> */}
    </View>
  );
}

export const SHDNACommentsWrapper = ({
  contentId,
  ContentType,
  createCommentTrigger,
}: SHDNACommentListProps & SHDNACommentListTriggerProp) => {
  const [data, refetch] = useSHDNACommentList(contentId, ContentType);

  useEffect(() => {
    refetch();
  }, [createCommentTrigger]);

  if (!data.getContentComments || data.getContentComments.length == 0) {
    return (
      <SHDNAText style={styles.noCommentsText}>No comments left</SHDNAText>
    );
  }
  return (
    <>
      {data.getContentComments.map((comment, index) => {
        return (
          <View key={index}>
            <SHDNAComment commentKey={comment} />
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  commentBox: {
    marginBottom: 20,
    gap: 15,
  },
  loadingComments: {
    paddingTop: 40,
    height: 500,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  noCommentsText: {
    alignSelf: "center",
    color: Colors.Gray3,
    marginTop: 10,
  },
});
