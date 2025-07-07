import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import SHDNAText from "@/src/Components/SHDNAText";
import SHDNAUploadFile from "@/src/Components/SHDNAUploadFile";
import { MediaType } from "../SHDNACreatePostView";
import SHDNACompactAudioPlayer from "@/src/Components/SHDNACompactAudioPlayer";
import SHDNATextInput from "@/src/Components/SHDNATextInput";
import SHDNAButton, { ButtonStates } from "@/src/Components/SHDNAButton";
import { graphql, useMutation } from "react-relay";
import { SHDNAPodcastAddMutation } from "./__generated__/SHDNAPodcastAddMutation.graphql";
import { useFloatingView } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";
import { useSheet } from "@/src/Components/Sheet/SHDNASheetContext";
import { useModal } from "@/src/Components/Modal/SHDNAModalContext";

export default function SHDNAPodcastAdd({ refetch }: { refetch: () => void }) {
  const [title, setTitle] = useState("");
  const [episode, setEpisode] = useState<MediaType[]>([]);

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { closeSheet } = useSheet();
  const { openModal } = useModal();

  const [commitMutation] = useMutation<SHDNAPodcastAddMutation>(graphql`
    mutation SHDNAPodcastAddMutation($input: EpisodeInput!) {
      createEpisode(input: $input)
    }
  `);

  const handleMutation = () => {
    const newAudio: MediaType = {
      uri: episode[0].uri,
      type: episode[0].type ?? "audio",
      fileName: episode[0].fileName,
      base64: episode[0].base64.replace(/^data:audio\/[^;]+;base64,/, ""),
    };

    openFloatingView(<SHDNALoadingBlackView />);

    commitMutation({
      variables: {
        input: {
          title,
          audio: newAudio,
        },
      },
      onCompleted: () => {
        closeFloatingView();
        refetch();
        closeSheet();
      },
      onError(error) {
        closeFloatingView();
        console.log(error);
        openModal(<SHDNAText>{error.message}</SHDNAText>, true);
      },
    });
  };

  return (
    <View style={styles.content}>
      <View style={{ gap: 10 }}>
        <SHDNAText fontWeight="SemiBold">Title:</SHDNAText>
        <SHDNATextInput value={title} onChange={setTitle} />
      </View>
      <View style={{ gap: 10, marginBottom: 15 }}>
        <SHDNAText fontWeight="SemiBold">Audio File:</SHDNAText>
        <SHDNAUploadFile
          type={["audio/mpeg", "audio/wav", "audio/x-m4a", "audio/mp3"]}
          selectedFiles={episode}
          onSelectFiles={(episode: MediaType[]) => setEpisode(episode)}
          allowMultiple={false}
        />
      </View>
      <View>
        <SHDNACompactAudioPlayer
          source={{ uri: episode.length === 0 ? "" : episode[0].uri }}
          disablePlayer={episode.length === 0}
        />
      </View>
      <View style={styles.sendButton}>
        <SHDNAButton
          text="Submit"
          onClick={() => handleMutation()}
          state={ButtonStates.ACTIVE}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
    gap: 30,
  },
  sendButton: {
    marginTop: 50,
  },
});
