import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAFootInsignts from "../Components/SHDNAFootInsights";
import { SHDNAPostBlock_Fragment$data } from "../Components/__generated__/SHDNAPostBlock_Fragment.graphql";
import SHDNACommentList from "../Components/SHDNACommentList";
import SHDNAImage from "../Components/SHDNAImage";
import SHDNAText from "../Components/SHDNAText";

type SHDNAPostViewProps = {
  postData: SHDNAPostBlock_Fragment$data;
};

export default function SHDNAPostView({ postData }: SHDNAPostViewProps) {
  return (
    <View>
      <SHDNAText style={styles.content}>{postData.text}</SHDNAText>
      {postData.media && (
        <View
          style={[styles.imageEffect, { height: 275 * postData.media.length }]}
        >
          <View style={styles.stackImages}>
            {postData.media.map((image) => {
              return (
                <SHDNAImage
                  source={{ uri: image }}
                  style={[styles.coverImage]}
                  isInteractive={true}
                  key={image}
                />
              );
            })}
          </View>
        </View>
      )}
      <SHDNAFootInsignts
        contentType="POSTS"
        isLikedByUser={postData.isLikedByUser}
        noLikes={postData.likes}
        content_id={postData.id}
      />
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
    flex: 1,
    backgroundColor: Colors.Gray2,
  },
  stackImages: {
    width: "auto",
    position: "absolute",
    borderRadius: 20,
    left: -20,
    right: -20,
    overflow: "hidden",
  },
  imageEffect: {
    backgroundColor: Colors.Background,
    flex: 1,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 1,
    position: "relative",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    paddingBottom: 20,
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
