import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SHDNAImage from "../Components/SHDNAImage";
import SHDNAButton, { ButtonStates } from "../Components/SHDNAButton";
import SHDNATextArea from "../Components/SHDNATextArea";
import { Colors } from "../../assets/SHDNAColors";
import useSHDNAImagePicker from "../hooks/useSHDNAImagePicker";
import { graphql, useMutation } from "react-relay";
import { SHDNAEditProfileSubviewMutation } from "./__generated__/SHDNAEditProfileSubviewMutation.graphql";
import { MediaType } from "./SHDNACreatePostView";
import { useFloatingView } from "../Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "./SHDNALoadingBlackView";
import { useSubview } from "../Components/Subview/SHDNASubviewContext";
import SHDNAText from "../Components/SHDNAText";

type SHDNAEditProfileSubviewProps = {
  profilePic: string;
  bio: string;
  handleEditProfile: (newBio: string, newProfilePic: string) => void;
};

export default function SHDNAEditProfileSubview({
  profilePic,
  bio,
  handleEditProfile,
}: SHDNAEditProfileSubviewProps) {
  const [newBio, setNewBio] = useState(bio);

  const { openLibrary, images } = useSHDNAImagePicker(false);
  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { popSubviewStack } = useSubview();

  const [commitMutation] = useMutation<SHDNAEditProfileSubviewMutation>(
    graphql`
      mutation SHDNAEditProfileSubviewMutation($input: UpdateUserInput!) {
        updateProfile(input: $input)
      }
    `
  );

  const handleSaveChanges = () => {
    let newInfo = {};

    if (newBio !== bio) {
      newInfo = { bio: newBio };
    }

    if (images.length >= 0) {
      newInfo = { ...newInfo, media: tranformImagesToMediaType()[0] };
    }

    openFloatingView(<SHDNALoadingBlackView />, true);

    commitMutation({
      variables: {
        input: newInfo,
      },
      onCompleted: () => {
        closeFloatingView();
        popSubviewStack();
        handleEditProfile(
          newBio,
          images.length == 0 ? profilePic : images[0].uri
        );
      },
      onError: () => {
        closeFloatingView();
        popSubviewStack();
      },
    });
  };

  const tranformImagesToMediaType = (): MediaType[] => {
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

  return (
    <View style={{ gap: 10 }}>
      <View style={styles.profilePicWrapper}>
        <SHDNAImage
          source={{ uri: images.length === 0 ? profilePic : images[0].uri }}
          style={styles.profilePic}
        />
      </View>
      <SHDNAButton
        text="Change Profile Picture"
        onClick={() => openLibrary()}
      />
      <View style={{ gap: 10 }}>
        <SHDNAText fontWeight="SemiBold" style={styles.biographyText}>
          Biography
        </SHDNAText>
        <SHDNATextArea value={newBio} onChange={setNewBio} fixedHeight={150} />
      </View>
      <View style={styles.saveButton}>
        <SHDNAButton
          text="Save Changes"
          onClick={() => handleSaveChanges()}
          state={ButtonStates.ACTIVE}
          isDisabled={newBio === bio && images.length == 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 200,
    aspectRatio: 1 / 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  profilePicWrapper: {
    alignItems: "center",
  },
  biographyText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.Gray2,
    marginTop: 20,
  },
  saveButton: {
    marginTop: 175,
  },
});
