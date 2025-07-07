import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import SHDNAText from "@/src/Components/SHDNAText";
import SHDNACompactAudioPlayer from "@/src/Components/SHDNACompactAudioPlayer";
import SHDNATextInput from "@/src/Components/SHDNATextInput";
import SHDNAUploadFile from "@/src/Components/SHDNAUploadFile";
import { MediaType } from "../SHDNACreatePostView";
import { PodcastEpisode } from "./SHDNAPodcastView";
import SHDNAButton, { ButtonStates } from "@/src/Components/SHDNAButton";
import { graphql, useMutation } from "react-relay";
import { useFloatingView } from "@/src/Components/FloatingView/SHDNAFloatingViewContext";
import { useModal } from "@/src/Components/Modal/SHDNAModalContext";
import SHDNALoadingBlackView from "../SHDNALoadingBlackView";
import { SHDNAPodcastChapterMutation } from "./__generated__/SHDNAPodcastChapterMutation.graphql";
import { SHDNAPodcastChapterDeletionMutation } from "./__generated__/SHDNAPodcastChapterDeletionMutation.graphql";

type SHDNAPodcastChapterProps = {
  episodeData: PodcastEpisode;
  isEditing: boolean;
  refetch: () => void;
};

type EpisodeUpdate = {
  id: string;
  audio?: MediaType | null;
  title?: string;
};

export default function SHDNAPodcastChapter({
  episodeData,
  isEditing,
  refetch,
}: SHDNAPodcastChapterProps) {
  const [title, setTitle] = useState(episodeData.title);
  const [episodeURI, setEpisodeURI] = useState(episodeData.audio_url);
  const [episode, setEpisode] = useState<MediaType[]>([]);

  const { openFloatingView, closeFloatingView } = useFloatingView();
  const { openModal } = useModal();

  const [commitMutation] = useMutation<SHDNAPodcastChapterMutation>(graphql`
    mutation SHDNAPodcastChapterMutation($input: UpdateEpisodeInput!) {
      updateEpisode(input: $input)
    }
  `);

  const handleMutation = () => {
    const newData: EpisodeUpdate = {
      id: episodeData.id,
      audio: null,
      title,
    };

    if (episode.length > 0) {
      const newAudio: MediaType = {
        uri: episode[0].uri,
        type: episode[0].type ?? "audio",
        fileName: episode[0].fileName,
        base64: episode[0].base64 ?? "",
      };

      newData.audio = newAudio;
    }

    openFloatingView(<SHDNALoadingBlackView />);

    commitMutation({
      variables: {
        input: { ...newData },
      },
      onCompleted: () => {
        closeFloatingView();
        refetch();
      },
      onError(error) {
        closeFloatingView();
        openModal(<SHDNAText>{error.message}</SHDNAText>, true);
      },
    });
  };

  const [commitDeleteMutation] =
    useMutation<SHDNAPodcastChapterDeletionMutation>(graphql`
      mutation SHDNAPodcastChapterDeletionMutation($id: ID!) {
        deleteEpisode(id: $id)
      }
    `);

  const handleDeleteMutation = () => {
    openFloatingView(<SHDNALoadingBlackView />);

    commitDeleteMutation({
      variables: {
        id: episodeData.id,
      },
      onCompleted: () => {
        closeFloatingView();
        refetch();
      },
      onError(error) {
        closeFloatingView();
        openModal(<SHDNAText>{error.message}</SHDNAText>, true);
      },
    });
  };

  useEffect(() => {
    setTitle(episodeData.title);
    setEpisodeURI(episodeData.audio_url);
    setEpisode([]);
  }, [episodeData, isEditing]);

  const isDisabled = episodeData.title === title && episode.length === 0;

  return (
    <View style={styles.items}>
      <View style={styles.subitems}>
        <SHDNAText fontWeight="SemiBold" style={styles.titleTag}>
          Title:
        </SHDNAText>
        {isEditing ? (
          <SHDNATextInput value={title} onChange={setTitle} />
        ) : (
          <SHDNAText style={styles.title}>{title}</SHDNAText>
        )}
      </View>
      {isEditing && (
        <SHDNAUploadFile
          type={["audio/mpeg", "audio/wav", "audio/x-m4a", "audio/mp3"]}
          selectedFiles={episode}
          onSelectFiles={(episode: MediaType[]) => {
            setEpisode(episode);
            setEpisodeURI(episode[0].uri);
          }}
          allowMultiple={false}
        />
      )}
      <View>
        <SHDNACompactAudioPlayer
          source={{
            uri: episodeURI,
          }}
          pauseTrigger={episodeData.title}
        />
      </View>
      {isEditing && (
        <View style={styles.buttonWrapper}>
          <SHDNAButton
            text="Save Changes"
            isDisabled={isDisabled}
            state={ButtonStates.ACTIVE}
            onClick={() => handleMutation()}
          />
          <SHDNAButton text="Delete" onClick={() => handleDeleteMutation()} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleTag: {
    fontSize: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
  },
  items: {
    gap: 40,
  },
  subitems: {
    gap: 15,
  },
  buttonWrapper: {
    gap: 20,
    marginTop: 50,
  },
});
