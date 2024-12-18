import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import SHDNATextArea from "../Components/SHDNATextArea";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import AddSVG from "../../assets/RNSvgs/AddSVG";
import { Colors } from "../../assets/SHDNAColors";
import useSHDNAImagePicker from "../hooks/useSHDNAImagePicker";
import { graphql, useMutation } from "react-relay";
import { SHDNACreatePostViewMutation } from "./__generated__/SHDNACreatePostViewMutation.graphql";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import SHDNAText from "../Components/SHDNAText";
import { ImagePickerAsset } from "expo-image-picker";

export type MediaType = {
  uri: string;
  type: string;
  fileName: string;
  base64: string;
};

type SHDNACreatePostViewProps = {
  refetch: () => any;
};

const PUBLISH_POST = graphql`
  mutation SHDNACreatePostViewMutation($input: PostInput!) {
    createPost(input: $input) {
      id
    }
  }
`;

export default function SHDNACreatePostView({
  refetch,
}: SHDNACreatePostViewProps) {
  const [postText, setPostText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { openLibrary, images } = useSHDNAImagePicker();
  const { popSubviewStack } = useSubview();
  const { openFloatingView, closeFloatingView } = useFloatingView();

  const [commitPost] = useMutation<SHDNACreatePostViewMutation>(PUBLISH_POST);

  const handleCommitPost = () => {
    setIsLoading(true);
    openFloatingView(<SHDNALoadingBlackView />, true);
    commitPost({
      variables: {
        input: {
          text: postText,
          media: tranformImagesToMediaType(images),
        },
      },
      onCompleted: () => {
        popSubviewStack();
        refetch();
        setIsLoading(false);
        closeFloatingView();
      },
      onError(error) {
        console.log(error);
        setIsLoading(false);
        closeFloatingView();
      },
    });
  };

  return (
    <>
      <View style={styles.body}>
        <View style={{ flex: 1 }}>
          <SHDNATextArea
            value={postText}
            placeholder="What would you like to share to our community?"
            onChange={setPostText}
            fixedHeight={200}
            isDisabled={isLoading}
          />
          <View>
            <SHDNAText fontWeight="SemiBold" style={styles.mediaTitle}>
              Media:
            </SHDNAText>
            <View style={styles.mediaWrapper}>
              {images.map((image, index) => (
                <View
                  key={index}
                  style={[styles.cell, { width: "33.3%", height: 100 }]}
                >
                  <Image source={{ uri: image.uri }} style={styles.image} />
                </View>
              ))}
            </View>
            <SHDNAButton
              onClick={() => openLibrary()}
              text="Add Media"
              Icon={AddSVG}
              state={ButtonStates.SECONDARY}
              isDisabled={isLoading}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <SHDNAButton
            isDisabled={isLoading}
            onClick={() => handleCommitPost()}
            text="Submit"
          />
        </View>
      </View>
    </>
  );
}

export const tranformImagesToMediaType = (
  images: ImagePickerAsset[]
): MediaType[] => {
  const media: MediaType[] = [];

  images.map((image) => {
    const newMedia: MediaType = {
      uri: image.uri,
      type: image.type ?? "image",
      fileName: image.fileName ?? "image.jpg",
      base64: image.base64 ?? "",
    };
    media.push(newMedia);
  });

  return media;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: Dimensions.get("screen").height - 175,
  },
  mediaTitle: {
    fontSize: 16,
    color: Colors.Gray3,
    paddingVertical: 10,
  },
  mediaWrapper: {
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 100,
    objectFit: "cover",
  },
  cell: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
});
