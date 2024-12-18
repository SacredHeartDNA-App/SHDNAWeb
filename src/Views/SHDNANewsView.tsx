import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../assets/SHDNAColors";
import SHDNAUserRow from "../Components/SHDNAUserRow";
import SHDNATag from "../Components/SHDNATag";
import { graphql, useFragment } from "react-relay";
import SHDNACommentList from "../Components/SHDNACommentList";
import SHDNAText from "../Components/SHDNAText";
import SHDNAGallery from "../Components/SHDNAGallery";
import { SHDNANewsView$key } from "./__generated__/SHDNANewsView.graphql";

export default function SHDNANewsView({ newsKey, cover, user }: any) {
  const newsData = useFragment<SHDNANewsView$key>(
    graphql`
      fragment SHDNANewsView on News {
        likes
        text
        id
        gallery
        extLinks
      }
    `,
    newsKey
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageEffect} />
      <Image
        source={cover ? { uri: cover } : require("../../assets/PostPic.png")}
        style={[styles.imageEffect]}
      />
      <View style={styles.content}>
        <View style={styles.footer}>
          <SHDNAUserRow userKey={user} />
          <SHDNATag title="SHDNA" backgroundColor={Colors.Red1} />
        </View>
        <SHDNAText>{newsData.text}</SHDNAText>
        <View style={{ gap: 10, marginVertical: 10 }}>
          {newsData.extLinks &&
            newsData.extLinks.map((link) => {
              return (
                <SHDNAText style={{ fontSize: 16 }} isURL={true}>
                  {link}
                </SHDNAText>
              );
            })}
        </View>
        {newsData.gallery && <SHDNAGallery images={newsData.gallery} />}
        <SHDNAText style={styles.commentsTitle} fontWeight="SemiBold">
          Comments
        </SHDNAText>
        <SHDNACommentList contentId={newsData.id} ContentType={"NEWS"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageEffect: {
    backgroundColor: Colors.Background,
    flex: 1,
    height: 275,
  },
  wrapper: {
    position: "relative",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 20,
    gap: 15,
  },
  commentsTitle: {
    fontSize: 20,
    color: Colors.Gray3,
    paddingTop: 50,
  },
});
