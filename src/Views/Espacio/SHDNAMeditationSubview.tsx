import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import SHDNAText from "../../Components/SHDNAText";
import { graphql, useFragment, useMutation } from "react-relay";
import { SHDNAMeditationSubview_fragmment$key } from "./__generated__/SHDNAMeditationSubview_fragmment.graphql";
import SHDNAVideoPlayer from "../../Components/SHDNAVideoPlayer";
import SHDNAImage from "../../Components/SHDNAImage";
import SHDNAAudioPlayer from "../../Components/SHDNAAudioPlayer";
import SHDNABlock from "@/src/Components/SHDNABlock";
import SHDNATextInput from "@/src/Components/SHDNATextInput";
import SHDNAButton, { ButtonStates } from "@/src/Components/SHDNAButton";
import EditSVG from "@/assets/RNSvgs/EditSVG";
import SHDNATextArea from "@/src/Components/SHDNATextArea";
import { useFloatingView } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";
import { useModal } from "@/src/Components/Modal/SHDNAModalContext";
import { SHDNAMeditationSubviewEditMutation } from "./__generated__/SHDNAMeditationSubviewEditMutation.graphql";
import { SHDNAMeditationSubviewDeleteMutation } from "./__generated__/SHDNAMeditationSubviewDeleteMutation.graphql";
import Cross from "@/assets/RNSvgs/Cross";

type SHDNAMeditationSubviewProps = {
  meditationKey: SHDNAMeditationSubview_fragmment$key;
};

enum MediaType {
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  IMAGE = "IMAGE",
}

export default function SHDNAMeditationSubview({
  meditationKey,
}: SHDNAMeditationSubviewProps) {
  const [isEditing, setIsEditing] = useState(false);

  const data = useFragment<SHDNAMeditationSubview_fragmment$key>(
    graphql`
      fragment SHDNAMeditationSubview_fragmment on Meditation {
        id
        title
        description
        media
        mediaType
      }
    `,
    meditationKey
  );

  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);

  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
  }, [data]);

  const Media = () => {
    switch (data.mediaType) {
      case MediaType.VIDEO:
        return <SHDNAVideoPlayer videoSource={data.media} />;
      case MediaType.IMAGE:
        return (
          <View style={{ flex: 1, width: "100%", height: 250 }}>
            <SHDNAImage
              source={{ uri: data.media }}
              style={{ flex: 1, borderRadius: 10, overflow: "hidden" }}
            />
          </View>
        );
      case MediaType.AUDIO:
        return <SHDNAAudioPlayer source={{ uri: data.media }} />;
    }
  };

  const [commitEditMutation] = useMutation<SHDNAMeditationSubviewEditMutation>(
    graphql`
      mutation SHDNAMeditationSubviewEditMutation(
        $input: UpdateMeditationInput!
      ) {
        updateMeditation(input: $input)
      }
    `
  );

  const [commitDeleteMutation] =
    useMutation<SHDNAMeditationSubviewDeleteMutation>(
      graphql`
        mutation SHDNAMeditationSubviewDeleteMutation($id: ID!) {
          deleteMeditation(id: $id)
        }
      `
    );

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { openModal, closeModal } = useModal();

  const handleEditMutation = () => {
    openFloatingView(<SHDNALoadingBlackView />);
    commitEditMutation({
      variables: {
        input: { id: data.id, title, description },
      },
      onCompleted: () => {
        closeFloatingView();
        setIsEditing(false);
      },
      onError: () => {
        closeFloatingView();
        setIsEditing(false);
      },
    });
  };

  const handleDeleteMutation = () => {
    closeModal();
    openFloatingView(<SHDNALoadingBlackView />);
    commitDeleteMutation({
      variables: {
        id: data.id,
      },
      onCompleted: () => {
        closeFloatingView();
        setIsEditing(false);
      },
      onError: () => {
        closeFloatingView();
        setIsEditing(false);
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
        <SHDNAText
          style={{ textAlign: "center", fontSize: 20 }}
          fontWeight="Bold"
        >
          Are you sure you want to delete this news?
        </SHDNAText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 15,
          }}
        >
          <SHDNAButton
            onClick={() => handleDeleteMutation()}
            text="Delete"
            state={ButtonStates.ALERT}
          />
          <SHDNAButton onClick={() => closeModal()} text="Cancel" />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <SHDNABlock style={styles.block}>
        <View style={{ gap: 10 }}>
          <View style={styles.header}>
            {isEditing ? (
              <SHDNATextInput
                value={title}
                onChange={setTitle}
                placeholder="Meditation Title"
              />
            ) : (
              <SHDNAText fontWeight="SemiBold" style={{ fontSize: 24 }}>
                {title}
              </SHDNAText>
            )}
            <SHDNAButton
              Icon={isEditing ? Cross : EditSVG}
              state={ButtonStates.TRANSPARENT}
              onClick={() => setIsEditing(!isEditing)}
              iconSize={20}
            />
          </View>
          {isEditing ? (
            <SHDNATextArea
              value={description}
              onChange={setDescription}
              height={200}
              placeholder="Meditation Description"
            />
          ) : (
            <SHDNAText>{description}</SHDNAText>
          )}
          <View
            style={{ marginTop: 20, opacity: isEditing ? 0.5 : 1, gap: 10 }}
          >
            <Media />
            {isEditing && (
              <SHDNAText>
                Media cannot be edited, instead delete this and create a new
                Meditation
              </SHDNAText>
            )}
          </View>
        </View>
        {isEditing && (
          <View
            style={{
              gap: 10,
            }}
          >
            <View style={{ marginTop: 25 }}>
              <SHDNAButton text="Save" onClick={() => handleEditMutation()} />
            </View>
            <View>
              <SHDNAButton
                text="Delete"
                onClick={() => openModal(<DeleteModal />, false)}
                state={ButtonStates.ALERT}
              />
            </View>
          </View>
        )}
      </SHDNABlock>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  block: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
});
