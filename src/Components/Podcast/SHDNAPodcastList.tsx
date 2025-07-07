import { View, StyleSheet } from "react-native";
import { graphql, useLazyLoadQuery } from "react-relay";
import React from "react";
import SHDNAPodcastBlock from "./SHDNAPodcastBlock";
import { SHDNAPodcastListQuery } from "./__generated__/SHDNAPodcastListQuery.graphql";
import { PodcastEpisode } from "@/src/Views/Podcast/SHDNAPodcastView";
import { useSHDNAPodcastList } from "@/src/hooks/useSHDNAPodcastList";
import { FragmentRefs } from "relay-runtime";

type SHDNAPodcastListProps = {
  episodes: readonly {
    readonly " $fragmentSpreads": FragmentRefs<"SHDNAPodcastBlockFragment">;
  }[];
  currentEp: PodcastEpisode | null;
  setCurrentEp: (ep: PodcastEpisode) => void;
};

export default function SHDNAPodcastList({
  episodes,
  currentEp,
  setCurrentEp,
}: SHDNAPodcastListProps) {
  return (
    <View style={styles.listChapters}>
      {episodes.map((fragment, idx) => {
        return (
          <SHDNAPodcastBlock
            podcastKey={fragment}
            currentEp={currentEp}
            setCurrentEp={setCurrentEp}
            key={"podcast" + idx}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  listChapters: {
    gap: 15,
  },
});
