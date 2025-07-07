import { View, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import SHDNABlock from "../SHDNABlock";
import { SHDNAPodcastBlockFragment$key } from "./__generated__/SHDNAPodcastBlockFragment.graphql";
import { Colors } from "../../../assets/SHDNAColors";
import SHDNAText from "../SHDNAText";
import { PodcastEpisode } from "@/src/Views/Podcast/SHDNAPodcastView";

type SHDNAPodcastBlockProps = {
  podcastKey: SHDNAPodcastBlockFragment$key;
  currentEp: PodcastEpisode | null;
  setCurrentEp: (ep: PodcastEpisode) => void;
};

export default function SHDNAPodcastBlock({
  podcastKey,
  setCurrentEp,
  currentEp,
}: SHDNAPodcastBlockProps) {
  const data = useFragment(
    graphql`
      fragment SHDNAPodcastBlockFragment on PodcastChapter {
        id
        title
        description
        audio_url
      }
    `,
    podcastKey
  );

  return (
    <SHDNABlock
      key={data.title}
      borderColor={
        currentEp?.audio_url === data.audio_url ? Colors.Red1 : Colors.Gray1
      }
      style={styles.block}
      onClick={() => {
        setCurrentEp({
          id: data.id,
          title: data.title,
          audio_url: data.audio_url,
        });
      }}
    >
      <View style={styles.podcastInfo}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
        >
          <SHDNAText
            style={{ fontSize: 16 }}
            numberOfLines={1}
            fontWeight="Bold"
          >
            {data.title}
          </SHDNAText>
          {/* {currentEp?.audio_url === EPISODE.audio_url && (
            <SHDNAText
              style={{ fontSize: 14, color: Colors.Red2 }}
              numberOfLines={1}
              fontWeight="SemiBold"
            >
              Now Playing
            </SHDNAText>
          )} */}
        </View>
        {data.description !== "" && (
          <SHDNAText style={{ fontSize: 14 }} fontWeight="SemiBold">
            {data.description}
          </SHDNAText>
        )}
      </View>
    </SHDNABlock>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    flex: 1,
  },
  cover: {
    width: 100,
    height: 75,
  },
  podcastInfo: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
    padding: 10,
  },
});
